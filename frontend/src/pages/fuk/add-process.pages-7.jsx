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


import { postProces } from 'services/fuk-proces.services'
import { postPotpis } from 'services/fuk-potpis.services'

const AddProcess7 = () => {
  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h8.fontSize', 
    textAlign: 'center'
  };
  
  return (
    <Grid container direction="column"  className="opacity-txt-box">
      <Typography variant="h4" sx={{
        border: "none !important",
        paddingTop: "10px",
      }}>Шифре и називи процедура</Typography>
    {/* <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group"
      sx={{
        alignItems: "flex-start",
        gap: "10px",
      }}
    >
      {procedure?.map(({id, naziv}) => {
        return (<Button onClick={() => {
            navigate(`/fuk/pregled-procedure/`, { state : { 
              oblastId, 
              imeOblasti, 
              procesId, 
              imeProcesa, 
              proceduraId: id }})
          }}
          sx={{
            border: "1px solid #3AD1E8 !important",
            borderRadius: "20px !important",
            padding: "5px 20px",
            backgroundColor: "#3AD1E826",
            padding: "5px 20px",
            color: "#FFF",
            fontSize: "24px",
            fontWeight: "300",
            lineHeight: "32px",
            textTransform: "none"
          }}
          >{naziv}</Button>);
      })}
      
    </ButtonGroup> */}
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

export default AddProcess7