import {  Route, Routes, Outlet } from "react-router-dom";
import { useState } from "react";
import SignUp  from './pages/SignUp'
import Topbar from "./components/Topbar/Topbar"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Login from "./pages/LogIn";
import Home from "./pages/Home";
import { MyProSidebarProvider } from "./components/Sidebar/SidebarContext";
import QpiVolta_Gen from "./pages/QpiVolta_Gen";
import QpiVolta_Force from "./pages/QpiVolta_Force";


const App = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            element={
              <MyProSidebarProvider>
                <div style={{ height: "100%", width: "100%" }}>
                  <Topbar isSidebar={isSidebar} />
                  <Outlet /> {/* Renders child routes */}
                </div>
              </MyProSidebarProvider>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/qpiVoltaGen" element={<QpiVolta_Gen />} />
            <Route path="/qpiVoltaForce" element={<QpiVolta_Force/>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>    
  )
}

export default App