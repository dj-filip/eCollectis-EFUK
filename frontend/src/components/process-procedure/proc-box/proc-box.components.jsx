import { 
  Typography,
  Stack,
  Divider
} from "@mui/material";
import { StyledBox } from "components/styled/StyledBox";
import { StyledPaper } from "components/styled/StyledPaper";


const ProcBox = ({ title, content, procDesc,  }) => {
  let steps;
  let procDescFull;

  if (procDesc) {
    steps = ['УЛАЗ', 'АКТИВНОСТИ', 'ИЗЛАЗ'];
    procDescFull = steps.reduce((acc, val, ind) => {
        acc[val] = procDesc[ind];
        return acc;
      }, {});
  }

  return (
    <StyledPaper>
      <StyledBox>
        <Typography variant="h3" marginBottom="15px">{title}</Typography>
        
        <Divider />

        {procDescFull && (
          <Stack spacing={4} marginTop="25px">
            {Object.entries(procDescFull)?.map(([step, desc]) => (
                <Typography variant="h4">{step}: {desc}</Typography>
            ))}
          </Stack>
        )}

        {typeof content !== "string" ?
          <Stack marginTop="25px">
            {content?.map((contentItem) => (
                <Typography variant="h4">{contentItem}</Typography>
              ))}
          </Stack>
          : <Typography variant="h4" marginTop="25px">{content}</Typography>}
          
      </StyledBox>
    </StyledPaper>
    )
}

export default ProcBox;