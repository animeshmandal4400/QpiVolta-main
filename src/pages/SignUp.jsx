import React,{useState} from 'react';
import {Button, TextField,Link,Grid,Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material';
import Logo from '../assets/QpiVolta-Logo.png'
import { useTheme,IconButton } from '@mui/material';
import { tokens } from '../theme';
import {Person,Lock, Mail, Visibility, VisibilityOff} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Particle } from '../components/particle';

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

const SignUp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName,setFirstname] = useState("")
  const [lastName,setLastname] = useState("")
  const [error, setError] = useState()
  const {signUp} = UserAuth()
  const navigate = useNavigate()
  const handleSubmit= async(e) => {
    e.preventDefault()
    try {
      await signUp(email,password, firstName, lastName)
      navigate('/') 
      setError('')
    }
    catch (error) {
      console.log(error)
      setError("Error: "+error.code);
    }
  }

    return (
      <RootStyle sx={{bgcolor:`${colors.primary[400]}`}}>
        <Particle/>
        <Container  maxWidth="sm" >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',            
          }}
        >   
          <img component="img" src={Logo}  style={{height: '85px', marginBottom:"8px"}}   />
          <Typography component="h1" variant="h2" color={colors.grey[100]} >
            Create an account<span style={{ color:`${colors.pinkAccent[500]}`}}>.</span>
          </Typography>
          {error ? <Typography bgcolor={colors.red[100]} sx={{ mt:"15px" ,p:"5px", borderRadius:"5px" ,color:"white", textAlign:"center"}}>{error}</Typography>: null}

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 , mb:2}}>
            <Grid container spacing={3} >
              <Grid item xs={12} sm={6} >
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Person sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <CssTextField
                  fullWidth
                  label="First Name" 
                  id="FirstName"
                  name="FirstName"
                  autoComplete="family-name"
                  variant='standard'
                  onChange={(e)=> setFirstname(e.target.value)}
              />
                  </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Person sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <CssTextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  variant='standard' 
                  onChange={(e) => {
                      setLastname(e.target.value);
                  }}
                />
                </Box>
              </Grid>
              <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Mail sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <CssTextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  variant='standard' 
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                   id="password"
                   autoComplete="new-password"
                   type={showPassword ? 'text' : 'password'}
                   variant='standard'
                   onChange={(e) => setPassword(e.target.value)}
                   InputProps={{
                     endAdornment: (
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                     ),
                   }}
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
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2" sx={{color:"grey"}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </RootStyle>    
  )
  }
  
  export default SignUp
