import React,{useState} from 'react'
import Drawer from '@mui/material/Drawer';
import { tokens } from '../../theme';
import { Box , useTheme} from '@mui/system'
import { Stack } from '@mui/material';

const RightSidebar = ({ isOpen, toggle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const toggleDrawer = () => {
        toggle(!isOpen);
      };
  return (
        <Drawer anchor='right' open={isOpen} onClose={toggleDrawer}>
        <Stack style={{width: '250px', height:"100%", backgroundColor:`${colors.blueAccent[900]}`, display:"flex", alignItems:"center", padding:"10px" }} >
             <h2>Notifications</h2>
             <p>content goes here</p>
        </Stack>
        </Drawer>
  )
}

export default RightSidebar
