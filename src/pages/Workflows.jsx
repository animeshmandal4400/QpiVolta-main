import { Typography, useTheme, Box, useMediaQuery, Grid, Button } from '@mui/material'
import React from 'react'
import MolCard from '../components/MolCard';
import Header from '../components/Header';
import { tokens } from '../theme';
import img from "../assets/molucule.png"
import img2 from "../assets/molecule2.png"
import img3 from "../assets/molecule2.avif"
import { useNavigate } from 'react-router-dom';

const QpiVolta_Force = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const smScreen =useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate()
  const handleButtonClick  = () => {
    navigate("/catDiscovery")
  }
  return (
    
    <Box p="20px" >
      <Box display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0">
        <Header title="Work Flows" subtitle="Welcome to Work Flows"/>
      </Box>
      <Grid maxWidth="100%" container gap={2}>
        <Grid>
          <MolCard avatar="A" title="Catalysis" subtitle="Explore inorganic catalyst for variety of appplications" image={img} button="Explore" onClick={handleButtonClick}  />
        </Grid>
        <Grid>
          <MolCard avatar="B" title="Solid Electrolytes" subtitle="Explore ion diffussion in solid Electrolytes with Fast Moleculer Dynamics" image={img2} button="Explore" />
        </Grid>
        <Grid>
          <MolCard avatar="C" title="Additive Manufacturing" subtitle="Optimize advance ink formulations for additive Manufacturing" image={img3} button="Explore"/>
        </Grid>
      </Grid>
      <Button variant='contained' color='secondary' sx={{margin:"20px 2px"}}>Build New Workflow</Button>
    </Box>
  )
}

export default QpiVolta_Force