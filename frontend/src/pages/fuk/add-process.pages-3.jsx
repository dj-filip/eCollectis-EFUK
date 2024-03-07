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

import { useNavigate, useLocation } from 'react-router-dom';
import LocalizedDatePicker from 'components/localization/localized-date-picker.components';


import { postProces } from 'services/fuk-proces.services'
import { postPotpis } from 'services/fuk-potpis.services'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const AddProcess3 = (props) => {
  const {
    glavniRizici,
    setGlavniRizici
  } = props;

  const [rizik, setRizik] = useState(null);
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {}, [refreshData])

  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h8.fontSize', 
    textAlign: 'center'
  };

  return (
      <Grid container direction="column"  className="opacity-txt-box">
        <TextField  
          id="rizik" 
          label="Ризик" 
          variant="outlined" 
          onChange={(e) => {
            setRizik(e.target.value)
          }}
        />
        <Button 
          variant="contained"
          onClick={() => { 
            let tempArr = glavniRizici;
            tempArr.push(rizik);
            setGlavniRizici(tempArr)
            setRefreshData(!refreshData)
        }}
        sx={{
          width: "250px",
          alignSelf: "flex-end",
          marginTop: "35px !important",
          paddingY: "10px",
          backgroundColor: "#3AD1E8",
          borderRadius: "5px",
          color: "#0A1423",
          lineHeight: "21px",
          '@media (max-width: 1920px)': {
            width: "235px",
            fontSize: "14px", 
          }
        }}>Додај ризик</Button>
        <Typography>Додати ризици:</Typography>
        <List component="rizici-lista">
          {glavniRizici?.map((item, i) => 
              (<ListItem key={i}>
                <Typography sx={{ align:"left", width:"90%" }}>{item}</Typography>
                <Button variant="contained" sx={{ align:"right", backgroundColor: "#ff6f61" }}
                  onClick={() => {
                    glavniRizici.splice(i, 1)
                    setRefreshData(!refreshData)
                  }}>Обриши</Button>
              </ListItem>)
              )}
        </List>  
    </Grid>
  )
}

export default AddProcess3