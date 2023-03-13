import { Typography, useTheme, Box, useMediaQuery, Grid  } from '@mui/material'
import { color } from '@mui/system';
import React from 'react'
import Header from '../components/Header';
import { tokens } from '../theme';
import MolCard from "../components/GenCard"
import { DropzoneArea } from 'material-ui-dropzone';

const QpiVolta_Gen = () => {

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
        <Header title="QpiVolta Gen" subtitle="Welcome to QpiVolta Gen"/>
      </Box>
      <Grid container spacing={2}>
        <Grid item="2">
          <MolCard avatar="A" title="Neural Network" subtitle="Accelerate Density Functional Theory Calculations with Neural Network"  button="Launch" />
        </Grid>
        <Grid item="2">
          <MolCard avatar="B" title="Hybrid Neural Network MD" subtitle="Hybrid workflow for accelerating Molecular Dynamics"  button="Launch" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <DropzoneArea/>
      </Grid>
    </Box>
  )
}

export default QpiVolta_Gen