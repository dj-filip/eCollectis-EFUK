import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Divider from '@mui/material/Divider';
import Item from 'components/grid/item/item.components'
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FormControl from "@mui/material/FormControl";
import DatePicker from "@mui/lab/DatePicker";
import Link from '@mui/material/Link';
import Image from 'mui-image';


import { useNavigate, useLocation, useParams } from 'react-router-dom';
import LocalizedDatePicker from 'components/localization/localized-date-picker.components';

import { getProces, getProcesi } from 'services/fuk-proces.services'
import { getProcedure } from 'services/fuk-procedura.services'
import { getRiziciByProcessId } from 'services/fuk-rizik.services'
import { getPotpisiByDocumentIdAndType } from 'services/fuk-potpis.services'
import { getProcesVezaByProcessId } from 'services/fuk-proces-veza.services'
import { getEprintProces } from 'services/e-print.services'
import ViewProcess1 from './view-process.pages-1';
import ViewProcess2 from './view-process.pages-2';
import ViewProcess3 from './view-process.pages-3';
import ViewProcess4 from './view-process.pages-4';
import ViewProcess5 from './view-process.pages-5';
import ViewProcess6 from './view-process.pages-6';
import ViewProcess7 from './view-process.pages-7';
import ViewProcess8 from './view-process.pages-8';


// assets
import PrintIcon from 'assets/assets/icons/print-icon.svg';
import EditIcon from 'assets/assets/icons/edit-icon-2.svg';


const printLink = process.env.REACT_APP_PRINT_LINK;



const ViewProcess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const oblastId = location.state.oblastId;
  const imeOblasti = location.state.imeOblasti;
  const procesId = location.state.procesId;
 
  // page 1
  const [organizacija, setOrganizacija] = useState(" ");
  const [sifraProcesa, setSifraProcesa] = useState(" ");
  const [rukovodilacOrganizacioneJedinice, setRukovodilacOrganizacioneJedinice] = useState(" ");
  const [verzijaProcesa, setVerzijaProcesa] = useState(" ");
  const [nazivProcesa, setNazivProcesa] = useState(" ");
  const [nosilacPoslovnogProcesa, setNosilacPoslovnogProcesa] = useState(" ");

  // page 2
  const [procesCilj, setProcesCilj] = useState(" ");

  // page 3
  const [glavniRizici, setGlavniRizici] = useState([]);

  // page 4
  const [kratakOpisUlaza, setKratakOpisUlaza] = useState("");
  const [kratakOpisAktivnosti, setKratakOpisAktivnosti] = useState("");
  const [kratakOpisRezultata, setKratakOpisRezultata] = useState("");

  // page 5
  const [vezaSaDrugimProcesima, setVezaSaDrugimProcesima] = useState(null);

  // page 6
  const [resursiZaOstvarivanjePoslovnogProcesa, setResursiZaOstvarivanjePoslovnogProcesa] = useState("");

  // page 7
  const [procedure, setProcedure] = useState([]);
  const [imeProcesa, setImeProcesa] = useState("");

  // page 8
  const [izradio, setIzradio] = useState(null);
  const [kontrolisao, setKontrolisao] = useState(null);
  const [odobrio, setOdobrio] = useState(null);

  // get all data
  useEffect(() => {
    (async () => {
      console.log('procedId: ', procesId, ' oblastId', oblastId)
      const res = await getProces(procesId);
      console.log('res: ', res)
      const procesData = res.data.fuk_proces
      
      // page 1
      setOrganizacija(procesData.orgj_naziv);
      setSifraProcesa(procesData.prcs_sifra);
      setRukovodilacOrganizacioneJedinice(procesData.prcs_rukoj);
      setVerzijaProcesa(procesData.prcs_verzija);
      setNazivProcesa(procesData.prcs_naziv);
      setNosilacPoslovnogProcesa(procesData.prcs_nosilac);
      // page 2     
      setProcesCilj(procesData.prcs_cilj);
      // page 3
      {
        const resRizici = await getRiziciByProcessId(procesId);
        const riziciData = resRizici.data.fuk_rizici
        var temp = []
        for (var i = 0; i < riziciData.length; i++) {
          console.log("rizik:", riziciData[i]);
          temp.push(riziciData[i].rsk_naziv)
        }
        setGlavniRizici(temp);
      }
      // page 4
      setKratakOpisUlaza(procesData.prcs_kropulaz);
      setKratakOpisAktivnosti(procesData.prcs_kropakt);
      setKratakOpisRezultata(procesData.prcs_kroprez);
      // page 5
      setVezaSaDrugimProcesima(procesData.prcs_veza);
      // page 6
      setResursiZaOstvarivanjePoslovnogProcesa(procesData.prcs_resursi);
      // page 7
      {
        setImeProcesa(procesData.prcs_naziv)
        
        const resProcedure = await getProcedure(procesId);
        const procedureData = resProcedure.data.fuk_procedure
  
        var temp = []
        for (var i = 0; i < procedureData.length; i++) {
          var row = {
            id: procedureData[i].proc_id,
            naziv: procedureData[i].proc_sifra + " - " + procedureData[i].proc_naziv
          }
          temp.push(row)
        }
        setProcedure(temp)
      }
      // page 8
      {        
        const resPotpisi = await getPotpisiByDocumentIdAndType(procesId, 1)
        const potpisiData = resPotpisi.data.fuk_potpisi
        var tempIzradio = ""
        var tempKontrolisao = ""
        var tempOdobrio = ""
        for (var i = 0; i < potpisiData.length; i++) {
          if (potpisiData[i].ptps_vrsta === 1) {
            tempIzradio = potpisiData[i];
          } else if (potpisiData[i].ptps_vrsta === 2) {
            tempKontrolisao = potpisiData[i];
          } else {
            tempOdobrio = potpisiData[i];
          }
        }
        setIzradio(tempIzradio);
        setKontrolisao(tempKontrolisao);
        setOdobrio(tempOdobrio);
      }
    })();
  }, []);



  // ime opstine
  const opstina = 'ЈКП Медиана'

  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h6.fontSize', 
    textAlign: 'left'
  };

  const formContainer = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
  };
 
  return (
    <Grid container sx={{
      width: "100%",      
      maxWidth: "1760px",
      marginRight: "200px",
      paddingTop: "50px",
      '@media (max-width: 1920px)': {
        maxWidth: "1400px",
      }
    }}>
      <Box className="pregled-procesa" sx={{ 
        ...formContainer, 
        flexGrow: 1,
        gap: "20px 0",
        "& h4": {
          color: "#3AD1E8",
        }
        }}>
        <Box sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "30px",
        }}>
          <Typography variant='h2' className='txt-blue'>
          Преглед мапе пословних процеса
          </Typography>
          <Stack direction="row" sx={{
            gap: "10px",
          }}>
            <Button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/fuk/obrada-procesa/${procesId}`, { state : { oblastId, imeOblasti }});
            }}
            sx={{
              justifyContent: "flex-end",
              padding: "0",
            }}>
              <Image src={EditIcon} sx={{
                width: "40px",
                height: "40px",
                '@media (max-width: 1920px)': {
                  width: "32px !important",
                  height: "32px !important",
                }
              }}></Image>
            </Button>
            <Button href={`http://${printLink}/print/process/${procesId}`} sx={{
              justifyContent: "flex-end",
              padding: "0",
            }}>
              <Image src={PrintIcon} sx={{
                width: "40px",
                height: "40px",
                '@media (max-width: 1920px)': {
                  width: "32px !important",
                  height: "32px !important",
                }
              }}></Image>
            </Button>
          </Stack>
        </Box>
        <Typography sx={{ 
          padding: "20px 0",
          fontSize: "18px", 
          fontWeight: "500",
          color: "#3AD1E8",
          textTransform: "uppercase",
          textAlign: "center", 
          backgroundColor: "#000A194D",
          '@media (max-width: 1920px)': {
            fontSize: "16px", 
          }
          }}>Мапа пословних процеса</Typography>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "15px",
          padding: "30px 0",
          backgroundColor: "#000A194D",
        }}>
          <Typography variant="h3">Корисник јавних средстава: {organizacija}</Typography>
          <Typography variant="h3" sx={{
            fontWeight: "500 !important",
            textTransform: "uppercase",
          }}>{nazivProcesa}</Typography>
        </Box>
        {/* Grid */}
        <ViewProcess1
          organizacija={organizacija}
          sifraProcesa={sifraProcesa}
          rukovodilacOrganizacioneJedinice={rukovodilacOrganizacioneJedinice}
          verzijaProcesa={verzijaProcesa}
          nazivProcesa={nazivProcesa}
          nosilacPoslovnogProcesa={nosilacPoslovnogProcesa}
        />
        {/* Naziv poslovnog procesa */}
        <Grid container direction="column" className="opacity-txt-box">
          <Typography variant="h4">Назив пословног процеса</Typography>
          <Typography variant="h3">{nazivProcesa}</Typography>
        </Grid>
        <ViewProcess2
          procesCilj={procesCilj}
        />
        <ViewProcess3
          glavniRizici={glavniRizici}
        />
        <ViewProcess4
          kratakOpisUlaza={kratakOpisUlaza}
          kratakOpisAktivnosti={kratakOpisAktivnosti}
          kratakOpisRezultata={kratakOpisRezultata}
        />
        <ViewProcess5
          vezaSaDrugimProcesima={vezaSaDrugimProcesima}
        />
        <ViewProcess6
          resursiZaOstvarivanjePoslovnogProcesa={resursiZaOstvarivanjePoslovnogProcesa}
        />
        <ViewProcess7
          oblastId={oblastId}
          imeOblasti={imeOblasti}
          procesId={procesId}
          procedure={procedure}
          imeProcesa={imeProcesa}
        />
        <ViewProcess8
          izradio={izradio}
          kontrolisao={kontrolisao}
          odobrio={odobrio}
        />
        <Button sx={{
          alignSelf: "center",
          marginTop: "35px",
          padding: "10px 45px",
          backgroundColor: "#3AD1E8",
          borderRadius: "5px",
          color: "#0A1423",
          '@media (max-width: 1920px)': {
            fontSize: "14px", 
            padding: "8px 35px",
          }
        }}
          href={`http://${printLink}/print/process/${procesId}`}
        >Штампа процеса</Button>
      </Box>
    </Grid>
  )
}

export default ViewProcess