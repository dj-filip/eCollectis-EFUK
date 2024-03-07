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
import Image from 'mui-image';


import { useNavigate, useLocation } from 'react-router-dom';
import LocalizedDatePicker from 'components/localization/localized-date-picker.components';


import { getProces } from 'services/fuk-proces.services'
import { getRiziciByProcessId } from 'services/fuk-rizik.services'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem } from '@mui/material';


// assets
import EditIcon from 'assets/assets/icons/edit-icon-2.svg';
import AddIcon from 'assets/assets/icons/add-icon.svg';

const AddProcess3 = (props) => {
  const {
    procesId,
    glavniRizici,
    setGlavniRizici,
    setGlavniRiziciIds,
    dodatiRizici,
    glavniRiziciView,
    setGlavniRiziciView
  } = props;
  
  const [openAddRizik, setOpenAddRizik] = useState(false);

  const [openEditRizik, setOpenEditRizik] = useState(false);
  const [index, setIndex] = useState(1);
  const [rizik, setRizik] = useState("");


  const resetValues = () => {
    setIndex(1);
    setRizik("");
  }

    // edit rizik
  const handleClickOpenEditRizik = (i) => {
    setIndex(i)
    setOpenEditRizik(true);
  };

  const handleCloseEditRizik = () => {
    resetValues();
    setOpenEditRizik(false);
  };

  const handleSubmitEditRizik = () => {
    glavniRizici[index] = rizik;
    glavniRiziciView[index] = rizik;

    resetValues();
    setOpenEditRizik(false);
  };


  // add rizik
  const handleClickOpenAddRizik = () => {
    setOpenAddRizik(true);

  };

  const handleCloseAddRizik = () => {
    resetValues();
    setOpenAddRizik(false);
  };

  const handleSubmitAddRizik = () => {
    dodatiRizici.push(rizik);
    glavniRiziciView.push(rizik);


    resetValues();
    setOpenAddRizik(false);
  };


  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h8.fontSize', 
    textAlign: 'center'
  };

  return (
    <Grid container direction="column" className="opacity-txt-box">
      <Typography variant="h4" sx={{
        borderBottom: "none !important",
      }}>Главни ризици</Typography>
      <List component="rizici-lista">
      {glavniRiziciView?.map((item, i) => 
        (<ListItem key={i} sx={{
          padding: "0",
        }}>
          <Typography variant="h3" sx={{ align:"left", width:"100%" }}>{item}</Typography>
          <Button
            onClick={() => handleClickOpenEditRizik(i)}
            sx={{
              justifyContent: "flex-end",
              padding: "0",
            }}>
            <Image src={EditIcon} width={40} height={40}></Image>
          </Button>
        </ListItem>)
      )}
      </List>
      <Button variant="contained" sx={{ 
          width: "fit-content",
          justifyContent: "flex-end",
          alignSelf: "flex-end",
          gap: "10px",
          marginTop: "30px",
          backgroundColor: "#3AD1E8",
          borderRadius: "5px",
          boxShadow: "none",
          '&:focus':{
            backgroundColor:"#3AD1E8",
          },
          fontSize: "18px",
          '@media (max-width: 1920px)': {
            fontSize: "14px", 
          }
        }} 
        onClick={() => handleClickOpenAddRizik()}>
          Додавање ризика<Image src={AddIcon} className={"edit-btn-img"} width={"18px"} height={"18px"}></Image>
        </Button>
      <Dialog open={openAddRizik} onClose={handleCloseAddRizik}>
        <DialogTitle>Додавање ризика</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Унесите назив новог ризика
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="rizik"
            label="Ризик"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setRizik(e.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddRizik}>Откажи</Button>
          <Button onClick={handleSubmitAddRizik}>Потврди</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openEditRizik} onClose={handleCloseEditRizik}>
        <DialogTitle>Измена ризика</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Унесите нови назив за одабрани ризик
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="rizik"
            label="Ризик"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setRizik(e.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditRizik}>Откажи</Button>
          <Button onClick={handleSubmitEditRizik}>Потврди</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

export default AddProcess3