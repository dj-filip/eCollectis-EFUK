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
    procedura,
    organizacionaJedinicaName,
    setOrganizacionaJedinicaName,
    setOrganizacionaJedinicaId,
    setSifraProc,
    setNazivProc,
    setVerzijaProc,
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
            {procedura ? (
              <TextField
                fullWidth
                multiline
                id={"sifraProcedure"}
                label="Шифра процедуре"
                onChange={(e) => {
                  setSifraProc(e.target.value)
                }}
              />
            ) : (
              <TextField
                fullWidth
                multiline
                id="sifraProcesa"
                label="Шифра процеса"
                onChange={(e) => {
                  setSifraProc(e.target.value)
                }}
              />
            )}
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              multiline
              id="rukovodilacOrganizacioneJedinice"
              label="Руководилац организационе јединице"
              onChange={(e) => {
                setRukovodilacOrganizacioneJedinice(e.target.value)
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              multiline
              id={procedura? "verzijaProcedure" : "verzijaProcesa"}
              label="Верзија"
              onChange={(e) => {
                setVerzijaProc(e.target.value)
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              id={procedura? "nazivProcedure" : "nazivProcesa"}
              label={procedura? "Назив процедуре" : "Назив пословног процеса"}
              onChange={(e) => {
                setNazivProc(e.target.value)
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              id="nosilacPoslovnogProcesa"
              label="Носилац пословног процеса (одговорно лице)"
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