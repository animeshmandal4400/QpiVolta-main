import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Header from '../components/Header'
import { tokens } from '../theme'
const QpiVolta_reax = () => {
  const theme =useTheme();
  const colors = tokens(theme.palette.mode);
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"))
  return (
    <Box p="20px">
      <Box display={smScreen ? 'flex' : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0">
      <Header title="QpiVolta Reax" subtitle="Welcome to QpiVolta Reax"/>
      </Box>

    </Box>
  )
}

export default QpiVolta_reax
