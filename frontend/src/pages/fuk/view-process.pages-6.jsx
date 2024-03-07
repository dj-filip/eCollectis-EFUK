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


const ViewProcess6 = (props) => {
  const {
    resursiZaOstvarivanjePoslovnogProcesa
  } = props;

  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h8.fontSize', 
    textAlign: 'center'
  };
 
  return (
    <Grid container direction="column"  className="opacity-txt-box">
      <Typography variant="h4">Ресурси потребни за реализацију процеса</Typography>
      <Typography variant="h3">{resursiZaOstvarivanjePoslovnogProcesa}</Typography>
    </Grid>
  )
}

export default ViewProcess6