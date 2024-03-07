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
import ButtonGroup from '@mui/material/ButtonGroup';

import { useNavigate, useLocation, useParams } from 'react-router-dom';
import LocalizedDatePicker from 'components/localization/localized-date-picker.components';

import { getProcesi } from 'services/fuk-proces.services'


const ViewProcess5 = (props) => {
  const {
    vezaSaDrugimProcesima
  } = props; 
  
  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h8.fontSize', 
    textAlign: 'center'
  };

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

  const inputSpacing = { marginBottom: 3 };
 
  return (
    <Grid container direction="column"  className="opacity-txt-box">
    <Typography variant="h4" >Везе са другим процесима</Typography>
    <Typography variant="h3">{vezaSaDrugimProcesima}</Typography>
  </Grid>
  )
}

export default ViewProcess5