import { useNavigate, Link } from "react-router-dom";
// mui
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

import Logo from "assets/electus_logo.png";
import Image from "mui-image";

const HarmonizationUnit = () => {
  const navigate = useNavigate();

  const buttonsContainer = {
    margin: "auto",
    padding: 4,
    display: "flex",
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Grid container sx={{ 
      width: "100%",      
      maxWidth: "1760px",
      justifyContent: "center",
      marginRight: "200px",
      paddingTop: "250px"
    }}>
    {/* <Image src={Logo} alt="Logo" height={500} duration={0} /> */}

    <Box>
      <Typography align="center">ИДИТЕ НА:</Typography>
      <Button variant="outlined" size="large" href="https://mfin.gov.rs/o-ministarstvu/sektor-centralna-jedinica-za-harmonizaciju" target="_blank" sx={{
        marginTop: "20px",
        color: "#3AD1E8",
        borderColor: "#3AD1E8",
        '&:hover': {
          borderColor: "#3AD1E8",
          color: "#fff",
        }
      }}>
        Централна јединица за хармонизацију
      </Button>
    </Box>
    </Grid>
  );
};

export default HarmonizationUnit;
