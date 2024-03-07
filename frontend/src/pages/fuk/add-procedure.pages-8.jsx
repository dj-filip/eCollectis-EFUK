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
import FormControl from "@mui/material/FormControl";
import DatePicker from "@mui/lab/DatePicker";

const AddProcedure8 = (props) => {
  const {
    ptpsDatumIzradio,
    setPtpsDatumIzradio,
    ptpsDatumKontrolisao,
    setPtpsDatumKontrolisao,
    ptpsDatumOdobrio,
    setPtpsDatumOdobrio,
    setIzradioImePrezime,
    setKontrolisaoImePrezime,
    setOdobrioImePrezime
  } = props


  const inputSpacing = { marginBottom: 3 };
  
  return (
    <Grid container spacing={2}>
    
      <Grid item xs={2}>
          Израдио:
      </Grid>
      <Grid item xs={7}>
          <TextField 
            fullWidth 
            id="izradio-ime-prezime" 
            label="Име и презиме" 
            variant="outlined"
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
      <Grid item xs={3}>
        <FormControl
          // error={Boolean(userProfileError.name)}
          fullWidth
          variant="filled"
          sx={{ ...inputSpacing }}
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

      <Grid item xs={2}>
          Контролисао:
      </Grid>
      <Grid item xs={7}>
          <TextField 
            fullWidth 
            id="kontrolisao-ime-prezime" 
            label="Име и презиме" 
            variant="outlined" 
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
      <Grid item xs={3}>
        <FormControl
          // error={Boolean(userProfileError.name)}
          fullWidth
          variant="filled"
          sx={{ ...inputSpacing }}
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

      <Grid item xs={2}>
          Одобрио:
      </Grid>
      <Grid item xs={7}>
          <TextField 
            fullWidth 
            id="odobrio-ime-prezime" 
            label="Име и презиме" 
            variant="outlined"      
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
      <Grid item xs={3}>
        <FormControl
          // error={Boolean(userProfileError.name)}
          fullWidth
          variant="filled"
          sx={{ ...inputSpacing }}
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

export default AddProcedure8