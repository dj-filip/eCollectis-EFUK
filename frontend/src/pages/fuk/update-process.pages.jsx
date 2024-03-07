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
import { useNavigate, useLocation, useParams } from "react-router-dom";
import LocalizedDatePicker from 'components/localization/localized-date-picker.components';

import { getProces, getProcesi, patchProces } from 'services/fuk-proces.services'
import { getRiziciByProcessId, patchRizik, postRizik } from 'services/fuk-rizik.services'
import { getProcesVeza, patchProcesVeze, postProcesVeza, getProcesVezaByProcessId } from 'services/fuk-proces-veza.services'

import UpdateProcess1 from './update-process.pages-1';
import UpdateProcess2 from './update-process.pages-2';
import UpdateProcess3 from './update-process.pages-3';
import UpdateProcess4 from './update-process.pages-4';
import UpdateProcess5 from './update-process.pages-5';
import UpdateProcess6 from './update-process.pages-6';
import UpdateProcess7 from './update-process.pages-7';
import UpdateProcess8 from './update-potpis';
import { getPotpisiByDocumentIdAndType, patchPotpisi } from 'services/fuk-potpis.services';
import UpdatePotpis from './update-potpis';


const UpdateProcess = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const oblast = location.state.oblastId;
  const imeOblasti = location.state.imeOblasti;

  // page 1
  const [organizacijaId, setOrganizacijaId] = useState(null);
  const [organizacija, setOrganizacija] = useState(null);
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
  const [glavniRiziciIds, setGlavniRiziciIds] = useState([]);
  const [glavniRizici, setGlavniRizici] = useState([]);
  const [dodatiRizici, setDodatiRizici] = useState([]);
  
  const [glavniRiziciView, setGlavniRiziciView] = useState([]);


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
  
  const [ptpsDatumIzradioIds, setPtpsDatumIzradioIds] = useState([]);
  const [ptpsDatumKontrolisaoIds, setPtpsDatumKontrolisaoIds] = useState([]);
  const [ptpsDatumOdobrioIds, setPtpsDatumOdobrioIds] = useState([]);


  // get all data
  useEffect(() => {
    (async () => {
      const res = await getProces(id);
      const procesData = res.data.fuk_proces

      // page 1
      setOrganizacijaId(procesData.org_id);
      setOrganizacionaJedinicaId(procesData.oj_id)
      setOrganizacionaJedinicaName(procesData.orgj_naziv)
      setSifraProcesa(procesData.prcs_sifra)
      setNazivProcesa(procesData.prcs_naziv)
      setVerzijaProcesa(procesData.prcs_verzija)
      setRukovodilacOrganizacioneJedinice(procesData.prcs_rukoj)
      setNosilacPoslovnogProcesa(procesData.prcs_nosilac)

      // page 2
      setCiljPoslovnogProcesa(procesData.prcs_cilj)

      // page 3  
      {        
        const resRizici = await getRiziciByProcessId(parseInt(id));
        const riziciData = resRizici.data.fuk_rizici
        var temp = []
        var tempIds = []
        for (var i = 0; i < riziciData.length; i++) {
          tempIds.push(riziciData[i].rsk_id)
          temp.push(riziciData[i].rsk_naziv)
        }
        setGlavniRizici(temp);
        setGlavniRiziciIds(tempIds);
        
        setGlavniRiziciView(temp);
      }
      

      // page 4
      setKratakOpisUlaza(procesData.prcs_kropulaz)
      setKratakOpisAktivnosti(procesData.prcs_kropakt)
      setKratakOpisRezultata(procesData.prcs_kroprez)

      // page 5
      setVezaSaDrugimProcesima(procesData.prcs_veza)

      // page 6
      setResursiZaOstvarivanjePoslovnogProcesa(procesData.prcs_resursi)

      // this goes from different request (getPotpisi)
      // page 8
      const resPotpisi = await getPotpisiByDocumentIdAndType(id, 1)
      const potpisiData = resPotpisi.data.fuk_potpisi
      var tempIzradio = []
      var tempKontrolisao = []
      var tempOdobrio = []
      var tempIzradioIds = []
      var tempKontrolisaoIds = []
      var tempOdobrioIds = []
      for (var i = 0; i < potpisiData.length; i++) {
        if (potpisiData[i].ptps_vrsta === 1) {
          tempIzradioIds.push(potpisiData[i].ptps_id);
          tempIzradio.push(`${potpisiData[i].ptps_ime} ${potpisiData[i].ptps_prezime}`);
          setPtpsDatumIzradio(potpisiData[i].ptps_datum)
        } else if (potpisiData[i].ptps_vrsta === 2) {
          tempKontrolisaoIds.push(potpisiData[i].ptps_id);
          tempKontrolisao.push(`${potpisiData[i].ptps_ime} ${potpisiData[i].ptps_prezime}`);
          setPtpsDatumKontrolisao(potpisiData[i].ptps_datum)
        } else {
          tempOdobrioIds.push(potpisiData[i].ptps_id);
          tempOdobrio.push(`${potpisiData[i].ptps_ime} ${potpisiData[i].ptps_prezime}`);
          setPtpsDatumOdobrio(potpisiData[i].ptps_datum)
        }
      }

      setIzradioImePrezime(tempIzradio.join(", "))
      setKontrolisaoImePrezime(tempKontrolisao.join(", "))
      setOdobrioImePrezime(tempOdobrio.join(", "))

      setPtpsDatumIzradioIds(tempIzradioIds)
      setPtpsDatumKontrolisaoIds(tempKontrolisaoIds)
      setPtpsDatumOdobrioIds(tempOdobrioIds)
    })();
  }, []);

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
      izradioImePrezime !== null &&
      kontrolisaoImePrezime !== null &&
      odobrioImePrezime !== null &&
      vezaSaDrugimProcesima !== null
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
        prcs_cilj: ciljPoslovnogProcesa,
        prcs_kropulaz: kratakOpisUlaza,
        prcs_kropakt: kratakOpisAktivnosti,
        prcs_kroprez: kratakOpisRezultata,
        prcs_resursi: resursiZaOstvarivanjePoslovnogProcesa,
        prcs_veza: vezaSaDrugimProcesima
      }
  
      const resProces = await patchProces(id, procesInput)

      
      // add rizik
      for (var i = 0; i < dodatiRizici.length; i++) {
        const rizikInput = {
          prcs_id: resProces.data.prcs_id,
          rsk_naziv: dodatiRizici[i],
          rsk_sifra: resProces.data.prcs_sifra
        }
  
        const resAddRizik = await postRizik(rizikInput);
      }
      

      // edit rizik
      for (var i = 0; i < glavniRiziciIds.length; i++) {
        const rsk_id = glavniRiziciIds[i];
        const rizikInput = {
          prcs_id: resProces.data.prcs_id,
          rsk_naziv: glavniRizici[i],
          rsk_sifra: resProces.data.prcs_sifra,
          minimal: true
        }
  
        const resEditRizik = await patchRizik(rsk_id, rizikInput);
      }

  
      // potpis
      const dok_id = resProces.data.prcs_id
  

      // izradio
      {
        const potpis = {
          dok_id: dok_id,
          dok_tip: 1,
          ptps_vrsta: 1,
          ime_i_prezime: izradioImePrezime,
          ptps_datum: ptpsDatumIzradio,
        }
        const resPotpis = await patchPotpisi(potpis)
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
        const resPotpis = await patchPotpisi(potpis)
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
        const resPotpis = await patchPotpisi(potpis)
      }

      navigate("/fuk/glavna")
    }
    catch (error) {
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
      <Box className="obrada-procesa" sx={{ 
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
          Уређивање мапе пословних процеса
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
          }}>{nazivProcesa}</Typography>
        </Box>
        <UpdateProcess1
          opstina={opstina}
          imeOblasti={location.state.imeOblasti}
          organizacijaId={organizacijaId}
          setOrganizacijaId={setOrganizacijaId}
          organizacionaJedinicaName={organizacionaJedinicaName}
          setOrganizacionaJedinicaName={setOrganizacionaJedinicaName}
          oblastId={oblastId}
          setOblastId={setOblastId}
          organizacionaJedinicaId={organizacionaJedinicaId}
          setOrganizacionaJedinicaId={setOrganizacionaJedinicaId}
          sifraProcesa={sifraProcesa}
          setSifraProcesa={setSifraProcesa}
          nazivProcesa={nazivProcesa}
          setNazivProcesa={setNazivProcesa}
          verzijaProcesa={verzijaProcesa}
          setVerzijaProcesa={setVerzijaProcesa}
          rukovodilacOrganizacioneJedinice={rukovodilacOrganizacioneJedinice}
          setRukovodilacOrganizacioneJedinice={setRukovodilacOrganizacioneJedinice}
          nosilacPoslovnogProcesa={nosilacPoslovnogProcesa}
          setNosilacPoslovnogProcesa={setNosilacPoslovnogProcesa}
        />
        <UpdateProcess2
          ciljPoslovnogProcesa={ciljPoslovnogProcesa}
          setCiljPoslovnogProcesa={setCiljPoslovnogProcesa}
        />
        <UpdateProcess3
          procesId={id}
          glavniRizici={glavniRizici}
          setGlavniRizici={setGlavniRizici}
          setGlavniRiziciIds={setGlavniRiziciIds}
          dodatiRizici={dodatiRizici}
          setDodatiRizici={setDodatiRizici}
          glavniRiziciView={glavniRiziciView}
          setGlavniRiziciView={setGlavniRiziciView}
        />
        <UpdateProcess4
          procesId={id}
          kratakOpisUlaza={kratakOpisUlaza}
          setKratakOpisUlaza={setKratakOpisUlaza}
          kratakOpisAktivnosti={kratakOpisAktivnosti}
          setKratakOpisAktivnosti={setKratakOpisAktivnosti}
          kratakOpisRezultata={kratakOpisRezultata}
          setKratakOpisRezultata={setKratakOpisRezultata}
        />
        <UpdateProcess5
          vezaSaDrugimProcesima={vezaSaDrugimProcesima}
          setVezaSaDrugimProcesima={setVezaSaDrugimProcesima}
        />
        <UpdateProcess6
          resursiZaOstvarivanjePoslovnogProcesa={resursiZaOstvarivanjePoslovnogProcesa}
          setResursiZaOstvarivanjePoslovnogProcesa={setResursiZaOstvarivanjePoslovnogProcesa}
        />
        <UpdateProcess7
          procesId={id}
          oblastId={oblastId}
          imeOblasti={imeOblasti}
        />
        <UpdatePotpis
            ptpsDatumIzradio={ptpsDatumIzradio}
            setPtpsDatumIzradio={setPtpsDatumIzradio}
            ptpsDatumKontrolisao={ptpsDatumKontrolisao}
            setPtpsDatumKontrolisao={setPtpsDatumKontrolisao}
            ptpsDatumOdobrio={ptpsDatumOdobrio}
            setPtpsDatumOdobrio={setPtpsDatumOdobrio}
            izradioImePrezime={izradioImePrezime}
            setIzradioImePrezime={setIzradioImePrezime}
            kontrolisaoImePrezime={kontrolisaoImePrezime}
            setKontrolisaoImePrezime={setKontrolisaoImePrezime}
            odobrioImePrezime={odobrioImePrezime}
            setOdobrioImePrezime={setOdobrioImePrezime}
        />
        <Stack direction="row" sx={{
          ...inputSpacing,
          gap: "20px",
          justifyContent: "center",
          backgroundColor: "transparent !important",
          }}>
          <Button variant="contained"
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
            backgroundColor: "transparent !important",
            color: "#FFF",
            lineHeight: "21px",
            '@media (max-width: 1920px)': {
              width: "235px",
              fontSize: "14px", 
              padding: "8px 35px",
            }
          }}>Откажи</Button>
      
          <Button variant="contained"
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

export default UpdateProcess