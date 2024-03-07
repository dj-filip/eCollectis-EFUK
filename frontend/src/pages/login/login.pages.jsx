// react
import { useEffect, useState } from "react";
//components
import CSRFToken from "csrf-token";
// mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import FilledInput from "@mui/material/FilledInput";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import { logIn } from "redux/slices/auth/auth.thunk";
import Background from "assets/electus_logo.png";

const Login = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [authError, setAuthError] = useState("");

  const handleChange = (e) => {
    setInputs((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await dispatch(logIn(inputs)).unwrap();
      console.log("res: ", res);
    } catch (error) {
      setAuthError(error.error ? error.error : "");
    }
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

  const inputSpacing = {
    marginBottom: 3,
  };


  return (
    <Paper
      elevation={4}
      sx={{
        ...formContainer,
        backgroundImage: "url(" + Background + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CSRFToken />

      <Typography variant="h4" sx={{ ...inputSpacing }}>
        Prijava na sistem
      </Typography>

      <form onSubmit={handleSubmit}>
        <FormControl fullWidth variant="filled" error={Boolean(authError)} sx={{ 
            // "& .MuiFilledInput-root, .Mui-focused": {
            //   backgroundColor: "rgba(253, 196, 203, 1)"
            // },
            ...inputSpacing }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <FilledInput
            id="email"
            type="text"
            value={inputs.email}
            onChange={handleChange}
            name="email"
            autoComplete="off"
          />
        </FormControl>

        <FormControl fullWidth variant="filled" error={Boolean(authError)} sx={{ ...inputSpacing }}>
          <InputLabel htmlFor="password">Lozinka</InputLabel>
          <FilledInput
            id="password"
            type={showPassword ? "text" : "password"}
            value={inputs.password}
            onChange={handleChange}
            name="password"
            endAdornment={
              <>
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              </>
            }
          />
          <FormHelperText id="email-error-text">{authError}</FormHelperText>
        </FormControl>

        <Box>
          <Button fullWidth variant="contained" type="submit">
            Prijavi se
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Login;
