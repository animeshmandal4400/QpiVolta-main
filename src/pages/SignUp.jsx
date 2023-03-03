import React,{useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';
import Logo from '../assets/QpiVolta-Logo.png'
import BG from "../assets/BG.jpg"
import { useTheme } from '@mui/material';
import { tokens } from '../theme';
import {Person,Lock, Mail} from '@mui/icons-material';
const SignUp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
    }
    const RootStyle = styled("div")({
        backgroundColor:"#d4cbf6",
        background:`${colors.primary[400]} !important`,
        height: "100vh",
        display: "flex",
        placeItems: "center",
    });
    const logoStyle = {
      height: '80px',
      
    };
    /* const styles = {
      label: {
        color: '#8eaad9',
      },
      input: {
        border: ' blue',
      },
    }; */

    const CssTextField = styled(TextField)({
      '& label.Mui-focused': {
        color: `${colors.pinkAccent[500]}`,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor:  `${colors.pinkAccent[500]}`,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'grey',
        },
        '&:hover fieldset': {
          borderColor: `${colors.pinkAccent[500]}`,
        },
        '&.Mui-focused fieldset': {
          borderColor: `${colors.pinkAccent[500]}`,
        },
      },
    });
    return (
      <RootStyle>
        <Container  maxWidth="sm" >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',            
          }}
        >
          
          <img component="img" src={Logo} style={logoStyle}  />
          <Typography component="h1" variant="h2" color={colors.grey[100]} >
            Create an account<span style={{ color:`${colors.pinkAccent[500]}`}}>.</span>
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 , mb:2}}>
            <Grid container spacing={3} >
              <Grid item xs={12} sm={6} >
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Person sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <CssTextField
                  required
                  fullWidth
                  label="First Name" 
                  id="FirstName"
                  name="FirstName"
                  autoComplete="family-name"
                  variant='standard' />
                  </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <Person sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <CssTextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  variant='standard' 
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
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant='standard' 
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
