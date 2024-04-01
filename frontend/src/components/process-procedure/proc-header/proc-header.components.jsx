import { styled, Box, Grid, Stack, Typography } from "@mui/material";
import IconBtn from "components/buttons/icon-btn/IconBtn";
import { useNavigate } from "react-router-dom";


const printLink = process.env.REACT_APP_PRINT_LINK;


const ProcHeader = ({ type, heading, btns, procesId, oblastId, imeOblasti, imeProcesa, proceduraId }) => {
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <Typography variant='h2'>{heading}</Typography>
      </Grid>
      {btns && (
        <Grid item>
          <Stack  direction="row" sx={{ gap: "10px" }}>
            {type == "proces" &&
              btns.map(btn => (
                btn == "edit" ?
                <IconBtn key={btn.id} type={btn} onClick={(e) => {
                  e.stopPropagation();
                    navigate(`/fuk/obrada-procesa/${procesId}`, { state : { oblastId, imeOblasti, procesId, imeProcesa, proceduraId }})
                }}/>
                : btn == "print" ?
                <IconBtn key={btn.id} type={btn} href={`http://${printLink}/print/process/${procesId}`}/>
                : ""
              ))
            }
            {type == "procedure" &&
              btns.map(btn => (
                btn == "edit" ?
                <IconBtn key={btn.id} type={btn} onClick={(e) => {
                  e.stopPropagation();
                    navigate(`/fuk/obrada-procedure/${proceduraId}`, { state : { oblastId, imeOblasti, procesId, imeProcesa, proceduraId }})
                }}/>
                : btn == "print" ?
                <IconBtn key={btn.id} type={btn} href={`http://${printLink}/print/procedure/${proceduraId}`}/>
                : ""
              ))
            }
          </Stack>
        </Grid>
      )}
      
    </Grid>
  )
}

export default ProcHeader;