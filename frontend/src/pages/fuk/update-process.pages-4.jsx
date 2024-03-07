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


import { getProces, postProces } from 'services/fuk-proces.services'
import { postPotpis } from 'services/fuk-potpis.services'

const UpdateProcess4 = (props) => {
  const {
    procesId,
    kratakOpisUlaza,
    setKratakOpisUlaza,
    kratakOpisAktivnosti,
    setKratakOpisAktivnosti,
    kratakOpisRezultata,
    setKratakOpisRezultata
  } = props

  // get all data
  useEffect(() => {
    (async () => {
      const res = await getProces(procesId);
      console.log('res: ', res)
      const procesData = res.data.fuk_proces
      
      setKratakOpisUlaza(procesData.prcs_kropulaz);
      setKratakOpisAktivnosti(procesData.prcs_kropakt);
      setKratakOpisRezultata(procesData.prcs_kroprez);
    })();
  }, []);

  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h8.fontSize', 
    textAlign: 'center'
  };


  return (
    // <Grid container spacing={2}>
    //   <Grid item xs={12}>
    //     <Grid container spacing={2}>
    //       <Grid item xs={12}>
    //         <Item>
    //           <Box>
    //             <Typography sx={{ ...headline }}>Кратки опис процеса</Typography>
    //           </Box>
    //         </Item>      
    //       </Grid>
    //       <Grid item xs={12}>
    //         <Item>
    //           <Stack>
    //             <TextField 
    //               fullWidth 
    //               id="kratakOpisUlaza" 
    //               label="Улаз" 
    //               variant="outlined" 
    //               onChange={(e) => {
    //                 setKratakOpisUlaza(e.target.value)
    //               }}
    //             />    
    //             <Typography>
    //               Поље "Активности" ће се аутоматски попунити када додате активности на процедуру процеса кроз кориснички интерфејс
    //             </Typography> 
    //             <TextField 
    //               fullWidth 
    //               id="kratakOpisRezultata" 
    //               label="Излаз" 
    //               variant="outlined" 
    //               onChange={(e) => {
    //                 setKratakOpisRezultata(e.target.value)
    //               }}
    //             />    
    //           </Stack>
    //         </Item>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>
    <Grid container direction="column"  className="opacity-txt-box">
      <TextField  
        multiline
        id="kratakOpisUlaza" 
        label="Кратак опис пословног процеса" 
        variant="outlined" 
        value={kratakOpisRezultata}
        onChange={(e) => {
          setKratakOpisUlaza(e.target.value)
        }}
      />
    </Grid>
  )
}

export default UpdateProcess4