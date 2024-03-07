import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Item from 'components/grid/item/item.components'
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField';


import { getProcesi } from 'services/fuk-proces.services'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { List, ListItem, OutlinedInput, TextareaAutosize } from '@mui/material';

const UpdateProcess5 = (props) => {
  const {
    vezaSaDrugimProcesima,
    setVezaSaDrugimProcesima
  } = props;

  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h8.fontSize', 
    textAlign: 'center'
  };

  return (
    <Grid container direction="column"  className="opacity-txt-box">
      <TextField
        multiline
        id="vezaSaDrugimProcesima"
        label="Везе са другим процесима"
        value={vezaSaDrugimProcesima}
        onChange={(e) => {
          setVezaSaDrugimProcesima(e.target.value)
        }}
      />  
    </Grid>
  )
}

export default UpdateProcess5