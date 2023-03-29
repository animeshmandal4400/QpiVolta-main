import { Typography, useTheme, Box, useMediaQuery, Grid } from '@mui/material'
import React from 'react'
import MolCard from '../components/MolCard';
import Header from '../components/Header';
import { tokens } from '../theme';

const QpiVolta_Force = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const smScreen =useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box p="20px" >
      <Box display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0">
        <Header title="QpiVolta Force" subtitle="Welcome to QpiVolta Force"/>
      </Box>
      <Grid maxWidth="100%" container gap={2}>
        <Grid>
          <MolCard avatar="A" title="Neural Network" subtitle="Accelerate Density Functional Theory Calculations with Neural Network" button="Launch"  />
        </Grid>
        <Grid>
          <MolCard avatar="B" title="Hybrid Neural Network MD" subtitle="Hybrid workflow for accelerating Molecular Dynamics" button="Launch" />
        </Grid>
      </Grid>
    </Box>
  )
}

export default QpiVolta_Force