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

  const [anchorEl, setAnchorEl] = React.useState(null);
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
      navigate('/login');
    }catch(error){
      alert(error)
    }
  }

  return (
    <Box display="flex" zIndex="1" justifyContent="space-between" p={2} backgroundColor={colors.blueAccent[900]} >
      <Box display="flex">
        {broken && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
        
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>

          {theme.palette.mode === "dark" ? (
           <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton onClick={handleNotificationClick}>
        <NotificationsNoneOutlinedIcon />
      </IconButton>
      
       <RightSidebar isOpen={isNotificationOpen} toggle={setIsNotificationOpen} />
        <span
        aria-owns={anchorEl ? "account-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        
        <IconButton>
          <AccountCircleRoundedIcon />
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
  );
};

export default Topbar;
