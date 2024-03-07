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

const AddProcess2 = (props) => {
  const {
    setCiljPoslovnogProcesa
  } = props
  
  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h8.fontSize', 
    textAlign: 'center'
  };

  return (
    <Grid container direction="column"  className="opacity-txt-box">
        <TextField
          multiline  
          id="ciljPoslovnogProcesa" 
          label="Циљ пословног процеса" 
          variant="outlined" 
          onChange={(e) => {
            setCiljPoslovnogProcesa(e.target.value)
          }}
        />  
    </Grid>
  )
}

export default AddProcess2