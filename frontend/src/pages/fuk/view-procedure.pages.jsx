import { useEffect, useState } from 'react'

import { useNavigate, useLocation } from 'react-router-dom';

import { getProcedura } from 'services/fuk-procedura.services';
import { getPotpisiByDocumentIdAndType } from 'services/fuk-potpis.services';
import { getAktivnosti } from 'services/fuk-aktivnost.services';

// mui components
import { 
  Grid,
  Button,
  Stack,
  Typography
} from '@mui/material';

// custom components
import { StyledContainer } from 'components/styled/StyledContainer';
import { StyledPaper } from 'components/styled/StyledPaper';
import ProcGrid from 'components/process-procedure/proc-grid/proc-grid.components';
import ProcBox from 'components/process-procedure/proc-box/proc-box.components';
import ProcHeader from 'components/process-procedure/proc-header/proc-header.components';
import CollapseTable from 'components/process-procedure/collapse-table/collapse-table.components';



const printLink = process.env.REACT_APP_PRINT_LINK;


const ViewProcedure = () => {
  const location = useLocation();
  const oblastId = location.state.oblastId;
  const imeOblasti = location.state.imeOblasti;
  const procesId = location.state.procesId;
  const imeProcesa = location.state.imeProcesa;
  const proceduraId = location.state.proceduraId;



  // title
  const [procedura, setProcedura] = useState("");
  const [organizacionaJedinica, setOrganizacionaJedinica] = useState("");

  // top table
  const [topTableData, setTopTableData] = useState({});

  // cilj
  const [ciljProcedure, setCiljProcedure] = useState("");

  // podrucje
  const [podrucjePrimene, setPodrucjePrimene] = useState("");

  // druga dokumentacija
  const [drugaDokumentacija, setDrugaDokumentacija] = useState("");

  // odgovornost
  const [odgovornost, setOdgovornost] = useState("");

  // zakonski okvir
  const [zakonskiOkvir, setZakonskiOkvir] = useState("");

  // pojmovi
  const [pojmovi, setPojmovi] = useState("");

  // bottom table
  const [bottomTableData, setBottomTableData] = useState({});

  // aktivnosti
  const [aktivnosti, setAktivnosti] = useState([])

  // get all data
  useEffect(() => {
    (async () => {
      try {
        const res = await getProcedura(proceduraId);
        const proceduraData = res.data.fuk_procedura
  
        // title
        setOrganizacionaJedinica(proceduraData.orgj_naziv);
        setProcedura(proceduraData.proc_naziv);

        // top table
        setTopTableData({
          sifra: proceduraData.proc_sifra,
          rukovodilac: proceduraData.proc_rukoj,
          verzija: proceduraData.proc_verzija,
          nosilac: proceduraData.proc_nosilac
        });

        // cilj
        setCiljProcedure(proceduraData.orgj_naziv);

        // podrucje
        setPodrucjePrimene(proceduraData.proc_podrucjep);

        // druga dokumentacija
        setDrugaDokumentacija(proceduraData.proc_odok)

        // odgovornost
        setOdgovornost(proceduraData.proc_odgv);

        // zakonski okvir
        setZakonskiOkvir(proceduraData.proc_zakon);

        // pojmovi
        setPojmovi(proceduraData.proc_termin);

        // bottom table
        {    
          const resPotpisi = await getPotpisiByDocumentIdAndType(proceduraId, 2)
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
          setBottomTableData({
            izradio: tempIzradio,
            kontrolisao: tempKontrolisao,
            odobrio: tempOdobrio
          })
        }

        // aktivnosti
        {
          const res = await getAktivnosti(procesId, proceduraId);
          const aktivnostiData = res.data.fuk_aktivnosti
          var tempAktivnosti = []
          var tempRedosled = []
          for (var i = 0; i < aktivnostiData.length; i++) {
            if (!tempRedosled.includes(aktivnostiData[i].akt_redosled)) {
              tempRedosled.push(aktivnostiData[i].akt_redosled)
              tempAktivnosti.push(aktivnostiData[i])
            }
          }
          setAktivnosti(tempAktivnosti);
        }
      } catch (error) {
        alert(error)
      }
    })();
  }, []);


  return (
    <StyledContainer disableGutters>
      <Grid container direction="column" rowSpacing={3}>
        {/* Header */}
        <Grid item>
          <ProcHeader
            type="procedure"
            heading="Преглед процедуре"
            procesId={procesId}
            oblastId={oblastId}
            imeOblasti={imeOblasti}
            imeProces={imeProcesa}
            proceduraId={proceduraId}
            btns={["edit", "print"]}
          />
        </Grid>
        {/* Title */}
        <Grid item>
          <StyledPaper sx={{
            padding: "20px 0",
            textAlign: "center",
          }}>
            <Typography variant="h3" >Документација о систему - процедуре</Typography>
          </StyledPaper>
        </Grid>
        <Grid item>
          <StyledPaper>
            <Stack 
              alignItems="center" 
              py="30px" 
              spacing={2} 
            >
              <Typography variant="h4">Корисник јавних средстава: {organizacionaJedinica}</Typography>
              <Typography variant="h4" sx={{
                fontWeight: "500",
                textTransform: "uppercase",
              }}>{procedura}</Typography>
            </Stack>
          </StyledPaper>
        </Grid>
        {/* Top Table */}
        <Grid item>
          <ProcGrid
            table="top"
            organizacija={organizacionaJedinica}
            tableData={topTableData}
          />
        </Grid>
        {/* Boxes */}
        <Grid item>
          <ProcBox
            title={"Сврха и циљ процедуре"}
            content={ciljProcedure}
          />
        </Grid>
        <Grid item>
          <ProcBox
            title={"Подручје примене"}
            content={podrucjePrimene}
          />
        </Grid>
        <Grid item>
          <ProcBox
            title={"Друга документација"}
            content={drugaDokumentacija}
          />
        </Grid>
        <Grid item>
          <ProcBox
            title={"Одговорност и овлашћења"}
            content={odgovornost}
          />
        </Grid>
        <Grid item>
          <ProcBox
            title={"Законски и подзаконски оквир"}
            content={zakonskiOkvir}
          />
        </Grid>
        <Grid item>
          <ProcBox
            title={"Појмови и скраћенице које се користе у дијаграму тока"}
            content={pojmovi}
          />
        </Grid>
        {/* Bottom Table */}
        <Grid item>
          <ProcGrid
            table="bottom"
            tableData={bottomTableData}
          />
        </Grid>
        {/* Activity Header */}
        <Grid item>
          <StyledPaper sx={{
            padding: "50px 40px",
          }}>
            <Typography variant="h3" >Активности</Typography>
          </StyledPaper>
        </Grid>
        {/* Activity Table */}
        <Grid item>
          <CollapseTable data={aktivnosti} />
        </Grid>
        <Grid item textAlign="center">
          <Button variant="btn" href={`http://${printLink}/print/procedure/${proceduraId}`}
            >Штампа процедуре и дијаграма тока
          </Button>
        </Grid>
      </Grid>
    </StyledContainer>
  )
}

export default ViewProcedure