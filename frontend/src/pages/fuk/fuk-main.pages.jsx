import { 
  Box, 
  Typography, 
  Grid, 
} from '@mui/material';

// redux
import { useSelector } from 'react-redux';

// components
import Accordion from 'components/accordion/accordion.components';


const FukMain = () => {

  const test = useSelector((state) => state.test.initTest);
  
  // ime opstine
  const opstina = process.env.REACT_APP_OPSTINA
  console.log("OPSTINA: " + opstina);

  

  const formContainer = {
    width: "100%",
    maxWidth: "80%",
    margin: "auto",
    padding: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const inputSpacing = { margin: 3 };

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
      <Box sx={{
        paddingBottom: "50px",
      }}>
        <Typography variant='h2' className='txt-blue'>
          {opstina}
        </Typography>
      </Box>
      <Accordion />
    </Grid>
  )
}

export default FukMain