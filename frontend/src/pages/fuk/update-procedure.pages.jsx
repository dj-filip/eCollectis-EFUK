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
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import LocalizedDatePicker from 'components/localization/localized-date-picker.components';

import UpdateProcedure1 from './update-procedure.pages-1';
import UpdateProcedure2 from './update-procedure.pages-2';
import UpdateProcedure3 from './update-procedure.pages-3';
import UpdateProcedure4 from './update-procedure.pages-4';
import UpdateProcedure5 from './update-procedure.pages-5';
import UpdateProcedure6 from './update-procedure.pages-6';
import UpdateProcedure7 from './update-procedure.pages-7';
import UpdateProcedure8 from './update-procedure.pages-8';
import { getProcedura, patchProcedura } from 'services/fuk-procedura.services';

import { getPotpisiByDocumentIdAndType, patchPotpisi } from 'services/fuk-potpis.services'
import UpdateActivity from './update-activity.pages';
import { postAktivnosti, deleteAktivnosti } from 'services/fuk-aktivnost.services';
import { postAktivnost } from 'services/fuk-aktivnost.services';
import UpdatePotpis from './update-potpis';

const UpdateProcedure = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const oblast = location.state.oblastId;
  const imeOblasti = location.state.imeOblasti;
  const procesId = location.state.procesId;
  const imeProcesa = location.state.imeProcesa;
  const proceduraId = location.state.proceduraId;

  // page 1
  const [organizacijaId, setOrganizacijaId] = useState(null);
  const [organizacionaJedinicaId, setOrganizacionaJedinicaId] = useState(null);
  const [organizacionaJedinicaName, setOrganizacionaJedinicaName] = useState("Одаберите");
  const [oblastId, setOblastId] = useState(oblast);
  const [sifraProcedure, setSifraProcedure] = useState(null);
  const [nazivProcedure, setNazivProcedure] = useState(null);
  const [verzijaProcedure, setVerzijaProcedure] = useState(null);
  const [rukovodilacOrganizacioneJedinice, setRukovodilacOrganizacioneJedinice] = useState(null);
  const [nosilacPoslovnogProcesa, setNosilacPoslovnogProcesa] = useState(null);

  // page 2
  const [ciljProcedure, setCiljProcedure] = useState("");

  // page 3
  const [podrucjePrimene, setPodrucjePrimene] = useState("");

  // page 4
  const [drugaDokumentacija, setDrugaDokumentacija] = useState("");

  // page 5
  const [odgovornost, setOdgovornost] = useState("");

  // page 6
  const [zakonskiOkvir, setZakonskiOkvir] = useState("");

  // page 7
  const [pojmovi, setPojmovi] = useState("");

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

  // page 9
  const [aktivnosti, setAktivnosti] = useState([]);
  const [isAktivnostiDestroyed, setIsAktivnostiDestroyed] = useState(false)

  useEffect(() => {
    (async () => {
      const res = await getProcedura(id);
      console.log('res: ', res)
      const proceduraData = res.data.fuk_procedura

      // page 1
      setOrganizacijaId(proceduraData.org_id);
      setOrganizacionaJedinicaId(proceduraData.oj_id)
      setOrganizacionaJedinicaName(proceduraData.orgj_naziv)
      setSifraProcedure(proceduraData.proc_sifra)
      setNazivProcedure(proceduraData.proc_naziv)
      setVerzijaProcedure(proceduraData.proc_verzija)
      setRukovodilacOrganizacioneJedinice(proceduraData.proc_rukoj)
      setNosilacPoslovnogProcesa(proceduraData.proc_nosilac)

      // page 2
      setCiljProcedure(proceduraData.proc_cilj)

      // page 3
      setPodrucjePrimene(proceduraData.proc_podrucjep)

      // page 4
      setDrugaDokumentacija(proceduraData.proc_odok)
      
      // page 5
      setOdgovornost(proceduraData.proc_odgv)

      // page 6
      setZakonskiOkvir(proceduraData.proc_zakon)

      // page 7
      setPojmovi(proceduraData.proc_termin)

      // this goes from different request (getPotpisi)
      // page 8 
      const resPotpisi = await getPotpisiByDocumentIdAndType(id, 2)
      console.log('resPotpisi', resPotpisi)
      const potpisiData = resPotpisi.data.fuk_potpisi
      console.log("potpisiData:", potpisiData) 
      var tempIzradio = []
      var tempKontrolisao = []
      var tempOdobrio = []
      var tempIzradioIds = []
      var tempKontrolisaoIds = []
      var tempOdobrioIds = []
      for (var i = 0; i < potpisiData.length; i++) {
        if (potpisiData[i].ptps_vrsta === 1) {
          console.log('potpisi data: ', `${potpisiData[i].ptps_ime} ${potpisiData[i].ptps_prezime}`)
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
    })()
  }, []);

  function AreFieldsFilled() {
    if (
      organizacionaJedinicaId !== null &&
      organizacionaJedinicaName !== "Одаберите" &&
      oblastId !== null &&
      sifraProcedure !== null &&
      nazivProcedure !== null &&
      verzijaProcedure !== null &&
      rukovodilacOrganizacioneJedinice !== null &&
      nosilacPoslovnogProcesa !== null &&
      ciljProcedure !== null &&
      podrucjePrimene !== null &&
      drugaDokumentacija !== null &&
      odgovornost !== null &&
      zakonskiOkvir !== null &&
      pojmovi !== null &&
      ptpsDatumIzradio !== null &&
      ptpsDatumKontrolisao !== null &&
      ptpsDatumOdobrio !== null &&
      izradioImePrezime.length > 0 &&
      kontrolisaoImePrezime.length > 0 &&
      odobrioImePrezime.length > 0
    ) {
      return true;
    }
    return false;
  }

  const handleSubmit = async() =>  {
    try {
      console.log(
        'organizacijaId', organizacijaId,
        'organizacionaJedinicaId', organizacionaJedinicaId,
        'organizacionaJedinicaName', organizacionaJedinicaName,
        'oblastId', oblastId,
        'sifraProcedure', sifraProcedure,
        'nazivProcedure ', nazivProcedure,
        'verzijaProcedure ', verzijaProcedure,
        'rukovodilacOrganizacioneJedinice ', rukovodilacOrganizacioneJedinice,
        'nosilacPoslovnogProcesa ', nosilacPoslovnogProcesa,
        'ciljProcedure ', ciljProcedure,
        'podrucjePrimene', podrucjePrimene,
        'drugaDokumentacija', drugaDokumentacija,
        'odgovornost', odgovornost,
        'zakonskiOkvir', zakonskiOkvir,
        'pojmovi', pojmovi,
        'ptpsDatumIzradio ', ptpsDatumIzradio,
        'ptpsDatumKontrolisao ', ptpsDatumKontrolisao,
        'ptpsDatumOdobrio ', ptpsDatumOdobrio,
        'izradioImePrezime ', izradioImePrezime,
        'kontrolisaoImePrezime ', kontrolisaoImePrezime,
        'odobrioImePrezime ', odobrioImePrezime,
      )
      
      if (!AreFieldsFilled()) {
        throw "Једно или више поља нису попуњена! Молимо вас попуните сва неопходна поља или притисните дугме 'Помоћ'";
      }

      // proces
      const proceduraInput = {
        obl_id: oblastId,
        oj_id: organizacionaJedinicaId,
        prcs_id: procesId,
        proc_sifra: sifraProcedure,
        proc_naziv: nazivProcedure,
        proc_verzija: verzijaProcedure,
        proc_rukoj: rukovodilacOrganizacioneJedinice,
        proc_nosilac: nosilacPoslovnogProcesa,
        proc_cilj: ciljProcedure,
        proc_podrucjep: podrucjePrimene,
        proc_odok: drugaDokumentacija,
        proc_odgv: odgovornost,
        proc_zakon: zakonskiOkvir,
        proc_termin: pojmovi
      }

      const resProcedura = await patchProcedura(id, proceduraInput)
      console.log('resProcedura', resProcedura)

      // potpis
      const dok_id = resProcedura.data.proc_id

      // izradio
      {

        const potpis = {
          dok_id: dok_id,
          dok_tip: 2,
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
          dok_tip: 2,
          ptps_vrsta: 2,
          ime_i_prezime: kontrolisaoImePrezime,
          ptps_datum: ptpsDatumIzradio,
        }
        const resPotpis = await patchPotpisi(potpis)
      }

      // odobrio
      {

        const potpis = {
          dok_id: dok_id,
          dok_tip: 2,
          ptps_vrsta: 3,
          ime_i_prezime: odobrioImePrezime,
          ptps_datum: ptpsDatumIzradio,
        }
        const resPotpis = await patchPotpisi(potpis)
      }

      // aktivnosti
      {
        const resDeleteAktivnosti = await deleteAktivnosti(parseInt(procesId), parseInt(proceduraId));
        console.log('resDeleteAktivnosti', resDeleteAktivnosti);

        const resPostAktivnosti = await postAktivnosti(parseInt(procesId), parseInt(dok_id), aktivnosti);  
        console.log('resPostAktivnosti', resPostAktivnosti);
      }
      
      navigate("/fuk/glavna");
    } catch (error) {
      alert(error)
    } 
  }

  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h8.fontSize', 
    textAlign: 'center'
  };

  const formContainer = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
  };

  const municipality = "ЈКП Медиана"

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
      <Box className="obrada-procedure" sx={{ 
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
          Уређивање процедуре
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
          }}>документација о систему - процедуре</Typography>
          <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "15px",
          padding: "30px 0",
          backgroundColor: "#000A194D",
        }}>
          <Typography variant="h3">Корисник јавних средстава: {municipality}</Typography>
          <Typography variant="h3" sx={{
            fontWeight: "500 !important",
            textTransform: "uppercase",
          }}>{nazivProcedure}</Typography>
        </Box>
        <UpdateProcedure1
          organizacionaJedinicaName={organizacionaJedinicaName}
          setOrganizacionaJedinicaName={setOrganizacionaJedinicaName}
          organizacionaJedinicaId={organizacionaJedinicaId}
          setOrganizacionaJedinicaId={setOrganizacionaJedinicaId}
          sifraProcedure={sifraProcedure}
          setSifraProcedure={setSifraProcedure}
          nazivProcedure={nazivProcedure}
          setNazivProcedure={setNazivProcedure}
          verzijaProcedure={verzijaProcedure}
          setVerzijaProcedure={setVerzijaProcedure}
          rukovodilacOrganizacioneJedinice={rukovodilacOrganizacioneJedinice}
          setRukovodilacOrganizacioneJedinice={setRukovodilacOrganizacioneJedinice}
          nosilacPoslovnogProcesa={nosilacPoslovnogProcesa}
          setNosilacPoslovnogProcesa={setNosilacPoslovnogProcesa}
        />
        <UpdateProcedure2
          ciljProcedure={ciljProcedure}
          setCiljProcedure={setCiljProcedure}
        />
        <UpdateProcedure3
          podrucjePrimene={podrucjePrimene}
          setPodrucjePrimene={setPodrucjePrimene}
        />
        <UpdateProcedure4
          drugaDokumentacija={drugaDokumentacija}
          setDrugaDokumentacija={setDrugaDokumentacija}
        />
        <UpdateProcedure5
          odgovornost={odgovornost}
          setOdgovornost={setOdgovornost}
        />
        <UpdateProcedure6
          zakonskiOkvir={zakonskiOkvir}
          setZakonskiOkvir={setZakonskiOkvir}
        />
        <UpdateProcedure7
          pojmovi={pojmovi}
          setPojmovi={setPojmovi}
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
        <UpdateActivity
          oblastId={oblastId}
          imeOblasti={imeOblasti}
          procesId={procesId}
          imeProcesa={imeProcesa}
          proceduraId={proceduraId}
          aktivnosti={aktivnosti}
          setAktivnosti={setAktivnosti}
          isAktivnostiDestroyed={isAktivnostiDestroyed}
          setIsAktivnostiDestroyed={setIsAktivnostiDestroyed}
        />
        <Stack direction="row" sx={{
          gap: "20px",
          justifyContent: "center",
          backgroundColor: "transparent !important",
          }}>
          <Button variant="contained"
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

export default UpdateProcedure