import { useTheme, Box, useMediaQuery, Grid  } from '@mui/material'
import React from 'react'
import Header from '../components/Header';
import { tokens } from '../theme';
import MolCard from "../components/MolCard"
import FileUploader from '../components/FileUploader';
import Molecule from '../components/Molecule';
import { useNavigate } from 'react-router-dom';
import img from "../assets/molucule.png"

const QpiVolta_Gen = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const smScreen =useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate()
  const handleButtonClick = () => {
  navigate('/genMol')
}

  return (
    <Box p="20px" >
      <Box display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0">
        <Header title="QpiVolta Gen" subtitle="Welcome to QpiVolta Gen"/>
      </Box>
      <Grid container gap={2} >
        <Grid>
          <MolCard avatar="A" title="QM9 Dataset" subtitle="A comprehensive chemical space of small organic molecules"  button="Generate" image={img} onClick={handleButtonClick} />
        </Grid>
        <Grid >
          <MolCard avatar="B" title="QMugs" subtitle="Comprises quantam mechanical proparties of phermacologically relevant molecules" image={img}  button="Generate" onClick={handleButtonClick}/>
        </Grid>
      </Grid>
      <Grid container width="max-content" item xs={12} md={6} margin="20px 2px">
        <FileUploader/>
      </Grid> 
    </Box>
  )
}

export default QpiVolta_Gen