import { useTheme, Box, useMediaQuery, Grid, Typography, Stack, Slider, Button  } from '@mui/material'
import React from 'react'
import Header from '../components/Header';
import { tokens } from '../theme';
import Molecule from '../components/Molecule';

const GenMol = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const smScreen =useMediaQuery(theme.breakpoints.up("sm"));

    const marks = [
        {
          value: 0,
          label: '0',
        },
        {
          value: 100,
          label: '100',
        },
      ];

      const model = localStorage.getItem("model");
  return (
    <Box p="20px" >
      <Box display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0">
        <Header title="Target Property" />
      </Box>
      <Grid container gap={2} pl="20px">
        <Grid item xs={12} md={4}>
      <Stack gap={2}>
      <Typography>
        HOMO-LUMO gap (ev)
      </Typography>
      <Slider sx={{width:"95%"}} color="secondary" defaultValue={50} aria-label="Default" valueLabelDisplay="auto" marks={marks}/>
      </Stack>
      <Button variant="outlined" color="secondary">
        Generate
      </Button>
      </Grid>
      <Grid item  xs={12} md={7}>
      {model && <Molecule model={model} />}
      </Grid>
      </Grid>
    </Box>
  )
}

export default GenMol
