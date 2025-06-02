import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import DatePicker from "@mui/lab/DatePicker";

const AddPotpis = (props) => {
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
<Grid container className="input-box">
      {/* prvi red */}
      <Grid container className="half-wdth">  
        <TextField 
          fullWidth 
          id="izradio-ime-prezime" 
          label="Контролише" 
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

export default AddPotpis