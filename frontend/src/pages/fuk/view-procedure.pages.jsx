import { useEffect, useState } from 'react'
import { 
  Box,
  Grid,
  Button,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'mui-image';
import { useNavigate, useLocation } from 'react-router-dom';
import { getProcedura } from 'services/fuk-procedura.services';
import { getPotpisiByDocumentIdAndType } from 'services/fuk-potpis.services'
import ViewProcedure1 from './view-procedure.pages-1';
import ViewProcedure2 from './view-procedure.pages-2';
import ViewProcedure3 from './view-procedure.pages-3';
import ViewProcedure4 from './view-procedure.pages-4';
import ViewProcedure5 from './view-procedure.pages-5';
import ViewProcedure6 from './view-procedure.pages-6';
import ViewProcedure7 from './view-procedure.pages-7';
import ViewProcedure8 from './view-procedure.pages-8';
import ViewActivity from './view-activity.pages';


// assets
import PrintIcon from 'assets/icons/print-icon.svg';
import EditIcon from 'assets/icons/edit-icon-2.svg';
import { StyledContainer } from 'components/styled/StyledContainer';
import ProcHeader from 'components/process-procedure/proc-header/proc-header.components';
import { StyledPaper } from 'components/styled/StyledPaper';
import ProcGrid from 'components/process-procedure/proc-grid/proc-grid.components';
import ProcBox from 'components/process-procedure/proc-box/proc-box.components';


const printLink = process.env.REACT_APP_PRINT_LINK;



const ViewProcedure = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const oblastId = location.state.oblastId;
  const imeOblasti = location.state.imeOblasti;
  const procesId = location.state.procesId;
  const imeProcesa = location.state.imeProcesa;
  const proceduraId = location.state.proceduraId;



  // title
  const [procedura, setProcedura] = useState("");
  const [organizacionaJedinica, setOrganizacionaJedinica] = useState("");


  const [topTableData, setTopTableData] = useState({});

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
  const [izradio, setIzradio] = useState(null);
  const [kontrolisao, setKontrolisao] = useState(null);
  const [odobrio, setOdobrio] = useState(null);

  const [bottomTableData, setBottomTableData] = useState({});

  // get all data
  useEffect(() => {
    (async () => {
      try {
        const res = await getProcedura(proceduraId);
        const proceduraData = res.data.fuk_procedura
  
        // page 1
        setOrganizacionaJedinica(proceduraData.orgj_naziv);
        setProcedura(proceduraData.proc_naziv);


        setTopTableData({
          sifra: proceduraData.proc_sifra,
          rukovodilac: proceduraData.proc_rukoj,
          verzija: proceduraData.proc_verzija,
          nosilac: proceduraData.proc_nosilac
        });
        // page 2
        setCiljProcedure(proceduraData.orgj_naziv);
        // page 3
        setPodrucjePrimene(proceduraData.proc_podrucjep);
        // page 4
        setDrugaDokumentacija(proceduraData.proc_odok)
        // page 5
        setOdgovornost(proceduraData.proc_odgv);
        // page 6
        setZakonskiOkvir(proceduraData.proc_zakon);
        //page 7
        setPojmovi(proceduraData.proc_termin);
        // page 8
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
          setIzradio(tempIzradio);
          setKontrolisao(tempKontrolisao);
          setOdobrio(tempOdobrio);
          setBottomTableData({
            izradio: tempIzradio,
            kontrolisao: tempKontrolisao,
            odobrio: tempOdobrio
          })
        }
      } catch (error) {
        alert(error)
      }
    })();
  }, []);

  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h6.fontSize', 
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
    <StyledContainer disableGutters>
      <Grid container direction="column" rowSpacing={4}>
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
          <ViewActivity
            procesId={procesId}
            proceduraId={proceduraId}
          />
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