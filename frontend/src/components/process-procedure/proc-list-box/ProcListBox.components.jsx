import { Button, ButtonGroup, Divider, Stack, Typography } from "@mui/material";
import { StyledBox } from "components/styled/StyledBox";
import { StyledPaper } from "components/styled/StyledPaper";
import { useNavigate } from "react-router-dom";


const ProcListBox = ({ proceduresListData }) => {
  const navigate = useNavigate();
 
  const oblastId = proceduresListData.oblastId;
  const imeOblasti = proceduresListData.imeOblasti;
  const procesId = proceduresListData.procesId;
  const imeProcesa = proceduresListData.imeProcesa;
  const procedure = proceduresListData.procedure;


  return (
    <StyledPaper>
      <StyledBox>
        <Typography variant="h4" marginBottom="15px">Циљ пословног процеса</Typography>
        <Divider />
        <Stack
          alignItems="flex-start"
          marginTop="25px"
        >
          {procedure?.map(({id, naziv}) => {
            return (<Button onClick={() => {
                navigate(`/fuk/pregled-procedure/`, { state : { 
                  oblastId, 
                  imeOblasti, 
                  procesId, 
                  imeProcesa, 
                  proceduraId: id }})
              }}
              sx={{
                border: "1px solid #3AD1E8 !important",
                borderRadius: "20px !important",
                padding: "5px 20px",
                backgroundColor: "#3AD1E826",
                padding: "5px 20px",
                color: "#FFF",
                fontSize: "24px",
                fontWeight: "300",
                lineHeight: "32px",
                textTransform: "none",
                '@media (max-width: 1920px)': {
                  fontSize: "18px", 
                }
              }}
              >{naziv}</Button>);
          })}
        </Stack>
      </StyledBox>
    </StyledPaper>
  )
}

export default ProcListBox;