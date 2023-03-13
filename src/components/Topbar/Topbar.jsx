import React from "react";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { useTheme, Box, IconButton, InputBase, Button, Menu, MenuItem } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { useProSidebar } from "react-pro-sidebar";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { toggleSidebar, broken, rtl } = useProSidebar();
  const  {user,logOut} = UserAuth();
  const navigate = useNavigate();

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
    <Box display="flex" justifyContent="space-between" p={2} backgroundColor={colors.blueAccent[900]}>
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
        
        <span
        aria-owns={anchorEl ? "account-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </span>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={handleClose}>{user && user.displayName ? "Hi! " + user.displayName.split(" ")[0] :"Profile"}</MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
        {user?<MenuItem onClick={handleLogout}>Logout</MenuItem>:
        <Link to="/login"><MenuItem onClick={handleLogout} style={{color:"white", textAlign:"center", textDecoration:"none" }}> LogIn</MenuItem></Link>
        }
       
      </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
