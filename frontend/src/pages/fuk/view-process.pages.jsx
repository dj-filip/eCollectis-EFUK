import { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom';

import { getProces } from 'services/fuk-proces.services'
import { getProcedure } from 'services/fuk-procedura.services'
import { getRiziciByProcessId } from 'services/fuk-rizik.services'
import { getPotpisiByDocumentIdAndType } from 'services/fuk-potpis.services'

// mui components
import {
  Grid,
  Button,
  Stack,
  Typography
} from '@mui/material';


// custom components
import { StyledPaper } from 'components/styled/StyledPaper';
import { StyledContainer } from 'components/styled/StyledContainer';
import ProcBox from 'components/process-procedure/proc-box/proc-box.components';
import ProcGrid from 'components/process-procedure/proc-grid/proc-grid.components';
import ProcHeader from 'components/process-procedure/proc-header/proc-header.components';
import ProcListBox from 'components/process-procedure/proc-list-box/ProcListBox.components';



const printLink = process.env.REACT_APP_PRINT_LINK;


const ViewProcess = () => {
  const location = useLocation();
  const oblastId = location.state.oblastId;
  const imeOblasti = location.state.imeOblasti;
  const procesId = location.state.procesId;


 
  // title
  const [organizacija, setOrganizacija] = useState(" ");

  // top table
  const [topTableData, setTopTableData] = useState({});
  
  // naziv
  const [nazivProcesa, setNazivProcesa] = useState(" ");

  // cilj
  const [procesCilj, setProcesCilj] = useState(" ");

  // rizici
  const [glavniRizici, setGlavniRizici] = useState([]);

  // opis
  const [procDesc, setProcDesc] = useState([]);

  // veze
  const [vezaSaDrugimProcesima, setVezaSaDrugimProcesima] = useState(null);

  // resursi
  const [resursiZaOstvarivanjePoslovnogProcesa, setResursiZaOstvarivanjePoslovnogProcesa] = useState("");

  // sifre i procedure
  const [proceduresListData, setProceduresListData] = useState({});

  // bottom table
  const [bottomTableData, setBottomTableData] = useState({});


  // get all data
  useEffect(() => {

    (async () => {
      console.log('procedId: ', procesId, ' oblastId', oblastId)
      const res = await getProces(procesId);
      console.log('res: ', res)
      const procesData = res.data.fuk_proces

      // title
      setOrganizacija(procesData.orgj_naziv);
      
      // top table
      setTopTableData({
        sifra: procesData.prcs_sifra,
        rukovodilac: procesData.prcs_rukoj,
        verzija: procesData.prcs_verzija,
        nosilac: procesData.prcs_nosilac,
      });
      
      // naziv
      setNazivProcesa(procesData.prcs_naziv);
      
      // cilj    
      setProcesCilj(procesData.prcs_cilj);
      {
      // rizici
      const resRizici = await getRiziciByProcessId(procesId);
      const riziciData = resRizici.data.fuk_rizici
      var tempGlavniRizici = []
      for (var i = 0; i < riziciData.length; i++) {
        console.log("rizik:", riziciData[i]);
        tempGlavniRizici.push(riziciData[i].rsk_naziv)
      }
      setGlavniRizici(tempGlavniRizici);
      }

      // opis
      setProcDesc([procesData.prcs_kropulaz, procesData.prcs_kropakt, procesData.prcs_kroprez]);
      
      // veze
      setVezaSaDrugimProcesima(procesData.prcs_veza);
      
      // resursi
      setResursiZaOstvarivanjePoslovnogProcesa(procesData.prcs_resursi);
      
      {
      // sifre i procedure
      const resProcedure = await getProcedure(procesId);
      const procedureData = resProcedure.data.fuk_procedure

      var tempProcedure = []
      for (var i = 0; i < procedureData.length; i++) {
        var row = {
          id: procedureData[i].proc_id,
          naziv: procedureData[i].proc_sifra + " - " + procedureData[i].proc_naziv
        }
        tempProcedure.push(row)
      }
      setProceduresListData({
        oblastId: oblastId, 
        imeOblasti: imeOblasti, 
        procesId: procesId,
        imeProcesa: procesData.prcs_naziv, 
        procedure: tempProcedure
      });
      }

      {
      // bottom table
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
      setBottomTableData({
        izradio: tempIzradio,
        kontrolisao: tempKontrolisao,
        odobrio: tempOdobrio
      })
      }

    })();
  }, []);


  return (
    <StyledContainer disableGutters>
      <Grid container direction="column" rowSpacing={3}>
        {/* Header */}
        <Grid item>
          <ProcHeader
            type="proces"
            heading="Преглед мапе пословних процеса"
            procesId={procesId}
            oblastId={oblastId}
            imeOblasti={imeOblasti}
            btns={["edit", "print"]}
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
              <Typography variant="h4">Корисник јавних средстава: {organizacija}</Typography>
              <Typography variant="h4" sx={{
                fontWeight: "500",
                textTransform: "uppercase",
              }}>{nazivProcesa}</Typography>
            </Stack>
          </StyledPaper>
        </Grid>
        {/* Top Table */}
        <Grid item>
          <ProcGrid
            table="top"
            organizacija={organizacija}
            tableData={topTableData}
          />
        </Grid>
        {/* Boxes */}
        <Grid item>
          <ProcBox
            title={"Назив пословног процеса"}
            content={nazivProcesa}
          />
        </Grid>
        <Grid item>
          <ProcBox
            title={"Циљ пословног процеса"}
            content={procesCilj}
          />
        </Grid>
        <Grid item>
          <ProcBox
            title={"Основни ризици"}
            content={glavniRizici}
          />
        </Grid>
        <Grid item>
          <ProcBox
            title={"Кратак опис процеса"}
            procDesc={procDesc}
          />
        </Grid>
        <Grid item>
          <ProcBox
            title={"Везе са другим процесима"}
            content={vezaSaDrugimProcesima}
          />
        </Grid>
        <Grid item>
          <ProcBox
            title={"Ресурси потребни за реализацију процеса"}
            content={resursiZaOstvarivanjePoslovnogProcesa}
          />
        </Grid>
        <Grid item>
          <ProcListBox
          title={"Шифре и називи процедура"}
            proceduresListData={proceduresListData}
          />
        </Grid>
        <Grid item>
          <ProcBox
            title={"Ресурси потребни за реализацију процеса"}
            content={resursiZaOstvarivanjePoslovnogProcesa}
          />
        </Grid>
        {/* Bottom Table */}
        <Grid item>
          <ProcGrid
            table="bottom"
            tableData={bottomTableData}
          />
        </Grid>
        <Grid item textAlign="center">
          <Button variant="btn" href={`http://${printLink}/print/process/${procesId}`}
            >Штампа процеса
          </Button>
        </Grid>
      </Grid>
    </StyledContainer>
  )
}

export default ViewProcess