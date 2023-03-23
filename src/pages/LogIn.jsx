import React, { useState } from 'react'
import {Button, TextField,Link,Grid,Box, Typography, Container } from '@mui/material';
import { IconButton, styled } from '@mui/material';
import Logo from '../assets/QpiVolta-Logo.png';
import { tokens } from '../theme';
import { useTheme } from '@emotion/react';
import {Lock, Email, Visibility, VisibilityOff} from '@mui/icons-material';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
// import { Particle } from '../components/particle';

const RootStyle = styled("div")({
  height: "100vh",
  display: "flex",
  placeItems: "center",
});

const CssTextField = styled(TextField)({
'& label.Mui-focused': {
  color: "#cc2c94",
},
'& .MuiInput-underline:after': {
  borderBottomColor:  "#cc2c94",
},
'& .MuiOutlinedInput-root': {
  '& fieldset': {
    borderColor: 'grey',
  },
  '&:hover fieldset': {
    borderColor: "#cc2c94",
  },
  '&.Mui-focused fieldset': {
    borderColor: "#cc2c94",
  },
},
});


const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showPassword, setShowPassword] = useState("")
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  }
   const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState()
  const {logIn,passReset} = UserAuth()
  const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()
    setError('')
    try {
      await logIn( email,password )
      alert("Login Successfully")
      navigate('/')
    }
    catch(error) {
      console.log(error);
      setError("Error: "+error.code);
    }
  }

  const forgetPass = async(e) => {
    e.preventDefault();
    setError('');
    try {
      await passReset(email);
      alert('Password reset email sent. Please check your inbox.');
    } catch(error) {
      console.log(error);
      setError('Error: ' + error.code);
    }
  }

  return (
    <RootStyle sx={{bgcolor:`${colors.primary[400]}`}}>
      {/* <Particle/> */}
        <Container maxWidth="sm" >
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',            
          }}
        > 
          <img component="img" src={Logo}  style={{height: '80px', marginBottom:"8px", zIndex:"1"}}   />
          <Typography component="h1" variant="h3" color={colors.grey[100]}>
            Login to your Account<span style={{ color:`${colors.pinkAccent[500]}`}}>.</span>
          </Typography>
          {error ? <Typography bgcolor={colors.red[100]} sx={{ mt:"15px" ,p:"5px", borderRadius:"5px" ,color:"white", textAlign:"center"}}>{error}</Typography>: null}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 , mb:2}}>
            <Grid container spacing={3} >
              <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Email sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <CssTextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  variant='standard'
                  onChange={(e) => setEmail(e.target.value)}
                />
                </Box>
              </Grid>
              <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <CssTextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={ showPassword ? "text" :"password" }
                  id="password"
                  autoComplete="new-password"
                  variant='standard'
                  InputProps={{
                    endAdornment : (
                      <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      >
                          {showPassword? <Visibility/>: <VisibilityOff/>}
                      </IconButton>
                    )
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
                </Box>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Link href="/SignUp" variant="body2" sx={{color:"grey"}}>
                  Don't have an account? Sign UP
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" sx={{color:"grey"}} onClick={forgetPass}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </RootStyle> 
  )
}
export default Login