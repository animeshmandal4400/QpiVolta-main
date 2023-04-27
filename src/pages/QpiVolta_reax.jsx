import { useTheme } from '@emotion/react'
import { Grid, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Header from '../components/Header'
import { tokens } from '../theme'
import MolCard from '../components/MolCard'
import img from '../assets/molecule2.png'
import { useNavigate } from 'react-router-dom'

const QpiVolta_reax = () => {
  const theme =useTheme();
  const colors = tokens(theme.palette.mode);
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"))

  const navigate = useNavigate()
  const handleButtonClick = () => {
    navigate('/genMol')
  }
  
  return (
    <Box p="20px">
      <Box display={smScreen ? 'flex' : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0">
      <Header title="QpiVolta Reax" subtitle="An AI accelrated service for predicting products from reactants, predicting the yield of products, and an attention-guided mapper for chemical reactions."/>
      </Box>
      <Grid>
          <MolCard 
          id="REACTION_MAPPER" 
          avatar="R" 
          title="REACTION MAPPER" 
          subtitle="A chemically agnostic attention-guided reaction mapper."  
          button="Launch" 
          image={img} 
          onClick= {handleButtonClick} />
        </Grid>
    </Box>
  )
}

export default QpiVolta_reax
