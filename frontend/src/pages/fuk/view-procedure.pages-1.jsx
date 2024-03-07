import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const ViewProcedure1 = (props) => {
  const {
    organizacionaJedinica,
    sifraProcesa,
    rukovodilac,
    nosilac,
    verzija
  } = props;


  return (
  <Grid container sx={{
    width: "100%",
    backgroundColor: "transparent !important",
  }}>
    <Grid constainer>      
      <Grid container className="pregled-procedure-grid" sx={{
        display: "grid",
        gridTemplateColumns: "repeat(9, 1fr)",
        gridTemplateTows: "repeat(4, 1fr)",
        gridColumnGap: "1px",
        gridRowGap: "1px",
        gap: "1px",
        "& > div": {
          display: "flex",
          alignItems: "center",
          padding: "40px",
          fontSize: "24px",
        },
      }}>
        {/* prvi red */}
        <Grid item sx={{
          gridArea: "1 / 1 / 2 / 4",
        }}> 
          <Typography variant="h4">Организациона јединица</Typography> 
        </Grid>
        <Grid item sx={{
          gridArea: "1 / 4 / 2 / 8",
        }}>  
          <Typography variant="h3">{organizacionaJedinica}</Typography> 
        </Grid>
        <Grid item sx={{
          gridArea: "1 / 8 / 2 / 9",
        }}>  
          <Typography variant="h4">Шифра процеса</Typography> 
        </Grid>
        <Grid item sx={{
          gridArea: "1 / 9 / 2 / 10",
        }}>  
          <Typography variant="h3">{sifraProcesa}</Typography> 
        </Grid>
        {/* drugi red */}
        <Grid item sx={{
          gridArea: "2 / 1 / 3 / 4",
        }}>  
          <Typography variant="h4">Шифра организационе јединице</Typography> 
        </Grid>
        <Grid item sx={{
          gridArea: "2 / 4 / 3 / 8",
        }}>  
          <Typography variant="h3"></Typography> 
        </Grid>
        <Grid item sx={{
          gridArea: "2 / 8 / 3 / 9",
        }}>  
          <Typography variant="h4">Верзија</Typography> 
        </Grid>
        <Grid item sx={{
          gridArea: "2 / 9 / 3 / 10",
        }}>  
          <Typography variant="h3">{verzija}</Typography> 
        </Grid>
        {/* treci red */}
        <Grid item sx={{
          gridArea: "3 / 1 / 4 / 4",
        }}>  
          <Typography variant="h4">Руководилац организационе јединице</Typography> 
        </Grid>
        <Grid item sx={{
          gridArea: "3 / 4 / 4 / 10",
        }}>  
          <Typography variant="h3">{rukovodilac}</Typography> 
        </Grid>
        {/* cetvrti red */}
        <Grid item sx={{
          gridArea: "4 / 1 / 5 / 4",
        }}>  
          <Typography variant="h4">Носилац пословног процеса</Typography> 
        </Grid>
        <Grid item sx={{
          gridArea: "4 / 4 / 5 / 10",
        }}>  
          <Typography variant="h3">{nosilac}</Typography> 
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  )
}

export default ViewProcedure1