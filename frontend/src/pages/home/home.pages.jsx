import { useNavigate, Link } from "react-router-dom";
// mui
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Logo from "assets/electus_logo.png";
import Image from "mui-image";

const Home = () => {
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
      marginRight: "200px",
      paddingTop: "50px",
      '@media (max-width: 1920px)': {
        maxWidth: "1400px",
      }
    }}>

    <Box
    sx={{
       backgroundImage: "url(" + Logo + ")",
       backgroundRepeat: "no-repeat",
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       height: '400px',
       ...buttonsContainer }}>
      <Button variant="contained" size="large" href="/fuk/glavna">
        <b>ФУК</b>
      </Button>
      <Button variant="contained" size="large" href="mailto:webmaster@example.com">
        <b>Контактирајте нас</b>
      </Button>
    </Box>
    </Grid>
  );
};

export default Home;
