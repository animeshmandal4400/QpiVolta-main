import React from 'react'
import { tokens } from '../theme';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import Header from '../components/Header';
import { useMediaQuery } from '@mui/material';

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
      <Box>
      
      </Box>
      </Box>

  )
}

export default Home