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
import { getPotpisiByDocumentIdAndType } from 'services/fuk-potpis.services'


const ViewProcess8 = (props) => {
  const {
    izradio,
    kontrolisao,
    odobrio
  } = props;

const tableDataStyle = {
  fontSize: "24px",
  fontWeight: "300",
  lineHeight: "32px",
  '@media (max-width: 1920px)': {
    fontSize: "18px", 
  }
}

const tableHeaderStyle = {
  fontSize: "18px",
  fontWeight: "500",
  textTransform: "uppercase",
  color: "#3AD1E8",
  '@media (max-width: 1920px)': {
    fontSize: "16px", 
  }
}

  return (
    <Grid container sx={{
      gap: "1px",
      backgroundColor: "transparent !important",
      "& > div": {
        flex: "1 1 23%",
        backgroundColor: "#000A194D",
        padding: "25px 40px",
      }
    }}>
      <Grid></Grid>
      <Grid sx={tableHeaderStyle}>Припрема</Grid>
      <Grid sx={tableHeaderStyle}>Контролише</Grid>
      <Grid sx={tableHeaderStyle}>Одобрава</Grid>
      <Grid sx={tableHeaderStyle}>Име и презиме</Grid>
      <Grid sx={tableDataStyle}>{izradio?.ptps_ime} {izradio?.ptps_prezime}</Grid>
      <Grid sx={tableDataStyle}>{kontrolisao?.ptps_ime} {kontrolisao?.ptps_prezime}</Grid>
      <Grid sx={tableDataStyle}>{odobrio?.ptps_ime} {odobrio?.ptps_prezime}</Grid>
      <Grid sx={tableHeaderStyle}>Поптис</Grid>
      <Grid sx={tableDataStyle}>{izradio?.ptps_ime} {izradio?.ptps_prezime}</Grid>
      <Grid sx={tableDataStyle}>{kontrolisao?.ptps_ime} {kontrolisao?.ptps_prezime}</Grid>
      <Grid sx={tableDataStyle}>{odobrio?.ptps_ime} {odobrio?.ptps_prezime}</Grid>
      <Grid sx={tableHeaderStyle}>Датум</Grid>
      <Grid sx={tableDataStyle}>{izradio?.ptps_datum}</Grid>
      <Grid sx={tableDataStyle}>{kontrolisao?.ptps_datum}</Grid>
      <Grid sx={tableDataStyle}>{odobrio?.ptps_datum}</Grid>
    </Grid>
  )
}

export default ViewProcess8