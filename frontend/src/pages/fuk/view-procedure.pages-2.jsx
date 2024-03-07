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
import Link from '@mui/material/Link';

import { useNavigate, useLocation } from 'react-router-dom';
import LocalizedDatePicker from 'components/localization/localized-date-picker.components';
import { getProcedura } from 'services/fuk-procedura.services';

const ViewProcedure2 = (props) => {
  const {
    ciljProcedure
  } = props;

  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h8.fontSize', 
    textAlign: 'center'
  };

  return (
  <Grid container direction="column"  className="opacity-txt-box">
    <Typography variant="h4">Сврха и циљ процедуре</Typography>
    <Typography variant="h3">{ciljProcedure}</Typography>
  </Grid>
  )
}

export default ViewProcedure2