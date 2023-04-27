import { useTheme, Box, useMediaQuery, Grid, Typography, Stack, Slider, Button, FormControl, InputLabel, Select, MenuItem, TextField  } from '@mui/material'
import React from 'react'
import Header from '../components/Header';
import { tokens } from '../theme';
import Molecule from '../components/cifMolecule';
import { Resizable } from 're-resizable';

const GenMol = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const smScreen =useMediaQuery(theme.breakpoints.up("sm"));

    const [property, setProperty] = React.useState('');

    const handleSelect = (event) => {
     setProperty(event.target.value);
    };
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
        Select the property
      </Typography>
            <FormControl fullWidth>
        <InputLabel id="select-label">Property</InputLabel>
        <Select
          labelId="select-label"
          id="select-label"
          value={property}
          label="property"
          color='secondary'
          onChange={handleSelect}
       >
          <MenuItem value={10}>Band Gap</MenuItem>
          <MenuItem value={20}>CO2 N2 Selectivity</MenuItem>
          <MenuItem value={30}>Henrey coefficient H20</MenuItem>
          <MenuItem value={40}>Working Capacity CO2</MenuItem>
        </Select>
      </FormControl>
      <h5>
        Select the Henry Coefficient (H2O) value to filter the material
      </h5>
      <Slider sx={{width:"95%"}} color="secondary" defaultValue={50} aria-label="Default" valueLabelDisplay="auto" marks={marks}/>
      <TextField
          id="composition"
          label="Enter the composition."
          placeholder="eg: mp-23505"
          color='secondary'
          multiline
        />
      <Button variant="outlined" color="secondary">
        Generate
      </Button>
      </Stack>
      </Grid>
      <Grid item xs={12} md={7}>
        <Resizable defaultSize={{
                  width: 520,
                  height: 320,
        }}>
          <Molecule/>
          </Resizable>
      </Grid>
      </Grid>
    </Box>
  )
}

export default GenMol
