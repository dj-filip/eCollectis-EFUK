// react
import { useState, useEffect } from "react";
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

import { useSelector, useDispatch } from "react-redux";
import { readRoles } from "redux/slices/role/role.thunk";
import {
  readLocations,
  readUserProfile,
  createUserProfile,
  updateUserProfile,
} from "redux/slices/user/user.thunk";
// import {
//   readAccountStatus,
//   createAccountStatus,
// } from "redux/slices/account-status/account-status.thunk";
import { getUserVerified } from "services/user.services";

const Profile = () => {
  const dispatch = useDispatch();

  // const verified = useSelector((state) => state.accountStatus.verified);
  // const role = useSelector((state) => state.accountStatus.role);

  const [userProfileInputs, setUserProfileInputs] = useState({
    name: "",
    surname: "",
    phone: "",
    mobile: "",
    location: "",
  });

  // const [accountStatusInputs, setAccountStatusInputs] = useState({
  //   role_id: "",
  // });

  const [userProfileError, setUserProfileError] = useState({
    name: "",
    surname: "",
    phone: "",
    mobile: "",
    location: "",
  });

  // const [accountStatusError, setAccountStatusError] = useState({
  //   role_id: "",
  // });

  const [locations, setLocations] = useState([]);
  // const [roles, setRoles] = useState([]);

  const [userProfileFilled, setUserProfileFilled] = useState(false);
  const [verified, setVerified] = useState(true);

  const [statusInfo, setStatusInfo] = useState("");

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (userProfileFilled && !verified) {
      setStatusInfo("Sačekajte da administrator odobri Vaš nalog. Bićete obavešteni putem emaila.");
    }
  }, [userProfileFilled, verified]);

  const getData = async () => {
    const locations = await dispatch(readLocations());
    const userProfile = await dispatch(readUserProfile());
    // const accountStatus = await dispatch(readAccountStatus());
    // const userVerified = await getUserVerified();

    // setVerified(userVerified.data.verified);

    setLocations(locations.payload.data);
    // setRoles(roles.payload.data);
    setUserProfileInputs(userProfile.payload.data.user_profile);
    setUserProfileFilled(userProfile.payload.data.profile_filled);

    // setAccountStatusInputs({ role_id: accountStatus.payload.data.account_status.user_role });
  };

  const handleUserProfileInputsChange = (e) => {
    setUserProfileInputs((values) => ({
      ...values,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!userProfileFilled) {
        await dispatch(createUserProfile(userProfileInputs)).unwrap();
        getData();
      } else {
        await dispatch(updateUserProfile(userProfileInputs)).unwrap();
      }
    } catch (error) {
      console.log("USER PROFILE FILLED ERROR: ", error.error);
      setUserProfileError(error.error);
    }

    // try {
    //   if (!verified) {
    //     await dispatch(createAccountStatus(accountStatusInputs)).unwrap();
    //   }
    // } catch (error) {
    //   console.log("VERIFIED ERROR: ", error);
    //   setAccountStatusError(error.data.error);
    // }
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
    marginBottom: userProfileFilled && !verified && 3,
  };

  // if (
  //   Object.values(userProfileInputs).some((x) => x === "") ||
  //   Object.values(accountStatusInputs).some((x) => x === "")
  // ) {
  //   if (
  //     userProfileInputsSuccess &&
  //     rolesSuccess &&
  //     locationsSuccess &&
  //     accountStatusSuccess
  //   ) {
  //     console.log(
  //       userProfileInputsSuccess,
  //       rolesSuccess,
  //       locationsSuccess,
  //       accountStatusSuccess
  //     );

  //     setUserProfileInputs({
  //       name: userProfileInputsData.user_profile.name,
  //       surname: userProfileInputsData.user_profile.surname,
  //       phone: userProfileInputsData.user_profile.phone,
  //       mobile: userProfileInputsData.user_profile.mobile,
  //       location: userProfileInputsData.user_profile.location,
  //     });

  //     setAccountStatusInputs({
  //       role_id: accountStatusData.account_status.user_role,
  //     });

  //     if (
  //       userProfileInputsData.profile_filled &&
  //       !accountStatusData.account_status.verified
  //     ) {
  //       setStatusInfo(
  //         "Sačekajte da administrator odobri Vaš nalog. Bićete obavešteni putem emaila."
  //       );
  //     }
  //   }
  // }

  return (
    <Paper elevation={4} sx={{ ...formContainer }}>
      <Typography variant="h4" sx={{ ...inputSpacing }}>
        Korisnički profil
      </Typography>

      <form onSubmit={handleSubmit}>
        <FormControl
          error={Boolean(userProfileError.name)}
          fullWidth
          variant="filled"
          sx={{ ...inputSpacing }}
        >
          <InputLabel htmlFor="name">Ime</InputLabel>
          <FilledInput
            id="name"
            type="text"
            value={userProfileInputs.name}
            onChange={handleUserProfileInputsChange}
            autoComplete="off"
          />
          <FormHelperText id="email-error-text">{userProfileError.name}</FormHelperText>
        </FormControl>

        <FormControl
          error={Boolean(userProfileError.surname)}
          fullWidth
          variant="filled"
          sx={{ ...inputSpacing }}
        >
          <InputLabel htmlFor="surname">Prezime</InputLabel>
          <FilledInput
            id="surname"
            type="text"
            value={userProfileInputs.surname}
            onChange={handleUserProfileInputsChange}
            autoComplete="off"
          />
          <FormHelperText id="email-error-text">{userProfileError.surname}</FormHelperText>
        </FormControl>

        <FormControl
          error={Boolean(userProfileError.phone)}
          fullWidth
          variant="filled"
          sx={{ ...inputSpacing }}
        >
          <InputLabel htmlFor="phone">Telefon</InputLabel>
          <FilledInput
            id="phone"
            type="text"
            value={userProfileInputs.phone}
            onChange={handleUserProfileInputsChange}
            autoComplete="off"
          />
          <FormHelperText id="email-error-text">{userProfileError.phone}</FormHelperText>
        </FormControl>

        <FormControl
          error={Boolean(userProfileError.mobile)}
          fullWidth
          variant="filled"
          sx={{ ...inputSpacing }}
        >
          <InputLabel htmlFor="mobile">Mobilni telefon</InputLabel>
          <FilledInput
            id="mobile"
            type="text"
            value={userProfileInputs.mobile}
            onChange={handleUserProfileInputsChange}
            autoComplete="off"
          />
          <FormHelperText id="email-error-text">{userProfileError.mobile}</FormHelperText>
        </FormControl>

        <FormControl
          error={Boolean(userProfileError.location)}
          fullWidth
          variant="filled"
          disabled={userProfileFilled}
          sx={{ ...inputSpacing }}
        >
          <InputLabel id="location-label">Sektor, lokacija, organizaciona jedinica</InputLabel>
          <Select
            labelId="location-label"
            id="location"
            value={userProfileInputs.location}
            onChange={(e) =>
              setUserProfileInputs((values) => ({
                ...values,
                location: e.target.value,
              }))
            }
          >
            {locations.length &&
              locations.map((location) => (
                <MenuItem key={location.id} value={location.id}>
                  {location.sector_name}, {location.city}, {location.organization_unit}
                </MenuItem>
              ))}
          </Select>
          <FormHelperText id="email-error-text">{userProfileError.location}</FormHelperText>
        </FormControl>

        {/* <FormControl
          error={Boolean(accountStatusError.role_id)}
          fullWidth
          variant="filled"
          disabled={userProfileFilled}
          sx={{ ...inputSpacing }}
        >
          <InputLabel id="role-label">Radno mesto/Rola</InputLabel>
          <Select
            labelId="role-label"
            id="role"
            value={accountStatusInputs.role_id}
            onChange={(e) => setAccountStatusInputs({ role_id: e.target.value })}
          >
            {roles.length &&
              roles.map((role) => (
                <MenuItem key={role.id} value={role.id}>
                  {role.name}
                </MenuItem>
              ))}
          </Select>
          <FormHelperText id="email-error-text">{accountStatusError.role_id}</FormHelperText>
        </FormControl> */}

        <Box sx={{ ...buttonSpacing }}>
          <Button fullWidth variant="contained" type="submit">
            Potvrdi
          </Button>
        </Box>

        <Typography sx={{ color: "warning.main" }}>{statusInfo}</Typography>
      </form>
    </Paper>
  );
};

export default Profile;
