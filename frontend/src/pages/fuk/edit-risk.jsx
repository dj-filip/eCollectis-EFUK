// react
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";

import { useDispatch } from "react-redux";
import { getRizik, patchRizik } from "services/fuk-rizik.services";

const EditRisk = () => {
  const navigate = useNavigate();
  const [firstLoad, setFirstLoad] = useState(true);

  const { id } = useParams();
  const [sifra, setSifra] = useState("");
  const [naziv, setNaziv] = useState("");
  const [ut, setUt] = useState(1);
  const [In, setIn] = useState(1);
  const [st, setSt] = useState(1);
  const [mereOtklanjanja, setMereOtklanjanja] = useState("");
  const [zaduzenaOsoba, setZaduzenaOsoba] = useState("");
  const [datum1Merenja, setDatum1Merenja] = useState(null);
  const [datum2Merenja, setDatum2Merenja] = useState(null);
  const [datum3Merenja, setDatum3Merenja] = useState(null);

  useEffect(() => {
    (async () => {
      if (firstLoad) {
        const res = await getRizik(id);
        const rizikData = res.data.fuk_rizik;
        
        setSifra(rizikData.rsk_sifra)
        setNaziv(rizikData.rsk_naziv)
        setUt(rizikData.rsk_uticaj !== null ? rizikData.rsk_uticaj : ut)
        setSt(rizikData.rsk_efekat !== null ? rizikData.rsk_efekat : st)
        setIn(rizikData.rsk_verovatnoca !== null ? rizikData.rsk_verovatnoca : In)
        setMereOtklanjanja(rizikData.rsk_mere)
        setZaduzenaOsoba(rizikData.rsk_odglice)
        setDatum1Merenja(rizikData.rsk_datum)
        setDatum2Merenja(rizikData.rsk_datumpracenja)
        setDatum3Merenja(rizikData.rsk_datumpracenja2)
      
        setFirstLoad(false)
      }
    })();
  }, []);

  const IsValueValid = (value, name) => {
    if (value === null || isNaN(value) || typeof value !== 'number') {
      alert(`${name} није број!`)
      return false
    } 
    
    return true
  }

  useEffect(() => {
    if (!firstLoad) {
      if (IsValueValid(ut, "Ут") && IsValueValid(st, "Ст")) {
        const num = ut * st
        setIn(num)
      }
    }
  }, [ut, st]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    var inputs = {
      id: id,
      sifra: sifra,
      naziv: naziv,
      ut: ut,
      In: In,
      st: st,
      mereOtklanjanja: mereOtklanjanja,
      zaduzenaOsoba: zaduzenaOsoba,
      datum1Merenja: datum1Merenja,
      datum2Merenja: datum2Merenja,
      datum3Merenja: datum3Merenja
    }
    console.log(sifra)
    const res = await patchRizik(id, inputs);
    navigate("/fuk/registar-rizika");
  };

  const formContainer = {
    width: "100%",
    maxWidth: "400px",
    margin: "auto",
    padding: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const inputSpacing = { marginBottom: 3 };

  const buttonSpacing = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "16px",
  };

  return (
    <Paper elevation={4} sx={{ ...formContainer }}>
      <Typography variant="h4" sx={{ ...inputSpacing }}>
        Ризик
      </Typography>

      <form onSubmit={handleSubmit}>
        <FormControl fullWidth variant="filled" sx={{ ...inputSpacing }}>
          <InputLabel htmlFor="sifra">Шифра</InputLabel>
          <FilledInput
            id="sifra"
            type="text"
            value={sifra}
            onChange={
              (e) => {
                setSifra(e.target.value)
              }
            }
            autoComplete="off"
          />
        </FormControl>
        <FormControl fullWidth variant="filled" sx={{ ...inputSpacing }}>
          <InputLabel htmlFor="naziv">Назив</InputLabel>
          <FilledInput
            id="naziv"
            type="text"
            value={naziv}
            onChange={
              (e) => {
                setNaziv(e.target.value)
              }
            }
            autoComplete="off"
          />
        </FormControl>
        <FormControl fullWidth variant="filled" sx={{ ...inputSpacing }}>
          <InputLabel htmlFor="ut">Ве</InputLabel>
          <FilledInput
            id="ut"
            type="text"
            value={ut}
            inputProps={{
              step: 1,
              min: 1,
              max: 5,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
            onChange={
              (e) => {
                setUt(parseInt(e.target.value))
              }
            }
            autoComplete="off"
          />
        </FormControl>
        <FormControl fullWidth variant="filled" sx={{ ...inputSpacing }}>
          <InputLabel htmlFor="st">Шт</InputLabel>
          <FilledInput
            id="st"
            type="text"
            value={st}
            inputProps={{
              step: 1,
              min: 1,
              max: 5,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
            onChange={
              (e) => {
                setSt(parseInt(e.target.value))
              }
            }
            autoComplete="off"
          />
        </FormControl>
        {/* <Typography variant="h7" component="h7">
          Ин: { (typeof ut === 'number' && typeof In  === 'number') ? ut * In : 0 }
        </Typography> */}
        <FormControl fullWidth variant="filled" sx={{ ...inputSpacing }}>
          <InputLabel htmlFor="in">Ин</InputLabel>
          <FilledInput
            id="in"
            type="text"
            value={In}
            // onChange={
            //   (e) => {
            //     setIn(e.target.value)
            //   }
            // }
            autoComplete="off"
            disabled
          />
        </FormControl>
        <FormControl fullWidth variant="filled" sx={{ ...inputSpacing }}>
          <InputLabel htmlFor="mere">Мере отклањања</InputLabel>
          <FilledInput
            id="mere"
            type="text"
            value={mereOtklanjanja}
            onChange={
              (e) => {
                setMereOtklanjanja(e.target.value)
              }
            }
            autoComplete="off"
          />
        </FormControl>
        <FormControl fullWidth variant="filled" sx={{ ...inputSpacing }}>
          <InputLabel htmlFor="zaduzena-osoba">Задужена особа</InputLabel>
          <FilledInput
            id="zaduzena-osoba"
            type="text"
            value={zaduzenaOsoba}
            onChange={
              (e) => {
                setZaduzenaOsoba(e.target.value)
              }
            }
            autoComplete="off"
          />
        </FormControl>
        <FormControl
          // error={Boolean(userProfileError.name)}
          fullWidth
          variant="filled"
          sx={{ ...inputSpacing }}
        >
          <DatePicker
            label="Датум 1. мерења"
            inputFormat="dd/MM/yyyy"
            autoComplete="off"
            value={datum1Merenja}
            onChange={(newValue) => {
              setDatum1Merenja(newValue);
            }}
            renderInput={(params) => <TextField variant="filled" {...params} />}
          />
        </FormControl>
        <FormControl
          // error={Boolean(userProfileError.name)}
          fullWidth
          variant="filled"
          sx={{ ...inputSpacing }}
        >
          <DatePicker
            label="Датум 2. мерења"
            inputFormat="dd/MM/yyyy"
            autoComplete="off"
            value={datum2Merenja}
            onChange={(newValue) => {
              setDatum2Merenja(newValue);
            }}
            renderInput={(params) => <TextField variant="filled" {...params} />}
          />
        </FormControl>
        <FormControl
          // error={Boolean(userProfileError.name)}
          fullWidth
          variant="filled"
          sx={{ ...inputSpacing }}
        >
          <DatePicker
            label="Датум 3. мерења"
            inputFormat="dd/MM/yyyy"
            autoComplete="off"
            value={datum3Merenja}
            onChange={(newValue) => {
              setDatum3Merenja(newValue);
            }}
            renderInput={(params) => <TextField variant="filled" {...params} />}
          />
        </FormControl>
        
        <Box sx={{ ...buttonSpacing }}>
          <Button fullWidth variant="contained" href="/fuk/registar-rizika">
            Откажи
          </Button>
          <Button fullWidth variant="contained" type="submit">
            Потврди
          </Button>
        </Box>

      </form>
    </Paper>
  );
};

export default EditRisk;
