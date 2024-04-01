import { React, useState, useRef } from 'react'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Image from "mui-image";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getRizici } from 'services/fuk-rizik.services';
import { Dialog, DialogActions, DialogContent, DialogTitle, FilledInput, FormControl, InputLabel, TextField, Typography, Tooltip } from '@mui/material';
import DatePicker from "@mui/lab/DatePicker";
import { makeStyles } from "@material-ui/core/styles";

import { getRizik, patchRizik } from "services/fuk-rizik.services";

// assets
import EditIconSrc from 'assets/icons/edit-icon.svg';
import PrintIcon from 'assets/icons/print-icon.svg';


const riskRecordsSchema = parseInt(process.env.REACT_APP_RISK_RECORDS_SCHEMA);
const colorLimits = (riskRecordsSchema === 3) ? [3,6] : [4,16];

const printLink = process.env.REACT_APP_PRINT_LINK;


const EditIcon = (
  <Icon>
    <img alt="edit" src={EditIconSrc} width={"100%"}/>
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

const RiskRecords = () => {
  const navigate = useNavigate();
  const [rizici, setRizici] = useState([]);


  const optionButtons = {
    textTransform: "none",
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

  const getBoja = (efekat) => {
    if (efekat <= colorLimits[0]) {
      return "ЗЕЛЕНА"
    } else if (efekat > colorLimits[0] && efekat <= colorLimits[1]) {
      return "ЖУТА"
    } else {
      return "ЦРВЕНА"
    }
  }

  const tableRef = useRef();


  // get all data
  useEffect(() => {
    (async () => {
      const res = await getRizici();
      const riziciData = res.data.fuk_rizici
      var tempRizici = [];
      for (var i = 0; i < riziciData.length; i++) {
        const efekat = riziciData[i].rsk_efekat
        const boja = getBoja(efekat)
        const cellColor = efekat <= 3 ? 'green-cell' : efekat <= 6 ? 'yellow-cell' : 'red-cell';
        tempRizici.push([
          riziciData[i].rsk_sifra,
          riziciData[i].rsk_naziv,
          riziciData[i].proc_id !== null ? riziciData[i].nosilac_rizika_proc : riziciData[i].nosilac_rizika_prcs,
          riziciData[i].rsk_uticaj,
          riziciData[i].rsk_verovatnoca,
          riziciData[i].rsk_efekat,
          // <Box className={cellColor} sx={{ textAlign: 'center'}}>{riziciData[i].rsk_efekat}</Box>,        
          getBoja(efekat),
          riziciData[i].rsk_mere,
          riziciData[i].rsk_odglice,
          riziciData[i].rsk_datum,
          riziciData[i].rsk_datumpracenja,
          riziciData[i].rsk_datumpracenja2,
          <Button
            className="table-cell-btn"
            sx={{ ...optionButtons, fontSize: "40px" }}
            // href={`/fuk/promeni-rizik/${riziciData[i].rsk_id}`}
            value={riziciData[i].rsk_id}
            onClick={handleClickOpen}
          >
            <Image src={EditIconSrc} className={"edit-btn-img"} width={"32px"} height={"32px"}></Image>
          </Button>
        ]);
      }
      setRizici(tempRizici);
  
    })();
    


  }, []);

  const [open, setOpen] = useState(false);
  const [rizikId, setRizikId] = useState(-1);
  const [sifra, setSifra] = useState("");
  const [naziv, setNaziv] = useState("");
  const [ut, setUt] = useState(1);
  const [In, setIn] = useState(1);
  const [st, setSt] = useState(1);
  const [boja, setBoja] = useState("");
  const [mereOtklanjanja, setMereOtklanjanja] = useState("");
  const [zaduzenaOsoba, setZaduzenaOsoba] = useState("");
  const [datum1Merenja, setDatum1Merenja] = useState(null);
  const [datum2Merenja, setDatum2Merenja] = useState(null);
  const [datum3Merenja, setDatum3Merenja] = useState(null);

  const handleClickOpen = async (e) => {
    try {
      const id = parseInt(e.target.value)
      const res = await getRizik(id);
      const rizikData = res.data.fuk_rizik;
      
      setRizikId(id);
      setSifra(rizikData.rsk_sifra)
      setNaziv(rizikData.rsk_naziv)
      setUt(rizikData.rsk_uticaj !== null ? rizikData.rsk_uticaj : ut)
      setSt(rizikData.rsk_verovatnoca !== null ? rizikData.rsk_verovatnoca : st)
      setIn(rizikData.rsk_efekat !== null ? rizikData.rsk_efekat : In)
      setMereOtklanjanja(rizikData.rsk_mere)
      setZaduzenaOsoba(rizikData.rsk_odglice)
      setDatum1Merenja(rizikData.rsk_datum)
      setDatum2Merenja(rizikData.rsk_datumpracenja)
      setDatum3Merenja(rizikData.rsk_datumpracenja2)
      
      setOpen(true);
    } catch (error) {
      alert(error);
    }

        


  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    try {
      const date1 = new Date(datum1Merenja)
      const date2 = new Date(datum2Merenja)
      const date3 = new Date(datum3Merenja)
      
      var inputs = {
        id: rizikId,
        sifra: sifra,
        naziv: naziv,
        ut: ut,
        st: st,
        In: ut * st,
        boja: boja,
        mereOtklanjanja: mereOtklanjanja,
        zaduzenaOsoba: zaduzenaOsoba,
        datum1Merenja: datum1Merenja,
        datum2Merenja: datum2Merenja,
        datum3Merenja: datum3Merenja
      }
      const res = await patchRizik(rizikId, inputs);
      
      setOpen(false);
      window.location.reload(false);
    } catch (error) {
      alert(error)
    }
  };

  const riziciColumns = [
    {
      label: "Шифра",
      name: "sifra-procesa",
    },
    {
      label: "Назив",
      name: "naziv-rizika",
    },
    {
      label: "Власник ризика",
      name: "vlasnik-rizika",
    },
    {
      label: "Ве",
      name: "ve",
    },
    {
      label: "Шт",
      name: "st",
    },
    {
      label: "Ин",
      name: "in",
      options: {
        customBodyRenderLite: (dataIndex) => {
          const value = rizici[dataIndex][5];
          let cellColor;
  
          if (value <= colorLimits[0]) {
            cellColor = 'green-cell';
          } else if (value > colorLimits[0] && value <= colorLimits[1]) {
            cellColor = 'yellow-cell';
          } else if (value > colorLimits[1]) {
            cellColor = 'red-cell';
          }
  
          return (
            <span className={cellColor}>
              {value}
            </span>
          );
        },
      },
    },
    {
      label: "Боја",
      name: "boja",
    },
    {
      label: "Мере отклањања",
      name: "mere-otklanjanja",
    },
    {
      label: "Задужена особа",
      name: "zaduzena-osoba",
    },
    {
      label: "Датум 1. мерења",
      name: "datum-1-merenja",
    },
    {
      label: "Датум 2. мерења",
      name: "datum-2-merenja",
    },
    {
      label: "Датум 3. мерења",
      name: "datum-3-merenja",
    },
    {
      name: "",
      label: "",
      options: {
        download: false,
        filter: false,
        sort: false,
        searchable: false,
        viewColumns: true,
        display: true,
      },
    },
  ]

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

  const classes = useStyles();


  return (
    <Box className={useStyles} sx={{ 
      ...formContainer, 
      width: "100%",
      maxWidth: "1760px",
      display: "flex",
      flexDirection: "column", 
      justifyContent: "flex-end",
      mx: "0",
      marginLeft: "400px",
      paddingTop: "50px",
      '@media (max-width: 1920px)': {
        maxWidth: "1400px",
      }
      }}>
      <Box className="risk-records-table-main-wrap">
        <Paper ref={tableRef} className={classes.tableWrapper} sx={{
          ...formContainer,
          width: "100%",
          maxWidth: "100%",
          mx: "0",
          }}>
          <MUIDataTable ref={tableRef} className="risk-records-table" title="Регистар ризика" data={rizici} columns={riziciColumns} options={options} />
        </Paper>
      </Box>
      <Dialog open={open} onClose={handleClose} className="edit-risk-irregularity-popup edit-risk-popup">
        <DialogTitle>Промени ризик</DialogTitle>
        <DialogContent>
          <FormControl fullWidth variant="filled" sx={{ ...inputSpacing }}>
            <InputLabel htmlFor="sifra">Шифра</InputLabel>
            <FilledInput
              disabled
              id="sifra"
              type="text"
              value={sifra}
              autoComplete="off"
            />
          </FormControl>
          <FormControl fullWidth variant="filled" sx={{ ...inputSpacing }}>
            <InputLabel htmlFor="naziv">Назив</InputLabel>
            <FilledInput
              multiline
              id="naziv"
              type="text"
              value={naziv}
              onChange={
                (e) => {
                  setNaziv(e.target.value)
                }
              }
              autoComplete="off"
            />
          </FormControl>
          <FormControl fullWidth variant="filled" sx={{ ...inputSpacing }}>
            <InputLabel htmlFor="ut">Ве</InputLabel>
            <FilledInput
              id="ut"
              type="text"
              value={ut}
              inputProps={{
                step: 1,
                min: 1,
                max: riskRecordsSchema,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
              onChange={
                (e) => {
                  setUt(parseInt(e.target.value))
                }
              }
              autoComplete="off"
            />
          </FormControl>
          <FormControl fullWidth variant="filled" sx={{ ...inputSpacing }}>
            <InputLabel htmlFor="st">Шт</InputLabel>
            <FilledInput
              id="st"
              type="text"
              value={st}
              inputProps={{
                step: 1,
                min: 1,
                max: riskRecordsSchema,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
              onChange={
                (e) => {
                  setSt(parseInt(e.target.value))
                }
              }
              autoComplete="off"
            />
          </FormControl>
          <FormControl fullWidth variant="filled" sx={{ ...inputSpacing }}>
            <InputLabel htmlFor="in">Ин</InputLabel>
            <FilledInput
              id="in"
              type="text"
              value={ut * st}
              autoComplete="off"
              disabled
            />
          </FormControl>
          <FormControl fullWidth variant="filled" sx={{ ...inputSpacing }}>
            <InputLabel htmlFor="mere">Мере отклањања</InputLabel>
            <FilledInput
              id="mere"
              type="text"
              value={mereOtklanjanja}
              onChange={
                (e) => {
                  setMereOtklanjanja(e.target.value)
                }
              }
              autoComplete="off"
            />
          </FormControl>
          <FormControl fullWidth variant="filled" sx={{ ...inputSpacing }}>
            <InputLabel htmlFor="zaduzena-osoba">Задужена особа</InputLabel>
            <FilledInput
              id="zaduzena-osoba"
              type="text"
              value={zaduzenaOsoba}
              onChange={
                (e) => {
                  setZaduzenaOsoba(e.target.value)
                }
              }
              autoComplete="off"
            />
          </FormControl>
          <FormControl
            fullWidth
            variant="filled"
            sx={{ ...inputSpacing }}
          >
            <DatePicker
              label="Датум 1. мерења"
              inputFormat="dd/MM/yyyy"
              autoComplete="off"
              value={datum1Merenja}
              onChange={(newValue) => {
                setDatum1Merenja(getFormattedDate(newValue));
              }}
              renderInput={(params) => <TextField variant="filled" {...params} />}
            />
          </FormControl>
          <FormControl
            fullWidth
            variant="filled"
            sx={{ ...inputSpacing }}
          >
            <DatePicker
              label="Датум 2. мерења"
              inputFormat="dd/MM/yyyy"
              autoComplete="off"
              value={datum2Merenja}
              onChange={(newValue) => {
                setDatum2Merenja(getFormattedDate(newValue));
              }}
              renderInput={(params) => <TextField variant="filled" {...params} />}
            />
          </FormControl>
          <FormControl
            fullWidth
            variant="filled"
            sx={{ ...inputSpacing }}
          >
            <DatePicker
              label="Датум 3. мерења"
              inputFormat="dd/MM/yyyy"
              autoComplete="off"
              value={datum3Merenja}
              onChange={(newValue) => {
                setDatum3Merenja(getFormattedDate(newValue));
              }}
              renderInput={(params) => <TextField variant="filled" {...params} />}
            />
          </FormControl>
        </DialogContent>
        <DialogActions sx={{
            justifyContent: "center",
            padding: "35px",
          }}>
          <Button onClick={handleClose} sx={{
              width: "230px",
              border: "1px solid #3AD1E84D",
              borderRadius: "5px",
              color: "#fff",
            }}>Откажи</Button>
          <Button onClick={handleSubmit} sx={{
              width: "230px",
              backgroundColor: "#3AD1E8",
              borderRadius: "5px",
              color: "#0A1423",
            }}>Потврди</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default RiskRecords