import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Divider from '@mui/material/Divider';
import Item from 'components/grid/item/item.components'
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FormControl from "@mui/material/FormControl";
import DatePicker from "@mui/lab/DatePicker";
import Link from '@mui/material/Link';

import { useNavigate, useLocation, useParams } from 'react-router-dom';
import LocalizedDatePicker from 'components/localization/localized-date-picker.components';

import { getProces } from 'services/fuk-proces.services'


const ViewProcess1 = (props) => {
  const { 
    organizacija,
    sifraProcesa,
    rukovodilacOrganizacioneJedinice,
    verzijaProcesa,
    nazivProcesa,
    nosilacPoslovnogProcesa
  } = props;
 
  return (
  <Grid container sx={{
    width: "100%",
    backgroundColor: "transparent !important",
  }}>
    <Grid constainer>      
      <Grid container className="pregled-procesa-grid" sx={{
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
          <Typography variant="h3">{organizacija}</Typography> 
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
          <Typography variant="h3">{verzijaProcesa}</Typography> 
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
          <Typography variant="h3">{rukovodilacOrganizacioneJedinice}</Typography> 
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
          <Typography variant="h3">{nosilacPoslovnogProcesa}</Typography> 
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  )
}

export default ViewProcess1