import Divider from '@mui/material/Divider';
import { Box, Grid, Link as RefLink, Stack } from "@mui/material";
import AllPages from "components/pdf/all-pages";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'mui-image';

// assets
import DownloadIcon from 'assets/icons/download-icon.svg';



const IndexOfProcesses = (props) => {
  const pdf = props.pdf

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
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "50px",
          borderBottom: "1px solid #0A1423",
        }}>
          <Typography variant='h2' className='txt-blue'>Попис процеса</Typography>
      <Stack>
        <Button component={Link} to={pdf} target="_blank" sx={{
          padding: "0",
        }}><Image src={DownloadIcon} sx={{
          width: "40px",
          height: "40px",
          '@media (max-width: 1920px)': {
            width: "32px !important",
            height: "32px !important",
          }
        }}></Image></Button>
      </Stack>
      </Box>
      <Box sx={{
        paddingTop: "40px",
      }}>
        <AllPages pdf={pdf} />
      </Box>
    </Grid>
  );
}

export default IndexOfProcesses