import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Item from 'components/grid/item/item.components'
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FormControl from "@mui/material/FormControl";
import DatePicker from "@mui/lab/DatePicker";

import { useNavigate, useLocation } from 'react-router-dom';
import LocalizedDatePicker from 'components/localization/localized-date-picker.components';


import { getProces, postProces } from 'services/fuk-proces.services'
import { getProcedure, setProcedure, postProcedure, deleteProcedura } from 'services/fuk-procedura.services'
import { postPotpis } from 'services/fuk-potpis.services'

const UpdateProcess7 = (props) => {
  const navigate = useNavigate();
  const {
    procesId,
    oblastId,
    imeOblasti
  } = props;

  const [procedure, setProcedure] = useState([]);
  const [imeProcesa, setImeProcesa] = useState("");
   
  // get all data
  useEffect(() => {
    (async () => {
      console.log('procesId: ', procesId)
      const resProces = await getProces(procesId);
      console.log('resProces: ', resProces)
      const procesData = resProces.data.fuk_proces
      setImeProcesa(procesData.prcs_naziv)
      
      const resProcedure = await getProcedure(procesId);
      console.log('resProcedure: ', resProcedure)
      const procedureData = resProcedure.data.fuk_procedure

      var temp = []
      for (var i = 0; i < procedureData.length; i++) {
        var row = {
          id: i + 1,
          name: i + 1 + ") " + procedureData[i].proc_sifra + " - " + procedureData[i].proc_naziv,
          proc_id: procedureData[i].proc_id, 
          update: `/fuk/obrada-procedure/${procedureData[i].proc_id}`
        }
        temp.push(row)
      }
      console.log('temporary', temp)
      setProcedure(temp)
    })();
  }, []);

  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h8.fontSize', 
    textAlign: 'center'
  };
  
  const optionButtons = {
    textTransform: "none",
  };

  return (
    <Grid container direction="column"  className="opacity-txt-box">
      <Typography variant="h4" sx={{
        border: "none !important",
        paddingTop: "10px",
      }}>Шифре и називи процедура</Typography>
    {/* <Stack spacing={2}>

      [  { procedure?.map((row) => (
          <Item key={row.id}>
            <Typography>
              {row.name}
              <Button
                variant="outlined"
                size="small"
                sx={{ ...optionButtons }}
                // disabled={checkIfCreatedByRole(contacts[i])}
                onClick={() => {
                  navigate(row.update, { state : { oblastId, imeOblasti, procesId, imeProcesa, proceduraId: row.proc_id }})
                }}
              >
                Промени
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{ ...optionButtons, color: 'red' }}
                // disabled={checkIfCreatedByRole(contacts[i])}
                onClick={(async () => {
                  const resdeleteProcedura = await deleteProcedura(row.proc_id);
                  console.log('resdeleteProcedura', resdeleteProcedura);
                })()}
              >
                Обриши
            </Button>
            </Typography>
          </Item>
          ))}
        </Stack> ]*/}
      <Typography sx={{
        fontSize: "24px",
        fontWeight: "300",
        '@media (max-width: 1920px)': {
          fontSize: "18px", 
        }
      }}>Ово поље ће се аутоматски попунити када додате процедуре на процес кроз кориснички интерфејс</Typography>
    </Grid>
  )
}

export default UpdateProcess7