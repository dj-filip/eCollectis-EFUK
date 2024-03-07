import { useNavigate } from "react-router-dom";
// mui
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";


const gFukLink = process.env.REACT_APP_GFUK_LINK;


const GfukForm = () => {


  return (
    <Grid container sx={{ 
      width: "100%",      
      maxWidth: "1760px",
      justifyContent: "center",
      marginRight: "200px",
      paddingTop: "250px"
    }}>
    <Box>
      <Typography align="center">ИДИТЕ НА:</Typography>
      <Button variant="outlined" size="large" href={gFukLink} target="_blank" sx={{
        marginTop: "20px",
        color: "#3AD1E8",
        borderColor: "#3AD1E8",
        '&:hover': {
          borderColor: "#3AD1E8",
          color: "#fff",
        }
      }}>
        Г ФУК
      </Button>
    </Box>
    </Grid>
  );
};

export default GfukForm;
