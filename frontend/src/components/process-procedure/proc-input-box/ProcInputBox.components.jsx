import { StyledPaper } from "components/styled/StyledPaper";
import TextField from '@mui/material/TextField';
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
          placeholder="Upisite ovde..."
          onChange={(e) => {
            toSet(e.target.value)
          }}
        /> 
      </StyledBox>
    </StyledPaper>
  )
}

export default ProcInputBox;