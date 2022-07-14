import { AccountCircle, AssignmentInd, Lock } from "@mui/icons-material";
import { MenuItem, TextField, Button, InputAdornment } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { DefaultRoutes } from "../AppRoutes";
import { AUTHENTICATED, RESPONSE_CODES, ROLE, roles, URLS } from "../Constants";
import { useNavigate } from "react-router-dom";
import { loginStyles } from "../Styles";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loginError, setLoginError] = useState(false);

  let navigate = useNavigate();

  const handleClick = async () => {
    console.log("clicked on btn");
    //form the url based on role
    const url = `${URLS.base}${URLS[role.toLowerCase()]}${URLS.user}${email}`;
    console.log(url);
    const response = await axios.get(url);
    if (response.status === RESPONSE_CODES.SUCCESS) {
      localStorage.setItem(AUTHENTICATED, "true");
      localStorage.setItem(ROLE, role);
      localStorage.setItem('email',email);
      localStorage.setItem('msp', 800);
      console.log(response.data);
      navigate(DefaultRoutes[2].path);
    } else{
      setLoginError(true);
    }
  };

  return (
    <div style={loginStyles.loginDiv}>
      <TextField
        id="userName"
        label="Email"
        variant="outlined"
        required
        size="normal"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        required
        size="normal"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="role"
        label="Role"
        variant="outlined"
        required
        size="normal"
        value={role}
        select
        onChange={(e) => setRole(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AssignmentInd />
            </InputAdornment>
          ),
        }}
      >
        {roles.map((role) => (
          <MenuItem key={role} value={role}>
            {role}
          </MenuItem>
        ))}
      </TextField>

      <Button
        id="loginBtn"
        variant="contained"
        disabled={email === "" || password === "" || role === ""}
        onClick={handleClick}
      >
        Login
      </Button>
      {
        loginError && <p>Could not find email or password</p>
      }
    </div>
  );
}

export default Login;
