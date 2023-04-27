import React from "react";
import { useContext ,useState} from "react";
import { ColorModeContext, tokens } from "../../theme";
import { useTheme, Box, IconButton, Menu, MenuItem } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useProSidebar } from "react-pro-sidebar";
import { UserAuth } from "../../context/AuthContext";
import {  useNavigate } from "react-router-dom";
import RightSidebar from '../Sidebar/RightSidebar';
import { styled } from "@mui/system";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Breadcrumb from "../Sidebar/BreadCrumbs";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { toggleSidebar, broken } = useProSidebar();
  const  {user,logOut} = UserAuth();
  const navigate = useNavigate();

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleNotificationClick = () => {
    setIsNotificationOpen(true);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }
  function handleClose() {
    setAnchorEl(null);
  }

  const handleLogout = async() => {
    try {
      await logOut();
      navigate('/');
    }catch(error){
      alert(error)
    }
  }
    
  const CssIconButton = styled(IconButton)({
    border:"solid transparent",
    borderRadius:"10px",
    backgroundColor:`${colors.primary[1000]}`,
    color:`${colors.grey[500]}`
  })

  return (
    <Box sx={{display:"flex", zIndex:"9999", justifyContent:"space-between", padding:"15px", backgroundColor:`${colors.blueAccent[900]}`}}  >
      <Box display="flex">
        {broken && (
          <CssIconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </CssIconButton>
        )}  
      </Box>
      <Box display="flex" marginLeft="5px" justifyContent="space-between" alignItems="center" width="100%">
        <Breadcrumb/>
        <Box display="flex" gap="8px">
            <CssIconButton onClick={colorMode.toggleColorMode} >

          {theme.palette.mode === "dark" ? (
           <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </CssIconButton>

        <CssIconButton onClick={handleNotificationClick}>
        <NotificationsNoneOutlinedIcon/>
      </CssIconButton>
      
       <RightSidebar isOpen={isNotificationOpen} toggle={setIsNotificationOpen} />
        <span
        aria-owns={anchorEl ? "account-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        
        <IconButton sx={{border:" solid transparent",
                        backgroundColor:`${colors.primary[1000]}`,
                        color:`${colors.grey[500]}`}}>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </span>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >        
        <MenuItem onClick={handleClose}>{user && user.displayName ? `Hi! `+ user.displayName.split(" ")[0] : "User"}</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        { user? <MenuItem onClick={handleLogout}>Logout</MenuItem>:
        <MenuItem onClick={handleLogout}> LogIn</MenuItem>
        }        
      </Menu>
        </Box>
        
      </Box>
    </Box>
  );
};

export default Topbar;
