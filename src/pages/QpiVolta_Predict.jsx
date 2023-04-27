import { Box,useTheme, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import { tokens } from '../theme'
import MolCard from '../components/MolCard'
import img from '../assets/molecule2.png'
import { useNavigate } from 'react-router-dom'

const QpiVolta_predict = () => {
  const theme =useTheme();
  const colors = tokens(theme.palette.mode);
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"))

  const navigate = useNavigate()
  const handleButtonClick = () => {
    navigate('/qpiVoltaPredict/visualization')
  }
  return (
    <Box p="20px">
      <Box display={smScreen ? 'flex' : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0">
      <Header title="QpiVolta Predict" subtitle="An AI accelerated platform powered by state-of-the Deep Learning Models to perform property prediction."/>
      </Box>
      <Grid container gap={2}>
        <Grid>
        <MolCard 
          id="WORKING_CAPACITY_CO2" 
          avatar="W" 
          title="WORKING CAPACITY CO2" 
          subtitle="comprises quantum mechanical properties of pharmacologically relevant molecules"  
          button="Launch" 
          image={img}
          onClick= {handleButtonClick} />
        </Grid>
        <Grid>
          <MolCard 
          id="BAND_GAP" 
          avatar="B" 
          title="BAND GAP" 
          subtitle="A comprehensive chemical space of small organic molecules"  
          button="Launch" 
          image={img}
          onClick= {handleButtonClick} />
        </Grid>
        </Grid>
    </Box>
  )
}

export default QpiVolta_predict
