import { useState } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


import { useNavigate, useLocation } from 'react-router-dom';


import { postProces } from 'services/fuk-proces.services'
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
import { StyledContainer } from 'components/styled/StyledContainer';
import ProcHeader from 'components/process-procedure/proc-header/proc-header.components';
import { StyledPaper } from 'components/styled/StyledPaper';
import ProcInputBox from 'components/process-procedure/proc-input-box/ProcInputBox.components';
import ProcInputGrid from 'components/process-procedure/proc-input-grid/ProcInputGrid.components';


const opstina = process.env.REACT_APP_OPSTINA;


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

  
  const inputSpacing = { marginBottom: 3 };



  return (
    <StyledContainer disableGutters>
      <Grid container direction="column" rowSpacing={3}>
        {/* Header */}
        <Grid item>
          <ProcHeader
            heading="Додавање мапе пословних процеса"
          />
        </Grid>
        {/* Title */}
        <Grid item>
          <StyledPaper sx={{
            padding: "20px 0",
            textAlign: "center",
          }}>
            <Typography variant="h3" >Мапа пословних процеса</Typography>
          </StyledPaper>
        </Grid>
        <Grid item>
          <StyledPaper>
            <Stack 
              alignItems="center" 
              py="30px" 
              spacing={2} 
            >
              <Typography variant="h4">Корисник јавних средстава: {opstina}</Typography>
              <Typography variant="h4" sx={{
                fontWeight: "500",
                textTransform: "uppercase",
              }}>Мапа пословних процеса</Typography>
            </Stack>
          </StyledPaper>
        </Grid>
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
        {/* Top Grid */}
        <Grid item>
          <ProcInputGrid 
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
        </Grid>
        <Grid item>
          <ProcInputBox 
            id="ciljPoslovnogProcesa"
            label="Циљ пословног процеса"
            toSet={setCiljPoslovnogProcesa}
          />
        </Grid>
        <AddProcess3
          glavniRizici={glavniRizici}
          setGlavniRizici={setGlavniRizici}
        />
        <Grid item>
          <ProcInputBox 
            id="kratakOpisUlaza"
            label="Кратак опис пословног процеса"
            toSet={setKratakOpisUlaza}
          />
        </Grid>
        <Grid item>
          <ProcInputBox 
            id="vezaSaDrugimProcesima"
            label="Везе са другим процесима"
            toSet={setVezaSaDrugimProcesima}
          />
        </Grid>
        <Grid item>
          <ProcInputBox 
            id="resursiZaOstvarivanjePoslovnogProcesa"
            label="Ресурси за остваривање пословног процеса"
            toSet={setResursiZaOstvarivanjePoslovnogProcesa}
          />
        </Grid>
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
      </Grid>
    </StyledContainer>
  )
}

export default AddProcess