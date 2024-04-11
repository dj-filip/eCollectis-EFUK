import {
    Grid, 
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem
  } from '@mui/material';
import { StyledBox } from 'components/styled/StyledBox';
import { StyledPaper } from 'components/styled/StyledPaper';
import { useState, useEffect } from 'react';

import { getOrganizacioneJedinice } from 'services/fuk-organizaciona-jedinica.services'


const ProcInputGrid = (props) => {
  
  const { 
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

  return (
    <StyledPaper>
      <StyledBox paddingTop="30px !important">
        <Grid container spacing={4}>
          <Grid item xs={6} alignSelf="flex-end">
            <FormControl 
              fullWidth
              variant="standard"
              size="medium">
                <InputLabel id="dropdown-select-medium" shrink>Организациона јединица</InputLabel>
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
                  <MenuItem key={item.key} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              multiline  
              id="sifraProcesa"
              label="Шифра процеса" 
              placeholder="Upisite ovde..."
              onChange={(e) => {
                setSifraProcesa(e.target.value)
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              multiline  
              id="rukovodilacOrganizacioneJedinice"
              label="Руководилац организационе јединице" 
              placeholder="Upisite ovde..."
              onChange={(e) => {
                setRukovodilacOrganizacioneJedinice(e.target.value)
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              multiline  
              id="verzijaProcesa"
              label="Верзија" 
              placeholder="Upisite ovde..."
              onChange={(e) => {
                setVerzijaProcesa(e.target.value)
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline  
              id="nazivProcesa"
              label="Назив пословног процеса" 
              placeholder="Upisite ovde..."
              onChange={(e) => {
                setNazivProcesa(e.target.value)
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline  
              id="nosilacPoslovnogProcesa"
              label="Носилац пословног процеса (одговорно лице)" 
              placeholder="Upisite ovde..."
              onChange={(e) => {
                setNosilacPoslovnogProcesa(e.target.value)
              }}
            />
          </Grid>
        </Grid>
      </StyledBox>
  </StyledPaper>
  )
}

export default ProcInputGrid;