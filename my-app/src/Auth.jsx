import React, {useState} from "react";
import {Button, Typography, Box, TextField} from "@mui/material";

function Auth() {
  const [isSignup, setisSignup] = useState(false);

  return (
    <form>
      <Box
        // border="solid"
        margin="auto"
        display="flex"
        marginTop={20}
        padding={5}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="400px"
        borderRadius={5}
        boxShadow={"5px 5px 10px"}
        sx={{
          ":hover": {
            boxShadow: "15px 15px 20px",
          },
        }}
      >
        <Typography variant="h2" padding={4}>
        {isSignup ? "SIGNUP":"LOGIN"} 
        </Typography>
      { isSignup && <TextField
          margin="normal"
          variant="outlined"
          type={"text"}
          placeholder="Name"
        ></TextField>}

        <TextField
          margin="normal"
          variant="outlined"
          type={"email"}
          placeholder="Email"
        ></TextField>
        <TextField
          margin="normal"
          variant="outlined"
          type={"password"}
          placeholder="Password"
        ></TextField>
   

        <Button sx={{marginBottom:"6px"}}  variant="contained">
    {isSignup  ? "Signup" : "Login"  }
        </Button>


       {!isSignup && <Button onClick={() => setisSignup(!isSignup)} variant="contained">
         Change to Signup</Button>}
        
      </Box>
    </form>
  );
}

export default Auth;
