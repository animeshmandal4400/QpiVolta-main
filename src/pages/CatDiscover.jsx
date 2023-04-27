import React from 'react'
import { useTheme, Box, useMediaQuery, Grid, Typography, Stack, Slider, Button  } from '@mui/material'
import Header from '../components/Header';
import { tokens } from '../theme';
import Catalyst from "../components/catalyst"
const CatDiscover = () => {
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
        <Header title="Catalyst Discovery" />
      </Box>
      <Grid container gap={2} pl="20px">
        <Catalyst/>
      </Grid>
    </Box>
  )
}

export default CatDiscover
