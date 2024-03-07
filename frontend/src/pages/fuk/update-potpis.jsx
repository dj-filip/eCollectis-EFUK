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

const UpdatePotpis = (props) => {
  const {
    ptpsDatumIzradio,
    setPtpsDatumIzradio,
    ptpsDatumKontrolisao,
    setPtpsDatumKontrolisao,
    ptpsDatumOdobrio,
    setPtpsDatumOdobrio,
    izradioImePrezime,
    setIzradioImePrezime,
    kontrolisaoImePrezime,
    setKontrolisaoImePrezime,
    odobrioImePrezime,
    setOdobrioImePrezime
  } = props

  useEffect(() => {
    
    }, []
  )

  const inputSpacing = { marginBottom: 3 };

  return (
    <Grid container className="input-box">
    {/* prvi red */}
    <Grid container className="half-wdth">  
      <TextField 
        fullWidth 
        id="izradio-ime-prezime" 
        label="Припрема" 
        variant="outlined"
        value={izradioImePrezime}
        onChange={(e) => {
          let input = e.target.value
          let array = input.split(',')
          array.forEach((item, i) => {
            array[i] = item.replace(/^[^a-zA-Z0-9]*|[^a-zA-Z0-9]*$/g, '')
          })
          setIzradioImePrezime(array)
        }}
      /> 
    </Grid>
    <Grid container className="half-wdth">  
      <FormControl
        // error={Boolean(userProfileError.name)}
        fullWidth
        variant="filled"
        sx={{ 
          ...inputSpacing, 
        '& > div > div': {
          backgroundColor: "transparent !important",
        },
        '& > div > div::before': {
          borderBottomColor: "#3AD1E8 !important",
        },
        '& > div > div::after': {
          borderBottomColor: "#3AD1E8 !important",
        }
        }}
      >
        <DatePicker
          label="Датум"
          inputFormat="dd/MM/yyyy"
          autoComplete="off"
          value={ptpsDatumIzradio}
          onChange={(newValue) => {
            setPtpsDatumIzradio(newValue);
          }}
          renderInput={(params) => <TextField variant="filled" {...params} />}
        />
      </FormControl>
    </Grid>
    {/* drugi red */}
    <Grid container className="half-wdth">  
      <TextField 
        fullWidth 
        id="kontrolisao-ime-prezime" 
        label="Контролише" 
        variant="outlined" 
        value={kontrolisaoImePrezime}
        onChange={(e) => {
          let input = e.target.value
          let array = input.split(',')
          array.forEach((item, i) => {
            array[i] = item.replace(/^[^a-zA-Z0-9]*|[^a-zA-Z0-9]*$/g, '')
          })
          setKontrolisaoImePrezime(array)
        }}
      />    
    </Grid>
    <Grid container className="half-wdth">  
        <FormControl
        // error={Boolean(userProfileError.name)}
        fullWidth
        variant="filled"
        sx={{ 
          ...inputSpacing, 
        '& > div > div': {
          backgroundColor: "transparent !important",
        },
        '& > div > div::before': {
          borderBottomColor: "#3AD1E8 !important",
        },
        '& > div > div::after': {
          borderBottomColor: "#3AD1E8 !important",
        }
        }}    
      >
      <DatePicker
        label="Датум"
        inputFormat="dd/MM/yyyy"
        autoComplete="off"
        value={ptpsDatumKontrolisao}
        onChange={(newValue) => {
          setPtpsDatumKontrolisao(newValue);
        }}
        renderInput={(params) => <TextField variant="filled" {...params} />}
      />
      </FormControl>    
    </Grid>
    {/* treci red */}
    <Grid container className="half-wdth">  
      <TextField 
        fullWidth 
        id="odobrio-ime-prezime" 
        label="Одобрава" 
        variant="outlined" 
        value={odobrioImePrezime}     
        onChange={(e) => {
          let input = e.target.value
          let array = input.split(',')
          array.forEach((item, i) => {
            array[i] = item.replace(/^[^a-zA-Z0-9]*|[^a-zA-Z0-9]*$/g, '')
          })
          setOdobrioImePrezime(array)
        }}
      />     
    </Grid>
    <Grid container className="half-wdth">  
      <FormControl
        // error={Boolean(userProfileError.name)}
        fullWidth
        variant="filled"
        sx={{ 
          ...inputSpacing, 
        '& > div > div': {
          backgroundColor: "transparent !important",
        },
        '& > div > div::before': {
          borderBottomColor: "#3AD1E8 !important",
        },
        '& > div > div::after': {
          borderBottomColor: "#3AD1E8 !important",
        }
        }}  
      >
      <DatePicker
        
        label="Датум"
        inputFormat="dd/MM/yyyy"
        autoComplete="off"
        value={ptpsDatumOdobrio}
        onChange={(newValue) => {
          setPtpsDatumOdobrio(newValue);
        }}
        renderInput={(params) => <TextField variant="filled" {...params} />}
        />
      </FormControl>
    </Grid>
  </Grid>
  )
}

export default UpdatePotpis
