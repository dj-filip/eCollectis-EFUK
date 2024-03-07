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
import { getProcedure } from 'services/fuk-procedura.services'
import { ButtonGroup } from '@mui/material';


const ViewProcess7 = (props) => {
  const navigate = useNavigate();
  const {
    oblastId,
    imeOblasti,
    procesId,
    procedure,
    imeProcesa
  } = props;
 
  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h8.fontSize', 
    textAlign: 'center'
  };

  return (
    <Grid container direction="column"  className="opacity-txt-box">
      <Typography variant="h4" >Циљ пословног процеса</Typography>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
        sx={{
          alignItems: "flex-start",
          gap: "10px",
        }}
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
        
      </ButtonGroup>
  </Grid>
  )
}

export default ViewProcess7