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
import PrintIcon from 'assets/assets/icons/print-icon.svg';
import EditIcon from 'assets/assets/icons/edit-icon-2.svg';


const printLink = process.env.REACT_APP_PRINT_LINK;



const ViewProcedure = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const oblastId = location.state.oblastId;
  const imeOblasti = location.state.imeOblasti;
  const procesId = location.state.procesId;
  const imeProcesa = location.state.imeProcesa;
  const proceduraId = location.state.proceduraId;


  // page 1
  const [procedura, setProcedura] = useState("");
  const [organizacionaJedinica, setOrganizacionaJedinica] = useState("");
  const [sifraProcesa, setSifraProcesa] = useState("");
  const [rukovodilac, setRukovodilac] = useState("");
  const [nazivProcedure, setNazivProcedure] = useState("");
  const [nosilac, setNosilac] = useState("");
  const [verzija, setVerzija] = useState("");

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

  // get all data
  useEffect(() => {
    (async () => {
      try {
        const res = await getProcedura(proceduraId);
        const proceduraData = res.data.fuk_procedura
  
        // page 1
        setOrganizacionaJedinica(proceduraData.orgj_naziv);
        setProcedura(proceduraData.proc_naziv);
        setSifraProcesa(proceduraData.proc_sifra);
        setRukovodilac(proceduraData.proc_rukoj);
        setVerzija(proceduraData.proc_verzija);
        setNazivProcedure(proceduraData.proc_nazivprcs);
        setNosilac(proceduraData.proc_nosilac);
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
    <Grid container sx={{
      width: "100%",      
      maxWidth: "1760px",
      marginRight: "200px",
      paddingTop: "50px",
      '@media (max-width: 1920px)': {
        maxWidth: "1400px",
      }
    }}>
      <Box className="pregled-procedure" sx={{ 
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
          Преглед процедуре
          </Typography>
          <Stack direction="row" sx={{
            gap: "10px",
          }}>
            <Button onClick={(e) => {
              e.stopPropagation();
              navigate(`/fuk/obrada-procedure/${proceduraId}`, { state : { oblastId, imeOblasti, procesId, imeProcesa, proceduraId }});
            }} 
            sx={{
              justifyContent: "flex-end",
              padding: "0",
            }}>
              <Image src={EditIcon} width={40} height={40}></Image>
            </Button>
            <Button href={`http://${printLink}/print/procedure/${proceduraId}`} target="_blank" sx={{
              justifyContent: "flex-end",
              padding: "0",
            }}>
              <Image src={PrintIcon} width={40} height={40}></Image>
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
          <Typography variant="h3">Корисник јавних средстава: {organizacionaJedinica}</Typography>
          <Typography variant="h3" sx={{
            fontWeight: "500 !important",
            textTransform: "uppercase",
          }}>{procedura}</Typography>
        </Box>
        <ViewProcedure1
          procedura={procedura}
          organizacionaJedinica={organizacionaJedinica}
          sifraProcesa={sifraProcesa}
          rukovodilac={rukovodilac}
          nosilac={nosilac}
          verzija={verzija}
        />
        <ViewProcedure2
          ciljProcedure={ciljProcedure}
        />
        <ViewProcedure3
          podrucjePrimene={podrucjePrimene}
        />
        <ViewProcedure4
          drugaDokumentacija={drugaDokumentacija}
        />
        <ViewProcedure5
          odgovornost={odgovornost}
        />
        <ViewProcedure6
          zakonskiOkvir={zakonskiOkvir}
        />
        <ViewProcedure7
          pojmovi={pojmovi}
        />
        <ViewProcedure8
          izradio={izradio}
          kontrolisao={kontrolisao}
          odobrio={odobrio}
        />
        <ViewActivity
          oblastId={oblastId}
          imeOblasti={imeOblasti}
          procesId={procesId}
          imeProcesa={imeProcesa}
          proceduraId={proceduraId}
          imeProcedure={procedura}
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
          href={`http://${printLink}/print/procedure/${proceduraId}`}
          target="_blank"
        >Штампа процедуре и дијаграма тока</Button>
      </Box>
    </Grid>
  )
}

export default ViewProcedure