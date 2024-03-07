  import { React, useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Image from "mui-image";
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DatePicker } from '@mui/lab';
import { getProcesi } from 'services/fuk-proces.services'
import { getNepravilnost, getNepravilnosti, patchNepravilnost, postNepravilnost, deleteNepravilnost } from 'services/fuk-nepravilnost.services'
import { makeStyles } from "@material-ui/core/styles";
  

// assets
import AddIconSrc from 'assets/assets/icons/add-icon.svg';
import EditIcon from 'assets/assets/icons/edit-icon.svg';
import TrashIcon from 'assets/assets/icons/trash-icon.svg';
import PrintIcon from 'assets/assets/icons/print-icon.svg';

const AddIcon = (
  <Icon>
    <img alt="add" src={AddIconSrc} width={"100%"}/>
  </Icon>
);


const useStyles = makeStyles({
  tableWrapper: {
    overflowX: "auto",
    position: "sticky",
    top: 0,
    zIndex: 1,
    width: "100%",
    backgroundColor: "transparent",
  },
});



const printLink = process.env.REACT_APP_PRINT_LINK;



const IrregularityRecords = () => {
  // styles
  const optionButtons = {
    textTransform: "none",
  };

  const formContainer = {
    width: "100%",
    maxWidth: "90%",
    margin: "auto",
    // padding: 4,
    display: "inline-block",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonMargin = {
    marginBottom: 3,
  };

  const options = {
    selectableRows: "none",
    elevation: 0,
    pagination: false,
    sortOrder: {
      name: "Датум",
      direction: "desc",
    },
    textLabels: {
      body: {
        noMatch: "Нема резултата",
        toolTip: "Сортирај",
        columnHeaderTooltip: (column) => `Сортирај по ${column.label.toLowerCase()}`,
      },
      pagination: {
        next: "Следећа страна",
        previous: "Претходна страна",
        rowsPerPage: "Резултати по страни:",
        displayRows: "од",
      },
      filter: {
        all: "Сви",
        title: "ФИЛТЕРИ",
        reset: "РЕСЕТ",
      },
      viewColumns: {
        title: "Прикажи колоне",
        titleAria: "Прикажи/уклони колоне",
      },
    },
    search: "Претрага",
    downloadCsv: "Преузми ЦСВ",
    print: false,
    viewColumns: "Одабери колоне",
    filterTable: "Филтрирај",
    customToolbar: () => {
      return <Tooltip title="Print">
        <Button onClick={(e) => {
          // e.stopPropagation();
          }}
          sx={{
            justifyContent: "flex-end",
            padding: "0",
            order: 4,
          }}
          href={`http://${printLink}/print/risk`} target="_blank">
            <Image src={PrintIcon} width={40} height={40}></Image>
        </Button>
      </Tooltip>;
    },
  };

  const inputSpacing = { marginBottom: 3 };


  const navigate = useNavigate();
  const [procesi, setProcesi] = useState([]);
  const [nepravilnosti, setNepravilnosti] = useState([]);

  const nepravilnostiColumns = [
    {
      label: "Редни број",
      name: "redni-broj",
    },
    {
      label: "Шифра процеса",
      name: "sifra-procesa",
    },
    {
      label: "Назив пословног процеса",
      name: "naziv-poslovnog-procesa",
    },
    {
      label: "Радно место и име лица задуженог за пријем сумње на неправилност",
      name: "radno-mesto-i-zaduzeno-lice-za-prijem",
    },
    {
      label: "Датум пријављивања неправилности",
      name: "datum-nepravilnosti",
    },
    {
      label: "Место пријављивања неправилности",
      name: "mesto-nepravilnosti",
    },
    {
      label: "Кратак опис сумње на неправилности",
      name: "kratak-opis",
    },
    {
      label: "Навођење приложених доказа",
      name: "prilozeni-dokazi",
    },
    {
      label: "Радно место и име лица које је уочило неправилност или назив организационе целине",
      name: "radno-mesto-i-ime-lica-koje-je-uocilo-nepravilnost",
    },
    {
      label: "Одлука о даљем поступању по сумњи на неправилност",
      name: "odluka-o-daljem-postupanju",
    },
    {
      label: "Датум одлуке о даљем поступању по сумњи на неправилност",
      name: "datum-odluke-o-daljem-postupanju",
    },
    {
      label: "Обавештење лицу које је уочило неправилност",
      name: "obavestenje-licu-koje-je-uocilo-nepravilnost",
    },
    {
      label: "Датум обавештења лицу које је уочило неправилност",
      name: "datum-obavestenja-licu-koje-je-uocilo-nepravilnost",
    },
    {
      label: "Доказ о прослеђивању вишем нивоу руковођења сумње на неправилности",
      name: "dokaz-o-prosledjivanju-visem-nivou-rukovodjenja",
    },
    {
      label: "Датум доказа о прослеђивању вишем нивоу руковођења сумње на неправилности",
      name: "datum-dokaza-o-proslednjivanju-visem-nivou-rukovodjenja",
    },
    {
      label: "Утврђена неправилност",
      name: "utvrdjena-nepravilnost",
    },
    {
      label: "Врста неправилности",
      name: "vrsta-nepravilnosti",
    },
    {
      label: "Предузета активност за умањење ризика од уочене неправилности",
      name: "preduzeta-aktivnost-za-umanjivanje-rizika-od-nepravilnosti",
    },
    {
      label: "Донета мера за отклањање или умањење последица реализованих неправилности",
      name: "doneta-mera-za-otklanjanje-ili-umanjenje-posledica",
    },
    {
      label: "Рок за отклањање узрока неправилности",
      name: "rok-za-otklanjanje-nepravilnosti",
    },
    {
      label: "Навођење доказа о реализацији мера за отклањање",
      name: "navodjenje-dokaza-o-realizaciji-mere",
    },
    {
      label: "Обавештење вишем руководству о предузетим активностима за умањење ризика и мерама",
      name: "obavestenje-visem-rukovodstvu-i-organizacionoj-celini",
    },
    {
      label: "Датум обавештења вишем руководству и организационој целини од које је добијена сумња",
      name: "datum-obavestenja-visem-rukovodstvu",
    },
    {
      label: "Информације од вишег руководства о предузетим активностима за умањење ризика и мерама",
      name: "informacije-od-viseg-rukovodstva",
    },
    {
      label: "Датум информација од вишег руководства о предузетим активностима за умањење ризика и мерама",
      name: "datum-informacija-od-viseg-rukovodstva",
    },
    {
      name: "",
      label: "",
      options: {
        filter: false,
        sort: false,
        searchable: false,
        viewColumns: true,
        display: true,
      },
    },
    {
      name: "",
      label: "",
      options: {
        filter: false,
        sort: false,
        searchable: false,
        viewColumns: true,
        display: true,
      },
    },
  ]

  const [nepravilnostId, setNepravilnostId] = useState(-1);
  const [proces, setProces] = useState("");
  const [sifraProcesa, setSifraProcesa] = useState("0");
  const [nosilac, setNosilac] = useState("");
  const [datumPrijave, setDatumPrijave] = useState(null);
  const [mesto, setMesto] = useState("");
  const [krOpis, setKrOpis] = useState("");
  const [dokazi, setDokazi] = useState("");
  const [uocio, setUocio] = useState("");
  const [odlukaDoneta, setOdlukaDoneta] = useState(false);
  const [odlukaDatum, setOdlukaDatum] = useState(null);
  const [obavestenjePoslato, setObavestenjePoslato] = useState(false);
  const [obavestenjeDatum, setObavestenjeDatum] = useState(null);
  const [obavestVNPoslato, setObavestVNPoslato] = useState(false);
  const [obavestVNDatum, setObavestVNDatum] = useState(null);
  const [utvrdjena, setUtvrdjena] = useState(false);
  const [vrsta, setVrsta] = useState("");
  const [aktivnosti, setAktivnosti] = useState("");
  const [mera, setMera] = useState("");
  const [rok, setRok] = useState(null);
  const [meraDokazi, setMeraDokazi] = useState("");
  const [obavestenjeVRPoslato, setObavestenjeVRPoslato] = useState(false);
  const [obavestenjeVRDatum, setObavestenjeVRDatum] = useState(null);
  const [infoVNPrimljen, setInfoVNPrimljen] = useState(false);
  const [infoVNDatumPrijema, setInfoVNDatumPrijema] = useState(null);

  // get all data
  useEffect(() => {
    (async () => {
      // procesi
      const res = await getProcesi();
      const procesiData = res.data.fuk_procesi

      var tempProcesi = [{ code: "0", name: <em>Одаберите</em>}];

      for (var i = 0; i < procesiData.length; i++) {
        tempProcesi.push({
          code: procesiData[i].prcs_sifra,
          name: procesiData[i].prcs_naziv,
        });
      }

      setProcesi(tempProcesi);

      // nepravilnosti
      const res2 = await getNepravilnosti();
      const nepravilnostiData = res2.data.fuk_nepravilnosti


      var tempNepravilnosti = []

      for (var i = 0; i < nepravilnostiData.length; i++) {
        tempNepravilnosti.push([
          // nepravilnostiData[i].prcs_id,
          // nepravilnostiData[i].ord_id,
          // nepravilnostiData[i].obl_id,
          nepravilnostiData[i].nprv_rbr,
          nepravilnostiData[i].prcs_sifra,
          nepravilnostiData[i].prcs_naziv,
          nepravilnostiData[i].nprv_nosilac,
          getFormattedDate(nepravilnostiData[i].nprv_datum),
          nepravilnostiData[i].nprv_mesto,
          nepravilnostiData[i].nprv_kropis,
          nepravilnostiData[i].nprv_dokazi,
          nepravilnostiData[i].nprv_uocio,
          nepravilnostiData[i].nprv_odlukadoneta === 0 ? "Не" : "Да",
          getFormattedDate(nepravilnostiData[i].nprv_odlukadatum),
          nepravilnostiData[i].nprv_obavestenjeposlato === 0 ? "Не" : "Да",
          getFormattedDate(nepravilnostiData[i].nprv_obavestenjedatum),
          nepravilnostiData[i].nprv_obavestvnposlato === 0 ? "Не" : "Да",
          getFormattedDate(nepravilnostiData[i].nprv_obavestvndatum),
          nepravilnostiData[i].nprv_utvrdjena === 0 ? "Не" : "Да",
          nepravilnostiData[i].nprv_vrsta,
          nepravilnostiData[i].nprv_aktivnosti,
          nepravilnostiData[i].nprv_mera,
          getFormattedDate(nepravilnostiData[i].nprv_rok),
          nepravilnostiData[i].nprv_meradokazi,
          nepravilnostiData[i].nprv_obavestenjevrposlato === 0 ? "Не" : "Да",
          getFormattedDate(nepravilnostiData[i].nprv_obavestenjevrdatum),
          nepravilnostiData[i].nprv_infovnprimljen === 0 ? "Не" : "Да",
          getFormattedDate(nepravilnostiData[i].nprv_infovndatumprijema),
          <Button className='drop-btn no-pointer-events'
            aria-label="expand row"
            size="small"
            value={nepravilnostiData[i].nprv_id}
            sx={{
              width: "40px !important",
              height: "40px !important",
              padding: "0",
              '& > div': {
                width: "40px !important",
                height: "40px !important",
              }
            }}
            onClick={e => handleClickOpenUpdate(e.target.value)}
          >
            <Image src={EditIcon} />
          </Button>,
          <Button className='drop-btn no-pointer-events'
            aria-label="expand row"
            size="small"
            value={nepravilnostiData[i].nprv_id}
            sx={{
              width: "40px !important",
              height: "40px !important",
              padding: "0",
              '& > div': {
                width: "40px !important",
                height: "40px !important",
              }
            }}
            onClick={e => handleClickOpenDelete(e.target.value)}
          >
            <Image src={TrashIcon} />
          </Button>
        ]);
      }

      setNepravilnosti(tempNepravilnosti);
    })();
  }, []);

    // ADD (DODAJ nepravilnost)
    const [openAdd, setOpenAdd] = useState(false);

    const handleClickOpenAdd = () => {
      setOpenAdd(true);
    };
  
    const handleConfirmAdd = async () => {
      
      var tempNepravilnost = {
        prcs_sifra: sifraProcesa,
        nprv_nosilac: nosilac,
        nprv_datum: datumPrijave,
        nprv_mesto: mesto,
        nprv_kropis: krOpis,
        nprv_dokazi: dokazi,
        nprv_uocio: uocio,
        nprv_odlukadoneta: odlukaDoneta,
        nprv_odlukadatum: odlukaDatum,
        nprv_obavestenjeposlato: obavestenjePoslato,
        nprv_obavestenjedatum: obavestenjeDatum,
        nprv_obavestvnposlato: obavestVNPoslato,
        nprv_obavestvndatum: obavestVNDatum,
        nprv_utvrdjena: utvrdjena,
        nprv_vrsta: vrsta,
        nprv_aktivnosti: aktivnosti,
        nprv_mera: mera,
        nprv_rok: rok,
        nprv_meradokazi: meraDokazi,
        nprv_obavestenjevrposlato: obavestenjeVRPoslato,
        nprv_obavestenjevrdatum: obavestenjeVRDatum,
        nprv_infovnprimljen: infoVNPrimljen,
        nprv_infovndatumprijema: infoVNDatumPrijema
      };
      // setNepravilnosti(tempNepravilnosti);
      const res3 = await postNepravilnost(tempNepravilnost);
      const nepravilnostiData = res3.data.fuk_nepravilnost;
  
      setOpenAdd(false);
      // refresh to get the data from DB after we add it
      window.location.reload(false);
    };
  
    const handleCloseAdd = () => {
      setOpenAdd(false);
    };
  
    // UPDATE (PROMENI nepravilnost)
    const [openUpdate, setOpenUpdate] = useState(false);
  
    const handleClickOpenUpdate = async (id) => {      
      const res = await getNepravilnost(id)
      const nepravilnostData = res.data.fuk_nepravilnost

      const res2 = await getProcesi();
      const procesiData = res2.data.fuk_procesi

      var tempProcesi = [{ code: "0", name: <em>Одаберите</em>}];

      for (var i = 0; i < procesiData.length; i++) {
        tempProcesi.push({
          code: procesiData[i].prcs_sifra,
          name: procesiData[i].prcs_naziv,
        });
      }

      setNepravilnostId(id)
      setProces(nepravilnostData.proces)
      setSifraProcesa(nepravilnostData.prcs_sifra)
      const index = tempProcesi.findIndex(opt => opt.code === nepravilnostData.prcs_sifra);
      if (index >= 0) {
        setProces(tempProcesi[index].name);
      }

      setNosilac(nepravilnostData.nprv_nosilac)
      setDatumPrijave(nepravilnostData.nprv_datum)
      setMesto(nepravilnostData.nprv_mesto)
      setKrOpis(nepravilnostData.nprv_kropis)
      setDokazi(nepravilnostData.nprv_dokazi)
      setUocio(nepravilnostData.nprv_uocio)
      setOdlukaDoneta(nepravilnostData.nprv_odlukadoneta)
      setOdlukaDatum(nepravilnostData.nprv_odlukadatum)
      setObavestenjePoslato(nepravilnostData.nprv_obavestenjeposlato)
      setObavestenjeDatum(nepravilnostData.nprv_obavestenjedatum)
      setObavestVNPoslato(nepravilnostData.nprv_obavestvnposlato)
      setObavestVNDatum(nepravilnostData.nprv_obavestvndatum)
      setUtvrdjena(nepravilnostData.nprv_utvrdjena)
      setVrsta(nepravilnostData.nprv_vrsta)
      setAktivnosti(nepravilnostData.nprv_aktivnosti)
      setMera(nepravilnostData.nprv_mera)
      setRok(nepravilnostData.nprv_rok)
      setMeraDokazi(nepravilnostData.nprv_meradokazi)
      setObavestenjeVRPoslato(nepravilnostData.nprv_obavestenjevrposlato)
      setObavestenjeVRDatum(nepravilnostData.nprv_obavestenjevrdatum)
      setInfoVNPrimljen(nepravilnostData.nprv_infovnprimljen)
      setInfoVNDatumPrijema(nepravilnostData.nprv_infovndatumprijema)

      // open pop up
      setOpenUpdate(true);
    };
  
    const handleConfirmUpdate = async () => {
      var tempNepravilnost = {
        prcs_sifra: sifraProcesa,
        nprv_nosilac: nosilac,
        nprv_datum: datumPrijave,
        nprv_mesto: mesto,
        nprv_kropis: krOpis,
        nprv_dokazi: dokazi,
        nprv_uocio: uocio,
        nprv_odlukadoneta: odlukaDoneta,
        nprv_odlukadatum: odlukaDatum,
        nprv_obavestenjeposlato: obavestenjePoslato,
        nprv_obavestenjedatum: obavestenjeDatum,
        nprv_obavestvnposlato: obavestVNPoslato,
        nprv_obavestvndatum: obavestVNDatum,
        nprv_utvrdjena: utvrdjena,
        nprv_vrsta: vrsta,
        nprv_aktivnosti: aktivnosti,
        nprv_mera: mera,
        nprv_rok: rok,
        nprv_meradokazi: meraDokazi,
        nprv_obavestenjevrposlato: obavestenjeVRPoslato,
        nprv_obavestenjevrdatum: obavestenjeVRDatum,
        nprv_infovnprimljen: infoVNPrimljen,
        nprv_infovndatumprijema: infoVNDatumPrijema
      };
      const res3 = await patchNepravilnost(nepravilnostId, tempNepravilnost);
      const nepravilnostiData = res3.data.fuk_nepravilnost;
      setOpenUpdate(false);
  
      // refresh to get the data from DB after we add it
      window.location.reload(false);
    };
  
    const handleCloseUpdate = () => {
      setOpenUpdate(false);
    };
    
    // DELETE (OBRISI nepravilnost)
    const [openDelete, setOpenDelete] = useState(false);
  
    const handleClickOpenDelete = async (id) => {      
      setNepravilnostId(id)
      // open pop up
      setOpenDelete(true);
    };
  
    const handleConfirmDelete = async () => {
      
      const res3 = await deleteNepravilnost(nepravilnostId);
      const nepravilnostiData = res3.data.fuk_nepravilnost;
      setOpenDelete(false);
  
      // refresh to get the data from DB after we add it
      window.location.reload(false);
    };
  
    const handleCloseDelete = () => {
      setOpenDelete(false);
    };


  const getFormattedDate = (date) => {
    const dateObj = new Date(date)
    if (dateObj.getFullYear() !== null && dateObj.getMonth() !== null && dateObj.getDate() !== null) {
      const formattedDate = [dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate()].join('-');
      return formattedDate;  
    } else {
      return null;
    }
  }

  const classes = useStyles();

  

  return (
    <Box sx={{ 
      ...formContainer ,
      width: "100%",
      maxWidth: "1760px",
      display: "flex",
      flexDirection: "column", 
      justifyContent: "flex-end",
      mx: "0",
      marginLeft: "400px",
      paddingTop: "50px",
      // '@media (max-width: 1920px)': {
      //   maxWidth: "1400px",
      // }
    }}>
      <Box sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
      }}>
        <Button variant="contained" sx={{ 
          ...buttonMargin,
          position: "absolute",
          top: "4px",
          zIndex: "990",
          backgroundColor: "#3AD1E8",
          borderRadius: "5px",
          justifyContent: "flex-end",
          gap: "10px",
          boxShadow: "none",
          '&:focus':{
            backgroundColor:"#3AD1E8",
          },
          '@media (max-width: 1920px)': {
            right: "50px",
            fontSize: "14px",
            lineHeight: "0",
            padding: "8px 16px",
          }
        }} 
        onClick={handleClickOpenAdd}>
          Додавање неправилности<Image src={AddIconSrc} className={"edit-btn-img"} width={"18px"} height={"18px"}></Image>
        </Button>
        {/* add dialog */}
        <Dialog open={openAdd} onClose={handleCloseAdd} className="edit-risk-irregularity-popup">
          <DialogTitle>Додавање неправилности</DialogTitle>
          <DialogContent>
            <FormControl sx={{ ...inputSpacing }}
                variant="filled"
                fullWidth>
              <InputLabel id="dropdown-select-medium">Процес</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sifraProcesa}
                onChange={
                  (е) => {
                    const index = procesi.findIndex(opt => opt.code === е.target.value);
                    if (index > 0) {
                      setSifraProcesa(е.target.value);
                      setProces(procesi[index].name);
                    }
                  }
                }
              >
                {procesi?.map((option) => (
                  <MenuItem key={option.code} value={option.code}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>            
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="radno-mesto-i-ime-lica"
              label="Радно место и име лица задуженог за пријем сумње на неправилност"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={nosilac}
              onChange={
                (e) => {
                  setNosilac(e.target.value)
                }
              }
            />
            <FormControl
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <DatePicker
                label="Датум пријављивања неправилности"
                inputFormat="dd/MM/yyyy"
                autoComplete="off"
                value={datumPrijave}
                onChange={(newValue) => {
                  setDatumPrijave(getFormattedDate(newValue));
                }}
                renderInput={(params) => <TextField variant="filled" {...params} />}
              />
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="mesto-prijavljivanja"
              label="Место пријављивања неправилности"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={mesto}
              onChange={
                (e) => {
                  setMesto(e.target.value)
                }
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="kratak-opis"
              label="Кратак опис сумње на неправилности"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={krOpis}
              onChange={
                (e) => {
                  setKrOpis(e.target.value)
                }
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="navodjenje-dokaza"
              label="Навођење приложених доказа"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={dokazi}
              onChange={
                (e) => {
                  setDokazi(e.target.value)
                }
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="radno-mesto-ime-uocio"
              label="Радно место и име лица које је уочило неправилност или назив организационе јединице"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={uocio}
              onChange={
                (e) => {
                  setUocio(e.target.value)
                }
              }
            />
            <FormControl 
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <InputLabel id="odluka-o-daljem-postupanju">Одлука о даљем поступању по сумњи на направилност</InputLabel>
              <Select
                labelId="odluka-o-daljem-postupanju"
                id="odluka-o-daljem-postupanju"
                value={odlukaDoneta}
                label="Одлука о даљем поступању по сумњи на направилност"
                onChange={
                  (e) => {
                    setOdlukaDoneta(e.target.value)
                  }
                }
              >
                <MenuItem value={true}>Да</MenuItem>
                <MenuItem value={false}>Не</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <DatePicker
                label="Датум одлуке о даљем поступању по сумњи на направилност"
                inputFormat="dd/MM/yyyy"
                autoComplete="off"
                value={odlukaDatum}
                onChange={(newValue) => {
                  setOdlukaDatum(getFormattedDate(newValue));
                }}
                renderInput={(params) => <TextField variant="filled" {...params} />}
              />
            </FormControl>

            <FormControl 
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <InputLabel id="obavestenje-licu-koje-je-uocilo">Обавештење лицу које је уочило неправилност</InputLabel>
              <Select
                labelId="obavestenje-licu-koje-je-uocilo"
                id="obavestenje-licu-koje-je-uocilo"
                value={obavestenjePoslato}
                label="Обавештење лицу које је уочило неправилност"
                onChange={
                  (e) => {
                    setObavestenjePoslato(e.target.value)
                  }
                }
              >
                <MenuItem value={true}>Да</MenuItem>
                <MenuItem value={false}>Не</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <DatePicker
                label="Датум обавештења лицу које је уочило неправилност"
                inputFormat="dd/MM/yyyy"
                autoComplete="off"
                value={obavestenjeDatum}
                onChange={(newValue) => {
                  setObavestenjeDatum(getFormattedDate(newValue));
                }}
                renderInput={(params) => <TextField variant="filled" {...params} />}
              />
            </FormControl>
            <FormControl 
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <InputLabel id="dokaz-o-prosledjivanju">Доказ о прослеђивању вишем нивоу руковођења сумње на неправилности</InputLabel>
              <Select
                labelId="dokaz-o-prosledjivanju"
                id="dokaz-o-prosledjivanju"
                value={obavestVNPoslato}
                label="Доказ о прослеђивању вишем нивоу руковођења сумње на неправилности"
                onChange={
                  (e) => {
                    setObavestVNPoslato(e.target.value)
                  }
                }
              >
                <MenuItem value={true}>Да</MenuItem>
                <MenuItem value={false}>Не</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <DatePicker
                label="Датум доказа о прослеђивању вишем нивоу руковођења сумње на неправилности"
                inputFormat="dd/MM/yyyy"
                autoComplete="off"
                value={obavestVNDatum}
                onChange={(newValue) => {
                  setObavestVNDatum(getFormattedDate(newValue));
                }}
                renderInput={(params) => <TextField variant="filled" {...params} />}
              />
            </FormControl>
            <FormControl 
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <InputLabel id="utvrdjena-nepravilnost">Утврђена неправилност</InputLabel>
              <Select
                labelId="utvrdjena-nepravilnost"
                id="utvrdjena-nepravilnost"
                value={utvrdjena}
                label="Утврђена неправилност"
                onChange={
                  (e) => {
                    setUtvrdjena(e.target.value)
                  }
                }
              >
                <MenuItem value={true}>Да</MenuItem>
                <MenuItem value={false}>Не</MenuItem>
              </Select>
            </FormControl>

            <TextField
              autoFocus
              margin="dense"
              id="vrsta-nepravilnosti"
              label="Врста неправилности"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={vrsta}
              onChange={
                (e) => {
                  setVrsta(e.target.value)
                }
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="preduzeta-aktivnost"
              label="Предузета активност за умањење ризика од уочене неправилности"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={aktivnosti}
              onChange={
                (e) => {
                  setAktivnosti(e.target.value)
                }
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="doneta-mera"
              label="Донета мера за отклањање или умањење последица реализованих неправилности"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={mera}
              onChange={
                (e) => {
                  setMera(e.target.value)
                }
              }
            />
            <FormControl
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <DatePicker
                label="Рок за отклањање узрока неправилности"
                inputFormat="dd/MM/yyyy"
                autoComplete="off"
                value={rok}
                onChange={(newValue) => {
                  setRok(getFormattedDate(newValue));
                }}
                renderInput={(params) => <TextField variant="filled" {...params} />}
              />
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="navodjenje-dokaza-o-realizaciiji"
              label="Навођење доказа о реализацији мера за отклањање"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={meraDokazi}
              onChange={
                (e) => {
                  setMeraDokazi(e.target.value)
                }
              }
            />
            <FormControl 
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <InputLabel id="obavestenje-visem-rukovodstvu">Обавештење вишем руководству о предузетим активностима за умањење ризика и мерама</InputLabel>
              <Select
                labelId="obavestenje-visem-rukovodstvu"
                id="obavestenje-visem-rukovodstvu"
                value={obavestenjeVRPoslato}
                label="Обавештење вишем руководству о предузетим активностима за умањење ризика и мерама"
                onChange={
                  (e) => {
                    setObavestenjeVRPoslato(e.target.value)
                  }
                }
              >
                <MenuItem value={true}>Да</MenuItem>
                <MenuItem value={false}>Не</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <DatePicker
                label="Датум обавештења вишем руководству и организационој целини од које је добијена сумња"
                inputFormat="dd/MM/yyyy"
                autoComplete="off"
                value={obavestenjeVRDatum}
                onChange={(newValue) => {
                  setObavestenjeVRDatum(getFormattedDate(newValue));
                }}
                renderInput={(params) => <TextField variant="filled" {...params} />}
              />
            </FormControl>
            <FormControl 
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <InputLabel id="informacije-od-viseg-rukovodstva">Информације од вишег руководства о предузетим активностима за умањење ризика и мерама</InputLabel>
              <Select
                labelId="informacije-od-viseg-rukovodstva"
                id="informacije-od-viseg-rukovodstva"
                value={infoVNPrimljen}
                label="Инфорамације од вишег руководства о предузетим активностима за умањење ризика и мерама"
                onChange={
                  (e) => {
                    setInfoVNPrimljen(e.target.value)
                  }
                }
              >
                <MenuItem value={true}>Да</MenuItem>
                <MenuItem value={false}>Не</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <DatePicker
                label="Датум информација од вишег руководства о предузетим активностима за умањење ризика и мерама"
                inputFormat="dd/MM/yyyy"
                autoComplete="off"
                value={infoVNDatumPrijema}
                onChange={(newValue) => {
                  setInfoVNDatumPrijema(getFormattedDate(newValue));
                }}
                renderInput={(params) => <TextField variant="filled" {...params} />}
              />
            </FormControl>
          </DialogContent>
          <DialogActions sx={{
            justifyContent: "center",
            padding: "35px",
          }}>
            <Button onClick={handleCloseAdd} sx={{
              width: "230px",
              border: "1px solid #3AD1E84D",
              borderRadius: "5px",
              color: "#fff",
            }}>Откажи</Button>
            <Button onClick={handleConfirmAdd} sx={{
              width: "230px",
              backgroundColor: "#3AD1E8",
              borderRadius: "5px",
              color: "#0A1423",
            }}>Потврди</Button>
          </DialogActions>
        </Dialog>
        {/* update dialog */}
        <Dialog open={openUpdate} onClose={handleCloseUpdate} className="edit-risk-irregularity-popup">
          <DialogTitle>Промена неправилности</DialogTitle>
          <DialogContent>
            <FormControl sx={{ ...inputSpacing }}
                variant="filled"
                fullWidth>
              <InputLabel id="dropdown-select-medium">Процес</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sifraProcesa}
                onChange={
                  (е) => {
                    const index = procesi.findIndex(opt => opt.code === е.target.value);
                    if (index > 0) {
                      setSifraProcesa(е.target.value);
                      setProces(procesi[index].name);
                    }
                  }
                }
              >
                {procesi?.map((option) => (
                  <MenuItem key={option.code} value={option.code}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>            
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="radno-mesto-i-ime-lica"
              label="Радно место и име лица задуженог за пријем сумње на неправилност"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={nosilac}
              onChange={
                (e) => {
                  setNosilac(e.target.value)
                }
              }
            />
            <FormControl
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <DatePicker
                label="Датум пријављивања неправилности"
                inputFormat="dd/MM/yyyy"
                autoComplete="off"
                value={datumPrijave}
                onChange={(newValue) => {
                  setDatumPrijave(getFormattedDate(newValue));
                }}
                renderInput={(params) => <TextField variant="filled" {...params} />}
              />
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="mesto-prijavljivanja"
              label="Место пријављивања неправилности"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={mesto}
              onChange={
                (e) => {
                  setMesto(e.target.value)
                }
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="kratak-opis"
              label="Кратак опис сумње на неправилности"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={krOpis}
              onChange={
                (e) => {
                  setKrOpis(e.target.value)
                }
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="navodjenje-dokaza"
              label="Навођење приложених доказа"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={dokazi}
              onChange={
                (e) => {
                  setDokazi(e.target.value)
                }
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="radno-mesto-ime-uocio"
              label="Радно место и име лица које је уочило неправилност или назив организационе јединице"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={uocio}
              onChange={
                (e) => {
                  setUocio(e.target.value)
                }
              }
            />
            <FormControl 
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <InputLabel id="odluka-o-daljem-postupanju">Одлука о даљем поступању по сумњи на направилност</InputLabel>
              <Select
                labelId="odluka-o-daljem-postupanju"
                id="odluka-o-daljem-postupanju"
                value={odlukaDoneta}
                label="Одлука о даљем поступању по сумњи на направилност"
                onChange={
                  (e) => {
                    setOdlukaDoneta(e.target.value)
                  }
                }
              >
                <MenuItem value={true}>Да</MenuItem>
                <MenuItem value={false}>Не</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <DatePicker
                label="Датум одлуке о даљем поступању по сумњи на направилност"
                inputFormat="dd/MM/yyyy"
                autoComplete="off"
                value={odlukaDatum}
                onChange={(newValue) => {
                  setOdlukaDatum(getFormattedDate(newValue));
                }}
                renderInput={(params) => <TextField variant="filled" {...params} />}
              />
            </FormControl>

            <FormControl 
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <InputLabel id="obavestenje-licu-koje-je-uocilo">Обавештење лицу које је уочило неправилност</InputLabel>
              <Select
                labelId="obavestenje-licu-koje-je-uocilo"
                id="obavestenje-licu-koje-je-uocilo"
                value={obavestenjePoslato}
                label="Обавештење лицу које је уочило неправилност"
                onChange={
                  (e) => {
                    setObavestenjePoslato(e.target.value)
                  }
                }
              >
                <MenuItem value={true}>Да</MenuItem>
                <MenuItem value={false}>Не</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <DatePicker
                label="Датум обавештења лицу које је уочило неправилност"
                inputFormat="dd/MM/yyyy"
                autoComplete="off"
                value={obavestenjeDatum}
                onChange={(newValue) => {
                  setObavestenjeDatum(getFormattedDate(newValue));
                }}
                renderInput={(params) => <TextField variant="filled" {...params} />}
              />
            </FormControl>
            <FormControl 
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <InputLabel id="dokaz-o-prosledjivanju">Доказ о прослеђивању вишем нивоу руковођења сумње на неправилности</InputLabel>
              <Select
                labelId="dokaz-o-prosledjivanju"
                id="dokaz-o-prosledjivanju"
                value={obavestVNPoslato}
                label="Доказ о прослеђивању вишем нивоу руковођења сумње на неправилности"
                onChange={
                  (e) => {
                    setObavestVNPoslato(e.target.value)
                  }
                }
              >
                <MenuItem value={true}>Да</MenuItem>
                <MenuItem value={false}>Не</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <DatePicker
                label="Датум доказа о прослеђивању вишем нивоу руковођења сумње на неправилности"
                inputFormat="dd/MM/yyyy"
                autoComplete="off"
                value={obavestVNDatum}
                onChange={(newValue) => {
                  setObavestVNDatum(getFormattedDate(newValue));
                }}
                renderInput={(params) => <TextField variant="filled" {...params} />}
              />
            </FormControl>
            <FormControl 
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <InputLabel id="utvrdjena-nepravilnost">Утврђена неправилност</InputLabel>
              <Select
                labelId="utvrdjena-nepravilnost"
                id="utvrdjena-nepravilnost"
                value={utvrdjena}
                label="Утврђена неправилност"
                onChange={
                  (e) => {
                    setUtvrdjena(e.target.value)
                  }
                }
              >
                <MenuItem value={true}>Да</MenuItem>
                <MenuItem value={false}>Не</MenuItem>
              </Select>
            </FormControl>

            <TextField
              autoFocus
              margin="dense"
              id="vrsta-nepravilnosti"
              label="Врста неправилности"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={vrsta}
              onChange={
                (e) => {
                  setVrsta(e.target.value)
                }
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="preduzeta-aktivnost"
              label="Предузета активност за умањење ризика од уочене неправилности"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={aktivnosti}
              onChange={
                (e) => {
                  setAktivnosti(e.target.value)
                }
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="doneta-mera"
              label="Донета мера за отклањање или умањење последица реализованих неправилности"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={mera}
              onChange={
                (e) => {
                  setMera(e.target.value)
                }
              }
            />
            <FormControl
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <DatePicker
                label="Рок за отклањање узрока неправилности"
                inputFormat="dd/MM/yyyy"
                autoComplete="off"
                value={rok}
                onChange={(newValue) => {
                  setRok(getFormattedDate(newValue));
                }}
                renderInput={(params) => <TextField variant="filled" {...params} />}
              />
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="navodjenje-dokaza-o-realizaciiji"
              label="Навођење доказа о реализацији мера за отклањање"
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
              value={meraDokazi}
              onChange={
                (e) => {
                  setMeraDokazi(e.target.value)
                }
              }
            />
            <FormControl 
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <InputLabel id="obavestenje-visem-rukovodstvu">Обавештење вишем руководству о предузетим активностима за умањење ризика и мерама</InputLabel>
              <Select
                labelId="obavestenje-visem-rukovodstvu"
                id="obavestenje-visem-rukovodstvu"
                value={obavestenjeVRPoslato}
                label="Обавештење вишем руководству о предузетим активностима за умањење ризика и мерама"
                onChange={
                  (e) => {
                    setObavestenjeVRPoslato(e.target.value)
                  }
                }
              >
                <MenuItem value={true}>Да</MenuItem>
                <MenuItem value={false}>Не</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <DatePicker
                label="Датум обавештења вишем руководству и организационој целини од које је добијена сумња"
                inputFormat="dd/MM/yyyy"
                autoComplete="off"
                value={obavestenjeVRDatum}
                onChange={(newValue) => {
                  setObavestenjeVRDatum(getFormattedDate(newValue));
                }}
                renderInput={(params) => <TextField variant="filled" {...params} />}
              />
            </FormControl>
            <FormControl 
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <InputLabel id="informacije-od-viseg-rukovodstva">Информације од вишег руководства о предузетим активностима за умањење ризика и мерама</InputLabel>
              <Select
                labelId="informacije-od-viseg-rukovodstva"
                id="informacije-od-viseg-rukovodstva"
                value={infoVNPrimljen}
                label="Инфорамације од вишег руководства о предузетим активностима за умањење ризика и мерама"
                onChange={
                  (e) => {
                    setInfoVNPrimljen(e.target.value)
                  }
                }
              >
                <MenuItem value={true}>Да</MenuItem>
                <MenuItem value={false}>Не</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <DatePicker
                label="Датум информација од вишег руководства о предузетим активностима за умањење ризика и мерама"
                inputFormat="dd/MM/yyyy"
                autoComplete="off"
                value={infoVNDatumPrijema}
                onChange={(newValue) => {
                  setInfoVNDatumPrijema(getFormattedDate(newValue));
                }}
                renderInput={(params) => <TextField variant="filled" {...params} />}
              />
            </FormControl>
          </DialogContent>
          <DialogActions sx={{
            justifyContent: "center",
            padding: "35px",
          }}>
            <Button onClick={handleCloseUpdate} sx={{
              width: "230px",
              border: "1px solid #3AD1E84D",
              borderRadius: "5px",
              color: "#fff",
            }}>Откажи</Button>
            <Button onClick={handleConfirmUpdate} sx={{
              width: "230px",
              backgroundColor: "#3AD1E8",
              borderRadius: "5px",
              color: "#0A1423",
            }}>Потврди</Button>
          </DialogActions>
        </Dialog>
        {/* delete dialog */}
        <Dialog open={openDelete} onClose={handleCloseDelete} className="edit-risk-irregularity-popup">
          <DialogTitle>Брисање неправилности</DialogTitle>
          <DialogContent>
            <Typography>Да ли сте сигурни да желите да обришете изабрану неправилност?</Typography>
          </DialogContent>
          <DialogActions sx={{
            justifyContent: "center",
            padding: "35px",
          }}>
            <Button onClick={handleCloseDelete} sx={{
              width: "230px",
              border: "1px solid #3AD1E84D",
              borderRadius: "5px",
              color: "#fff",
            }}>Откажи</Button>
            <Button onClick={handleConfirmDelete} sx={{
              width: "230px",
              backgroundColor: "#3AD1E8",
              borderRadius: "5px",
              color: "#0A1423",
            }}>Потврди</Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box className="irregularity-records-table-main-wrap">
        <Paper className={classes.tableWrapper} sx={{
          ...formContainer,
          width: "100%",
          maxWidth: "100%",
          mx: "0",
          }}>
          <MUIDataTable className="irregularity-records-table" title="Регистар неправилности" data={nepravilnosti} columns={nepravilnostiColumns} options={options} />
        </Paper>
      </Box>

    </Box>
  )
}

export default IrregularityRecords