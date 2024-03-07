import React from 'react'
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
import { useNavigate } from 'react-router-dom';
import LocalizedDatePicker from 'components/localization/localized-date-picker.components';

const UpdateProcedure7 = (prop) => {
  const {
    pojmovi,
    setPojmovi
  } = prop;

  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h8.fontSize', 
    textAlign: 'center'
  };

  return (
    <Grid container direction="column"  className="opacity-txt-box">
      <TextField  
        id="pojmovi"
        label="Појмови и скраћенице које се користе у дијаграму тока"
        variant="outlined" 
        value={pojmovi}
        onChange={(e) => {
          setPojmovi(e.target.value)
        }} 
      />  
    </Grid>

  )
}

export default UpdateProcedure7