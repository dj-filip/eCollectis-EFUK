import {
  Typography,
  Button,
  TextField,
  List,
  ListItem,
  Stack
} from '@mui/material';

import { StyledPaper } from "components/styled/StyledPaper";
import { StyledBox } from "components/styled/StyledBox";
import { useState, useEffect } from 'react';

const ProcRisk = (props) => {
  
  const {
    glavniRizici,
    setGlavniRizici
  } = props;

  const [rizik, setRizik] = useState(null);
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {}, [refreshData]);
  
  return (
    <StyledPaper>
      <StyledBox paddingTop="30px !important">
        <TextField
          fullWidth
          multiline  
          id="rizik"
          label="Ризик" 
          onChange={(e) => {
            setRizik(e.target.value)
          }}
        />
        <Stack direction="row" justifyContent="flex-end">
          <Button 
            variant="btn"
            sx={{
              marginY: "25px",
              justifySelf: "flex-end"
            }}
            onClick={() => { 
              let tempArr = glavniRizici;
              tempArr.push(rizik);
              setGlavniRizici(tempArr)
              setRefreshData(!refreshData)
            }}
          >Додај ризик</Button>
        </Stack>
        <Typography>ДОДАТИ РИЗИЦИ:</Typography>
        <List component="rizici-lista">
          {glavniRizici?.map((item, i) => 
              (<ListItem key={i}>
                <Typography sx={{ align:"left", width:"90%" }}>{item}</Typography>
                <Button variant="btn" sx={{ align:"right", backgroundColor: "#ff6f61" }}
                  onClick={() => {
                    glavniRizici.splice(i, 1)
                    setRefreshData(!refreshData)
                  }}>Обриши</Button>
              </ListItem>)
              )}
        </List>    
      </StyledBox>
    </StyledPaper>
  )
}

export default ProcRisk;