// react
import { useState, useEffect } from "react";
// api
// import { useRegisterMutation } from "api/auth/auth.api";
// import { useLogInMutation } from "api/auth/auth.api";
// components
import CSRFToken from "csrf-token";
// mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import FilledInput from "@mui/material/FilledInput";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Background from "assets/electus_logo.png";

import { useSelector, useDispatch } from "react-redux";

import { register, logIn } from "redux/slices/auth/auth.thunk";

const Signup = () => {
  const dispatch = useDispatch();
  const registerPending = useSelector((state) => state.auth.registerPending);

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const { email, password, rePassword } = inputs;

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    rePasswordError: "",
  });
  const { emailError, passwordError, rePasswordError } = errors;

  const handleChange = (e) => {
    setInputs((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await dispatch(register(inputs)).unwrap();
      console.log("SIGNUP: ", res);
      setErrors({
        emailError: "",
        passwordError: "",
        rePasswordError: "",
      });
      await dispatch(logIn(inputs)).unwrap();
    } catch (error) {
      const { email_error, password_error, re_password_error } = error;
      setErrors({
        emailError: email_error ? email_error : "",
        passwordError: password_error ? password_error : "",
        rePasswordError: re_password_error ? re_password_error : "",
      });
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
    }}>
      <CSRFToken />
      <Typography variant="h4" sx={{ ...inputSpacing }}>
        Registracija korisnika
      </Typography>

      <form onSubmit={handleSubmit}>
        <FormControl
          error={Boolean(emailError)}
          fullWidth
          variant="filled"
          sx={{ ...inputSpacing }}
        >
          <InputLabel htmlFor="email">Email</InputLabel>
          <FilledInput
            id="email"
            type="text"
            value={email}
            onChange={handleChange}
            name="email"
            autoComplete="off"
          />
          <FormHelperText id="email-error-text">{emailError}</FormHelperText>
        </FormControl>

        <FormControl
          error={Boolean(passwordError)}
          fullWidth
          variant="filled"
          sx={{ ...inputSpacing }}
        >
          <InputLabel htmlFor="password">Lozinka</InputLabel>
          <FilledInput
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
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
          <FormHelperText id="password-error-text">
            Lozinka mora da ima najmanje 8 karaktera, od kojih najmanje 1 veliko slovo, 1 malo
            slovo, 1 broj i 1 specijalni karakter
          </FormHelperText>
        </FormControl>

        <FormControl
          error={Boolean(rePasswordError)}
          fullWidth
          variant="filled"
          sx={{ ...inputSpacing }}
        >
          <InputLabel htmlFor="repeat-password">Ponovi lozinku</InputLabel>
          <FilledInput
            id="repeat-password"
            type={showRePassword ? "text" : "password"}
            value={rePassword}
            onChange={handleChange}
            name="rePassword"
            endAdornment={
              <>
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowRePassword(!showRePassword)}
                    edge="end"
                  >
                    {showRePassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              </>
            }
          />

          <FormHelperText id="re-password-error-text">Lozinke moraju da budu iste</FormHelperText>
        </FormControl>

        <Box>
          <LoadingButton loading={registerPending} fullWidth variant="contained" type="submit">
            Registruj se
          </LoadingButton>
        </Box>
      </form>
    </Paper>
  );
};

export default Signup;
