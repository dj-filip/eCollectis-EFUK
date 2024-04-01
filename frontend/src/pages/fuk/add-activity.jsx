import { DatePicker } from '@mui/lab';
import { 
  Button, 
  Checkbox, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  FormControl, 
  FormControlLabel, 
  Grid, 
  InputLabel, 
  NativeSelect, 
  TextField, 
  Typography, 
  Box, 
  Stack 
} from '@mui/material';
import CollapseTable from 'components/collapse-table/collapse-table.components';
import Item from 'components/grid/item/item.components';
import Image from 'mui-image';
import { useState } from 'react';

// assets
import AddIconSrc from 'assets/icons/add-icon.svg';

const AddActivity = (props) => {
  const {
    aktivnosti,
    setAktivnosti
  } = props;
 
  const [akt_naziv, setAktNaziv] = useState(null)
  const [akt_opis, setAktOpis] = useState(null)
  const [akt_pratecidok, setPrateciDok] = useState(null)
  const [akt_odglice, setAktOdgLice] = useState(null)
  const [akt_slika, setAktSlika] = useState(1)
  const [akt_dijagid, setAktDijagId] = useState(1)
  const [akt_rokdat, setAktRokDat] = useState(null)

  const [odabraniBroj, setOdabraniBroj] = useState(1)

  const [openAdd, setOpenAdd] = useState(false);
  const [addToEnd, setAddToEnd] = useState(true);

  const [openUpdate, setOpenUpdate] = useState(false);
  
  const [openDelete, setOpenDelete] = useState(false);
  
  // reset values on close dialog
  const resetValues = () => {
    setAktNaziv(null)
    setAktOpis(null)
    setPrateciDok(null)
    setAktOdgLice(null)
    setAddToEnd(true)
    setOdabraniBroj(1)
    setAktSlika(1)
    setAktDijagId(1)
    setAktRokDat(null)
  };

  // ADD
  const handleAdd = () => {
    setOpenAdd(true);
  };

  const handleAddClose = () => {
    resetValues();
    setOpenAdd(false);
  };

  const handleAddSave = () => {
    // save aktivnosti
    if (addToEnd) {
      const array = aktivnosti;
      const akt_redosled = array.length + 1;
      array.push({ akt_redosled, akt_slika, akt_dijagid, akt_rokdat, akt_naziv, akt_opis, akt_pratecidok, akt_odglice });
      setAktivnosti(array);
    } else {
      const array = aktivnosti;
      const akt_redosled = odabraniBroj;
      array.splice(odabraniBroj - 1, 0, { akt_redosled, akt_slika, akt_dijagid, akt_rokdat, akt_naziv, akt_opis, akt_pratecidok, akt_odglice });
      array.forEach((item, i) => {
        if (i >= odabraniBroj) {
          item.akt_redosled = item.akt_redosled + 1;
        }
      } )
      console.log("nove aktivnosti: ", array)
      setAktivnosti(array);
    }
    resetValues();

    // handleAddClose
    setOpenAdd(false);
  };

  // UPDATE
  const handleUpdate = () => {
    onUpdateChange(odabraniBroj);
    setOpenUpdate(true);
  };

  const handleUpdateClose = () => {
    resetValues();
    setOpenUpdate(false);
  };

  const handleUpdateSave = () => {
    // save aktivnosti
    const array = aktivnosti;
    
    array[odabraniBroj - 1].akt_dijagid = akt_dijagid
    array[odabraniBroj - 1].akt_slika = akt_dijagid
    array[odabraniBroj - 1].akt_rokdat = akt_rokdat
    array[odabraniBroj - 1].akt_naziv = akt_naziv
    array[odabraniBroj - 1].akt_opis = akt_opis
    array[odabraniBroj - 1].akt_pratecidok = akt_pratecidok
    array[odabraniBroj - 1].akt_odglice = akt_odglice
    
    setAktivnosti(array);

    resetValues();

    // handleUpdateClose
    setOpenUpdate(false);
  };

  const onUpdateChange = (broj) => {
    const num = parseInt(broj) - 1
                    
    const aktivnost = aktivnosti[num]

    setAktDijagId(aktivnost.akt_dijagid)
    setAktSlika(aktivnost.akt_dijagid)
    setAktRokDat(aktivnost.akt_rokdat)
    setAktNaziv(aktivnost.akt_naziv)
    setAktOpis(aktivnost.akt_opis)
    setPrateciDok(aktivnost.akt_pratecidok)
    setAktOdgLice(aktivnost.akt_odglice)
  };

  // DELETE
  const handleDelete = () => {
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    resetValues();
    setOpenDelete(false);
  };

  const handleDeleteSave = () => {
    // save aktivnosti  
    console.log("AKTIVNOSTI", aktivnosti, ' odabraniBroj', odabraniBroj)  
    aktivnosti.splice(odabraniBroj - 1, 1);
    console.log("AKTIVNOSTI", aktivnosti)
    for (var i = 0; i < aktivnosti.length; i++) {
      aktivnosti[i].akt_redosled = i + 1;
    }

    setAktivnosti(aktivnosti);

    resetValues();

    // handleDeleteClose
    setOpenDelete(false);
  };

  const getFormattedDate = (date) => {
    const dateObj = new Date(date)
    const formattedDate = [dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate()].join('-');
    return formattedDate;
  }


  const inputSpacing = { marginBottom: 3 };


  const handleEditActivity = (activityId) => {
    setOdabraniBroj(activityId);
    onUpdateChange(activityId);
    setOpenUpdate(true);
  }

  const handleDeleteActivity = (activityId) => {
    setOdabraniBroj(activityId);
    setOpenDelete(true);
  }
  

  return (
    <Grid container sx={{
      backgroundColor: "transparent !important",
    }}>
      <Item>
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            padding: "40px 35px",
            backgroundColor: "#000A194D"
          }}>
              <Typography sx={{
                fontSize: "18px",
                fontWeight: "500",
                textTransform: "uppercase",
                color: "#3AD1E8",
                '@media (max-width: 1920px)': {
                  fontSize: "16px", 
                }
              }}>Активности</Typography>
              <Stack direction="row" sx={{
                gap: "20px",
              }}>
                <Button variant="contained" sx={{ 
                  backgroundColor: "#3AD1E8",
                  borderRadius: "5px",
                  justifyContent: "flex-end",
                  gap: "10px",
                  boxShadow: "none",
                  '&:focus':{
                    backgroundColor:"#3AD1E8",
                  },
                  '@media (max-width: 1920px)': {
                    fontSize: "14px", 
                  }
                }}
                onClick={handleAdd} 
                >
                  Додај нову активност<Image src={AddIconSrc} className={"edit-btn-img"} width={"18px"} height={"18px"}></Image>
                </Button>
              </Stack>
          </Box>
        <CollapseTable data={aktivnosti} handleEditActivityCall={handleEditActivity} handleDeleteActivityCall={handleDeleteActivity}/>
        {/* open ADD */}
        <Dialog open={openAdd} onClose={handleAddClose}>
          <DialogTitle>Додавање нове активности</DialogTitle>
          <DialogContent>
            <FormControlLabel
              value={addToEnd}
              control={<Checkbox defaultChecked />}
              label="Додавање на крај таблице"
              labelPlacement="end"
              onChange={(e) => {
                setAddToEnd(!addToEnd)
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="redni-broj"
              label="Додај на редни број"
              fullWidth
              variant="standard"
              value={odabraniBroj}
              inputProps={{
                step: 1,
                min: 1,
                max: aktivnosti.length + 1,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
              onChange={(e) => {
                setOdabraniBroj(parseInt(e.target.value))
              }}
              disabled={addToEnd}
            />                
            <TextField
              autoFocus
              margin="dense"
              id="aktivnost"
              label="Активност"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setAktNaziv(e.target.value)
              }}
            />
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Слика у дијаграму
              </InputLabel>
              <NativeSelect
                defaultValue={akt_slika}
                inputProps={{
                  name: 'slika',
                  id: 'uncontrolled-native',
                }}
                onChange={(e) => {
                  setAktDijagId(parseInt(e.target.value))
                }}
              >
                <option value={1}>Почетак</option>
                <option value={2}>Контрола</option>
                <option value={3}>Задатак</option>
                <option value={4}>Крај</option>
              </NativeSelect>
            </FormControl>
            <FormControl
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <DatePicker
                label="Датум"
                inputFormat="dd/MM/yyyy"
                autoComplete="off"
                value={akt_rokdat}
                onChange={(newValue) => {
                  setAktRokDat(getFormattedDate(newValue));
                }}
                renderInput={(params) => <TextField variant="filled" {...params} />}
              />
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="opis"
              label="Опис"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setAktOpis(e.target.value)
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="ul-dokumenti"
              label="Пратећи документи"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setPrateciDok(e.target.value)
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="od-lice"
              label="Одговорно лице"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setAktOdgLice(e.target.value)
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAddClose}>Откажи</Button>
            <Button onClick={handleAddSave}>Потврди</Button>
          </DialogActions>
        </Dialog>
        {/* open UPDATE */}
        <Dialog open={openUpdate} onClose={handleUpdateClose}>
          <DialogTitle>Промена активности</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="redni-broj"
              label="Редни број"
              fullWidth
              variant="standard"
              InputLabelProps={{ shrink: true }} 
              value={odabraniBroj}
              inputProps={{
                step: 1,
                min: 1,
                max: aktivnosti.length,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
              onChange={(e) => {
                setOdabraniBroj(parseInt(e.target.value))
                onUpdateChange(parseInt(e.target.value))
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="aktivnost"
              label="Активност"
              InputLabelProps={{ shrink: true }} 
              value={akt_naziv}
              fullWidth
              variant="standard"
              onChange={(e) => {
                setAktNaziv(e.target.value)
              }}
            />
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Слика у дијаграму
              </InputLabel>
              <NativeSelect
                defaultValue={akt_slika}
                inputProps={{
                  name: 'slika',
                  id: 'uncontrolled-native',
                }}
                onChange={(e) => {
                  setAktDijagId(parseInt(e.target.value))
                }}
              >
                <option value={1}>Почетак</option>
                <option value={2}>Контрола</option>
                <option value={3}>Задатак</option>
                <option value={4}>Крај</option>
              </NativeSelect>
            </FormControl>
            <FormControl
              fullWidth
              variant="filled"
              sx={{ ...inputSpacing }}
            >
              <DatePicker
                label="Датум"
                inputFormat="dd/MM/yyyy"
                autoComplete="off"
                value={akt_rokdat}
                onChange={(newValue) => {
                  setAktRokDat(getFormattedDate(newValue));
                }}
                renderInput={(params) => <TextField variant="filled" {...params} />}
              />
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="opis"
              label="Опис"
              InputLabelProps={{ shrink: true }} 
              value={akt_opis}
              fullWidth
              variant="standard"
              onChange={(e) => {
                setAktOpis(e.target.value)
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="ul-dokumenti"
              label="Пратећи документи"
              InputLabelProps={{ shrink: true }} 
              value={akt_pratecidok}
              fullWidth
              variant="standard"
              onChange={(e) => {
                setPrateciDok(e.target.value)
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="od-lice"
              label="Одговорно лице"
              InputLabelProps={{ shrink: true }} 
              value={akt_odglice}
              fullWidth
              variant="standard"
              onChange={(e) => {
                setAktOdgLice(e.target.value)
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleUpdateClose}>Откажи</Button>
            <Button onClick={handleUpdateSave}>Потврди</Button>
          </DialogActions>
        </Dialog>
        {/* open DELETE */}
        <Dialog open={openDelete} onClose={handleDeleteClose}>
          <DialogTitle>Брисање активности</DialogTitle>
          <DialogContent>
              Да ли сте сигурни да желите да избришете активност?
              <TextField
              autoFocus
              margin="dense"
              id="redni-broj"
              label="Редни број"
              fullWidth
              variant="standard"
              value={odabraniBroj}
              inputProps={{
                step: 1,
                min: 1,
                max: aktivnosti.length,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
              disabled={aktivnosti.length === 0}
              onChange={(e) => {
                setOdabraniBroj(parseInt(e.target.value))
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteClose}>Откажи</Button>
            <Button onClick={handleDeleteSave}>Потврди</Button>
          </DialogActions>
        </Dialog>
      </Item>
    </Grid>
  )
}

export default AddActivity