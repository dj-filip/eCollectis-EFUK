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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { getOrganizacioneJedinice } from 'services/fuk-organizaciona-jedinica.services'

const AddProcess1 = (props) => {  
  const { 
    opstina,
    imeOblasti, 
    setOrganizacijaId,
    organizacionaJedinicaName,
    setOrganizacionaJedinicaName,
    setOrganizacionaJedinicaId,
    setSifraProcesa, 
    setNazivProcesa, 
    setVerzijaProcesa, 
    setRukovodilacOrganizacioneJedinice, 
    setNosilacPoslovnogProcesa  
  } = props

  const [listOptionsIdAndName, setListOptionsIdAndName] = useState([]);


  useEffect(() => {
    (async () => {
      const res = await getOrganizacioneJedinice();
      
      let list = []
      for (let i = 0; i < res.data.data.length; i++) {
        list.push({ key: res.data.data[i].orgj_id, name: res.data.data[i].orgj_naziv })
      }

      setListOptionsIdAndName(list)
    })();
  }, []);

  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h8.fontSize', 
    textAlign: 'center'
  };

  return (
    <Grid container className="input-box" sx={{
      gap: "20px 40px",
    }}>
      {/* prvi red */}
      <Grid container className="half-wdth" sx={{
        "& > div": {
          width: "100%",
        },
      }}>  
        <FormControl sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          "& > div > div": {
            padding: "10px 0",
          },
        }} size="medium">
          <InputLabel id="dropdown-select-medium">Организациона јединица</InputLabel>
          <Select
            labelId="dropdown-select-medium"
            id="dropdown-select"
            value={organizacionaJedinicaName}
            label="Организациона јединица"
            onChange={(event) => {      
              const name = event.target.value;
              const element = listOptionsIdAndName.find((item) => {
                return item.name === name
              });
              const key = element.key
              if (key > 0) {
                setOrganizacionaJedinicaId(key)
                setOrganizacionaJedinicaName(name)
              }
            }}
          >
            <MenuItem key="0" value="Одаберите">
              <em>Одаберите</em>
            </MenuItem>
            {listOptionsIdAndName.map((item) => (
                <MenuItem key={item.key} value={item.name} >
                  {item.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid container className="half-wdth">  
          <TextField 
            fullWidth id="sifraProcesa" 
            label="Шифра процеса" 
            variant="outlined" 
            onChange={(e) => {
              setSifraProcesa(e.target.value)
            }}
          />    
      </Grid>
      {/* drugi red */}
      <Grid container className="half-wdth">  
          <TextField 
            fullWidth id="rukovodilacOrganizacioneJedinice" 
            label="Руководилац организационе јединице" 
            variant="outlined" 
            onChange={(e) => {
              setRukovodilacOrganizacioneJedinice(e.target.value)
            }}
          />    
      </Grid>
      <Grid container className="half-wdth">  
          <TextField 
            fullWidth 
            id="verzijaProcesa" 
            label="Верзија"                  
            variant="outlined" 
            onChange={(e) => {
              setVerzijaProcesa(e.target.value)
            }}
          />    
      </Grid>
      {/* treci red */}
      <Grid container>  
          <TextField 
            fullWidth 
            id="nazivProcesa" 
            label="Назив пословног процеса" 
            variant="outlined" 
            onChange={(e) => {
              setNazivProcesa(e.target.value)
            }}
          />    
      </Grid>
      {/* cetvrti red */}
      <Grid container>  
          <TextField 
            fullWidth 
            id="nosilacPoslovnogProcesa" 
            label="Носилац пословног процеса (одговорно лице)" 
            variant="outlined" 
            onChange={(e) => {
              setNosilacPoslovnogProcesa(e.target.value)
            }}
          />    
      </Grid>
  </Grid>
  )
}

export default AddProcess1