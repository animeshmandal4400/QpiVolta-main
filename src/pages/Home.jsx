import React from 'react'
import { tokens } from '../theme';
import { useTheme, Box, useMediaQuery, Grid  } from '@mui/material'
import Header from '../components/Header';
import MolCard from "../components/MolCard"
import img from "../assets/molucule.png"
import img2 from "../assets/molecule2.png"
import img3 from "../assets/molecule2.avif"

const Home = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);
  return (

    <Box p="20px" bgcolor="" marginTop="25vpx">
    <Box display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0">
      <Header title="HomePage" subtitle="Welcome to your Home Page" />
      </Box>
      <Grid maxWidth="100%" container gap={2}>
        <Grid>
          <MolCard avatar="A" title="Catalysis" subtitle="Explore inorganic catalyst for variety of appplications" image={img} button="Explore"  />
        </Grid>
        <Grid>
          <MolCard avatar="B" title="Solid Electrolytes" subtitle="Explore ion diffussion in solid Electrolytes with Fast Moleculer Dynamics" image={img2} button="Explore" />
        </Grid>
        <Grid>
          <MolCard avatar="C" title="Additive Manufacturing" subtitle="Optimize advance ink formulations for additive Manufacturing" image={img3} button="Explore"/>
        </Grid>
      </Grid>
      </Box>

  )
}

export default Home