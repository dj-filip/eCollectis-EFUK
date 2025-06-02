import TextField from '@mui/material/TextField';

import { StyledPaper } from "components/styled/StyledPaper";
import { StyledBox } from "components/styled/StyledBox";



const ProcInputBox = ({ toSet, inputBoxId, label }) => {


  return (
    <StyledPaper>
      <StyledBox paddingTop="30px !important">
        <TextField
          fullWidth
          multiline  
          id={inputBoxId}
          label={label} 
          onChange={(e) => {
            toSet(e.target.value)
          }}
        />
      </StyledBox>
    </StyledPaper>
  )
}

export default ProcInputBox;