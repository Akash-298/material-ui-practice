import React from "react";
import { Button, Typography, Box, TextField } from "@mui/material";

function Auth() {
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
        boxShadow={"5px 5px 10px" }

        sx={{
          ":hover":{
            boxShadow :"15px 15px 20px",
          },
        }}

      >
        <Typography variant="h2" padding={4}>Login</Typography>
        <TextField margin="normal" variant="outlined" type={"text"} placeholder="Name"></TextField>
        <TextField margin="normal" variant="outlined" type={"email"} placeholder="Email"></TextField>
        <TextField margin="normal" variant="outlined" type={"password"} placeholder="Password"></TextField>
        <Button  sx={{ margin: 3 }} variant="contained" color="warning">Login</Button>
        <Button  variant="contained">GO TO SIGNUP</Button>
  
      </Box>
    </form>
  );
}

export default Auth;
