import { useState } from 'react'
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
import { useNavigate, useLocation } from 'react-router-dom';
import LocalizedDatePicker from 'components/localization/localized-date-picker.components';

import { postProcedura } from 'services/fuk-procedura.services';
import { postPotpisi } from 'services/fuk-potpis.services';
import { postAktivnosti } from 'services/fuk-aktivnost.services';
import AddActivity from './add-activity';
import { StyledContainer } from 'components/styled/StyledContainer';
import ProcHeader from 'components/process-procedure/proc-header/proc-header.components';
import { StyledPaper } from 'components/styled/StyledPaper';
import ProcInputGrid from 'components/process-procedure/proc-input-grid/ProcInputGrid.components';
import ProcInputBox from 'components/process-procedure/proc-input-box/ProcInputBox.components';
import AddPotpis from 'components/process-procedure/add-potpis/AddPotpis';



const opstina = process.env.REACT_APP_OPSTINA;



const AddProcedure = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const oblast = location.state.oblastId;
  const imeOblasti = location.state.imeOblasti;
  const procesId = location.state.procesId;
  const imeProcesa = location.state.imeProcesa;
  const proceduraId = location.state.proceduraId;

  // page 1
  const [organizacijaId, setOrganizacijaId] = useState(3001);
  const [organizacionaJedinicaId, setOrganizacionaJedinicaId] = useState(3001);
  const [organizacionaJedinicaName, setOrganizacionaJedinicaName] = useState("Одаберите");
  const [oblastId, setOblastId] = useState(oblast);
  const [nazivProcesa, setNazivProcesa] = useState(null);
  const [sifraProcedure, setSifraProcedure] = useState(null);
  const [nazivProcedure, setNazivProcedure] = useState(null);
  const [verzijaProcedure, setVerzijaProcedure] = useState(null);
  const [rukovodilacOrganizacioneJedinice, setRukovodilacOrganizacioneJedinice] = useState(null);
  const [nosilacPoslovnogProcesa, setNosilacPoslovnogProcesa] = useState(null);

  // page 2
  const [ciljProcedure, setCiljProcedure] = useState(null);

  // page 3
  const [podrucjePrimene, setPodrucjePrimene] = useState(null);

  // page 4
  const [drugaDokumentacija, setDrugaDokumentacija] = useState(null);

  // page 5
  const [odgovornost, setOdgovornost] = useState(null);

  // page 6
  const [zakonskiOkvir, setZakonskiOkvir] = useState(null);

  // page 7
  const [pojmovi, setPojmovi] = useState(null);

  // page 8
  const [ptpsDatumIzradio, setPtpsDatumIzradio] = useState(null);
  const [ptpsDatumKontrolisao, setPtpsDatumKontrolisao] = useState(null);
  const [ptpsDatumOdobrio, setPtpsDatumOdobrio] = useState(null);
  const [izradioImePrezime, setIzradioImePrezime] = useState(null);
  const [kontrolisaoImePrezime, setKontrolisaoImePrezime] = useState(null);
  const [odobrioImePrezime, setOdobrioImePrezime] = useState(null);

  // page 9
  const [aktivnosti, setAktivnosti] = useState([]);

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

  const handleSubmit = async () => {
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

      const resProcedura = await postProcedura(proceduraInput)

      // potpis
      const dok_id = resProcedura.data.data.proc_id

      // izradio
      {
        const potpis = {
          dok_id: dok_id,
          dok_tip: 2,
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
          dok_tip: 2,
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
          dok_tip: 2,
          ptps_vrsta: 3,
          ime_i_prezime: odobrioImePrezime,
          ptps_datum: ptpsDatumOdobrio,
        }
        const resPotpis = await postPotpisi(potpis)
      }

      // aktivnosti
      const resAktivnosti = await postAktivnosti(parseInt(procesId), parseInt(dok_id), aktivnosti);

      navigate("/fuk/glavna");
    } catch (error) {
      alert(error);
    }
  }


  const municipality = "ЈКП Медиана"

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


  // MARK: RETURN
  return (
    <StyledContainer disabledGutters>
      <Grid container direction="column" rowSpacing={3}>
        {/* Header */}
        <Grid item>
          <ProcHeader heading="Додавање процедуре" />
        </Grid>
        {/* Title */}
        <Grid item>
          <StyledPaper sx={{
            padding: "20px 0",
            textAlign: "center",
          }}>
            <Typography variant="h3">документација о систему - процедуре</Typography>
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
              }}>Процедура пословног одлучивања директора</Typography>
            </Stack>
          </StyledPaper>
        </Grid>
        {/* Top Grid */}
        <Grid item>
          <ProcInputGrid
            procedura
            opstina={opstina}
            imeOblasti={location.state.imeOblasti}
            setOrganizacijaId={setOrganizacijaId}
            organizacionaJedinicaName={organizacionaJedinicaName}
            setOrganizacionaJedinicaName={setOrganizacionaJedinicaName}
            setOblastId={setOblastId}
            setOrganizacionaJedinicaId={setOrganizacionaJedinicaId}
            setSifraProc={setSifraProcedure}
            setNazivProc={setNazivProcedure}
            setVerzijaProc={setVerzijaProcedure}
            setRukovodilacOrganizacioneJedinice={setRukovodilacOrganizacioneJedinice}
            setNosilacPoslovnogProcesa={setNosilacPoslovnogProcesa}
          />
        </Grid>

        <Grid item>
          <ProcInputBox
            id="ciljProcedure"
            label="Сврха и циљ процедуре"
            toSet={setCiljProcedure}
          />
        </Grid>

        <Grid item>
          <ProcInputBox
            id="podrucjePrimene"
            label="Подручје примене"
            toSet={setPodrucjePrimene}
          />
        </Grid>

        <Grid item>
          <ProcInputBox
            id="drugaDokumentacija"
            label="Друга документација"
            toSet={setDrugaDokumentacija}
          />
        </Grid>

        <Grid item>
          <ProcInputBox
            id="odgovornost"
            label="Одговорност и овлашћења"
            toSet={setOdgovornost}
          />
        </Grid>

        <Grid item>
          <ProcInputBox
            id="zakonskiOkvir"
            label="Законски и подзаконски оквир"
            toSet={setZakonskiOkvir}
          />
        </Grid>

        <Grid item>
          <ProcInputBox
            id="pojmovi"
            label="Појмови и скраћенице које се користе у дијаграму тока"
            toSet={setPojmovi}
          />
        </Grid>

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
        <AddActivity
          oblastId={oblastId}
          imeOblasti={imeOblasti}
          procesId={procesId}
          imeProcesa={imeProcesa}
          proceduraId={proceduraId}
          aktivnosti={aktivnosti}
          setAktivnosti={setAktivnosti}
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
      </Grid>
    </StyledContainer>
  )
}

export default AddProcedure