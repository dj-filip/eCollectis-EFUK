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

import { useNavigate, useLocation } from 'react-router-dom';
import LocalizedDatePicker from 'components/localization/localized-date-picker.components';


import { getProcesi, postProces } from 'services/fuk-proces.services'
import { postProcesVeza, postProcesVeze } from 'services/fuk-proces-veza.services'
import { postPotpisi } from 'services/fuk-potpis.services'
import { postRizik } from 'services/fuk-rizik.services'

import AddProcess1 from './add-process.pages-1';
import AddProcess2 from './add-process.pages-2';
import AddProcess3 from './add-process.pages-3';
import AddProcess4 from './add-process.pages-4';
import AddProcess5 from './add-process.pages-5';
import AddProcess6 from './add-process.pages-6';
import AddProcess7 from './add-process.pages-7';
import AddProcess8 from './add-process.pages-8';
import AddPotpis from './add-potpis';

const AddProcess = () => {  
  const navigate = useNavigate();
  const location = useLocation();
  const oblast = location.state.oblastId;

  // page 1
  const [organizacijaId, setOrganizacijaId] = useState(null);
  const [organizacionaJedinicaId, setOrganizacionaJedinicaId] = useState(null);
  const [organizacionaJedinicaName, setOrganizacionaJedinicaName] = useState("Одаберите");
  const [oblastId, setOblastId] = useState(oblast);
  const [sifraProcesa, setSifraProcesa] = useState(null);
  const [nazivProcesa, setNazivProcesa] = useState(null);
  const [verzijaProcesa, setVerzijaProcesa] = useState(null);
  const [rukovodilacOrganizacioneJedinice, setRukovodilacOrganizacioneJedinice] = useState(null);
  const [nosilacPoslovnogProcesa, setNosilacPoslovnogProcesa] = useState(null);

  // page 2
  const [ciljPoslovnogProcesa, setCiljPoslovnogProcesa] = useState(null);

  // page 3 
  const [glavniRizici, setGlavniRizici] = useState([])

  // page 4  
  const [kratakOpisUlaza, setKratakOpisUlaza] = useState(null);
  const [kratakOpisAktivnosti, setKratakOpisAktivnosti] = useState(null);
  const [kratakOpisRezultata, setKratakOpisRezultata] = useState(null);

  // page 5
  const [vezaSaDrugimProcesima, setVezaSaDrugimProcesima] = useState(null);

  // page 6
  const [resursiZaOstvarivanjePoslovnogProcesa, setResursiZaOstvarivanjePoslovnogProcesa] = useState(null);

  // page 8
  const [ptpsDatumIzradio, setPtpsDatumIzradio] = useState(null);
  const [ptpsDatumKontrolisao, setPtpsDatumKontrolisao] = useState(null);
  const [ptpsDatumOdobrio, setPtpsDatumOdobrio] = useState(null);
  const [izradioImePrezime, setIzradioImePrezime] = useState(null);
  const [kontrolisaoImePrezime, setKontrolisaoImePrezime] = useState(null);
  const [odobrioImePrezime, setOdobrioImePrezime] = useState(null);

  function AreFieldsFilled() {
    if (
      organizacionaJedinicaId !== null &&
      organizacionaJedinicaName !== "Одаберите" &&
      oblastId !== null &&
      sifraProcesa !== null &&
      nazivProcesa !== null &&
      verzijaProcesa !== null &&
      rukovodilacOrganizacioneJedinice !== null &&
      nosilacPoslovnogProcesa !== null &&
      ciljPoslovnogProcesa !== null &&
      kratakOpisUlaza !== null &&
      kratakOpisRezultata !== null &&
      resursiZaOstvarivanjePoslovnogProcesa !== null &&
      ptpsDatumIzradio !== null &&
      ptpsDatumKontrolisao !== null &&
      ptpsDatumOdobrio !== null &&
      izradioImePrezime.length > 0 &&
      kontrolisaoImePrezime.length > 0 &&
      odobrioImePrezime.length > 0
    )
    {
      return true;
    }
    return false;
  }

  const handleSubmit = async() =>  {
    try
    {
      
      if (!AreFieldsFilled()) {
        throw "Једно или више поља нису попуњена! Молимо вас попуните сва неопходна поља или притисните дугме 'Помоћ'";
      }

      // proces
      const procesInput = {
        obl_id: oblastId,
        oj_id: organizacionaJedinicaId,
        prcs_sifra: sifraProcesa,
        prcs_naziv: nazivProcesa,
        prcs_verzija: verzijaProcesa,
        prcs_rukoj: rukovodilacOrganizacioneJedinice,
        prcs_nosilac: nosilacPoslovnogProcesa,
        prsc_cilj: ciljPoslovnogProcesa,
        prcs_kropulaz: kratakOpisUlaza,
        prcs_kropakt: kratakOpisAktivnosti,
        prcs_kroprez: kratakOpisRezultata,
        prcs_resursi: resursiZaOstvarivanjePoslovnogProcesa,
        prcs_veza : vezaSaDrugimProcesima
      }
  
      const resProces = await postProces(procesInput)
  
      // rizik
      for (var i = 0; i < glavniRizici.length; i++) {
        const rizikInput = {
          prcs_id: resProces.data.data.prcs_id,
          rsk_naziv: glavniRizici[i],
          rsk_sifra: resProces.data.data.prcs_sifra
        }
  
        const resRizik = await postRizik(rizikInput)
      }
  
      // potpis
      const dok_id = resProces.data.data.prcs_id
      
      // izradio
      { 
        const potpis = {
          dok_id: dok_id,
          dok_tip: 1,
          ptps_vrsta: 1,
          ime_i_prezime: izradioImePrezime,
          ptps_datum: ptpsDatumIzradio,
        }
        const resPotpis = await postPotpisi(potpis)
      }
      
      // kontrolisao
      {
        const potpis = {
          dok_id: dok_id,
          dok_tip: 1,
          ptps_vrsta: 2,
          ime_i_prezime: kontrolisaoImePrezime,
          ptps_datum: ptpsDatumKontrolisao,
        }
        const resPotpis = await postPotpisi(potpis)
      }
     
      // odobrio
      {          
        const potpis = {
          dok_id: dok_id,
          dok_tip: 1,
          ptps_vrsta: 3,
          ime_i_prezime: odobrioImePrezime,
          ptps_datum: ptpsDatumOdobrio,
        }
        const resPotpis = await postPotpisi(potpis)
      }
  
      navigate("/fuk/glavna");
    }
    catch(error)
    {
      alert(error)
    }
  }

  const formContainer = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
  };
  
  const inputSpacing = { marginBottom: 3 };

  const opstina = "ЈКП Медиана"


  return (
    <Grid sx={{
      width: "100%",      
      maxWidth: "1760px",
      marginRight: "200px",
      paddingTop: "50px",
      '@media (max-width: 1920px)': {
        maxWidth: "1400px",
      }
    }}>
      <Box className="dodavanje-procesa" sx={{ 
        ...formContainer, 
        flexGrow: 1, 
        gap: "20px 0",
        "& h4": {
          color: "#3AD1E8",
        },
        "& fieldset, textarea": {
          border: "none",
          borderBottom: "1px solid",
          borderRadius: "0",
          borderColor: "#3AD1E8 !important",
          outline: "none",
          backgroundColor: "transparent",
          resize: "none",
        },
        "& label": {
          position: "relative",
          transform: "none",
          marginBottom: "30px",
          color: "#3AD1E8 !important",
          fontSize: "18px",
          fontWeight: "500",
          textTransform: "uppercase",
        },
        "& input, textarea": {
          padding: "10px 0 10px 0",
          fontSize: "24px",
          fontWeight: "300",
          color: "#FFF",
        },
        "& .MuiOutlinedInput-root": {
          padding: "0",
        }
        }}>
        <Box sx={{
          paddingBottom: "50px",
        }}>
          <Typography variant='h2' className='txt-blue'>
          Додавање мапе пословних процеса
          </Typography>
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
          <Typography variant="h3">Корисник јавних средстава: {opstina}</Typography>
          <Typography variant="h3" sx={{
            fontWeight: "500 !important",
            textTransform: "uppercase",
          }}>Мапа пословних процеса</Typography>
        </Box>
        <AddProcess1
          opstina={opstina}
          imeOblasti={location.state.imeOblasti}
          setOrganizacijaId={setOrganizacijaId}
          organizacionaJedinicaName={organizacionaJedinicaName}
          setOrganizacionaJedinicaName={setOrganizacionaJedinicaName}
          setOblastId={setOblastId}
          setOrganizacionaJedinicaId={setOrganizacionaJedinicaId}
          setSifraProcesa={setSifraProcesa}
          setNazivProcesa={setNazivProcesa}
          setVerzijaProcesa={setVerzijaProcesa}
          setRukovodilacOrganizacioneJedinice={setRukovodilacOrganizacioneJedinice}
          setNosilacPoslovnogProcesa={setNosilacPoslovnogProcesa}
        />
        <AddProcess2
          setCiljPoslovnogProcesa={setCiljPoslovnogProcesa}
        />
        <AddProcess3
          glavniRizici={glavniRizici}
          setGlavniRizici={setGlavniRizici}
        />
        <AddProcess4
          setKratakOpisUlaza={setKratakOpisUlaza}
          setKratakOpisAktivnosti={setKratakOpisAktivnosti}
          setKratakOpisRezultata={setKratakOpisRezultata}
        />
        <AddProcess5
          setVezaSaDrugimProcesima={setVezaSaDrugimProcesima}
        />
        <AddProcess6
          setResursiZaOstvarivanjePoslovnogProcesa={setResursiZaOstvarivanjePoslovnogProcesa}
        />
        <AddProcess7 />
        <AddPotpis
            ptpsDatumIzradio={ptpsDatumIzradio}
            setPtpsDatumIzradio={setPtpsDatumIzradio}
            ptpsDatumKontrolisao={ptpsDatumKontrolisao}
            setPtpsDatumKontrolisao={setPtpsDatumKontrolisao}
            ptpsDatumOdobrio={ptpsDatumOdobrio}
            setPtpsDatumOdobrio={setPtpsDatumOdobrio}
            setIzradioImePrezime={setIzradioImePrezime}
            setKontrolisaoImePrezime={setKontrolisaoImePrezime}
            setOdobrioImePrezime={setOdobrioImePrezime}
        />
        <Stack direction="row" sx={{
          ...inputSpacing,
          gap: "20px",
          justifyContent: "center",
          backgroundColor: "transparent !important",
          }}>
          <Button
          id="otkazi"
          onClick={() => {
            navigate("/fuk/glavna")
            }}
          sx={{
            width: "250px",
            alignSelf: "center",
            marginTop: "35px",
            paddingY: "10px",
            border: "1px solid #3AD1E8",
            borderRadius: "5px",
            color: "#FFF",
            lineHeight: "21px",
            '@media (max-width: 1920px)': {
              width: "235px",
              fontSize: "14px", 
              padding: "8px 35px",
            }
          }}>Откажи</Button>
      
          <Button
          id="potvrdi"
          onClick={() => {
              handleSubmit();
            }}
          sx={{
            width: "250px",
            alignSelf: "center",
            marginTop: "35px !important",
            paddingY: "10px",
            backgroundColor: "#3AD1E8",
            borderRadius: "5px",
            color: "#0A1423",
            lineHeight: "21px",
            '@media (max-width: 1920px)': {
              width: "235px",
              fontSize: "14px", 
              padding: "8px 35px",
            }
          }}>Потврди</Button>
        </Stack>
      </Box>
    </Grid>
  )
}

export default AddProcess