import React,{useState} from 'react'
import { tokens } from '../theme';
import { useTheme, Box, useMediaQuery, Grid, Typography  } from '@mui/material'
import Header from '../components/Header';
import MolCard from "../components/MolCard"
import img from "../assets/molucule.png"
import img2 from "../assets/molecule2.png"
import img3 from "../assets/molecule2.avif"
import GenCard from '../components/MolCard';
import { useSelector } from 'react-redux';
const Home = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);

  const [viewedIds, setViewedIds] = useState([]);

  const components = useSelector((state) => state.recentViewed.components);
  
  return (

    <Box p="20px" marginTop="25vpx">
    <Box display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0">
      <Header title="HomePage" subtitle="Welcome to your Home Page" />
      </Box>
      <Grid maxWidth="100%" container gap={2}>
        <Grid item >
          <MolCard id="Catalysis2" avatar="C" title="Catalysis" subtitle="Explore inorganic catalyst for variety of appplications" image={img} button="Explore"  />
        </Grid>
        <Grid item>
          <MolCard id="Solid_Electrolytes" avatar="S" title="Solid Electrolytes" subtitle="Explore ion diffussion in solid Electrolytes with Fast Moleculer Dynamics" image={img2} button="Explore" />
        </Grid>
      </Grid>
      <h2 style={{margin:"20px 0"}} color={colors.grey[800]}> Recent Viewed pages</h2>
      <Box sx={{ padding:"5px"}}>
      <Grid maxWidth="100%" container gap={2}>
        {components.length>0 ?
         components.map((c) => (
        <GenCard
          key={c.id}
          avatar={c.avatar}
          title={c.title}
          subtitle={c.subtitle}
          button={c.button}
          image ={c.image}
        />
      )):
      <Box> There is no recent viewed pages</Box>
      }
      </Grid>
      </Box>
      </Box>

  )
}

export default Home