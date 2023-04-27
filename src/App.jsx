import {  Route, Routes, Outlet } from "react-router-dom";
import { useState } from "react";
import SignUp  from './pages/SignUp'
import Topbar from "./components/Topbar/Topbar"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Login from "./pages/LogIn";
import Home from "./pages/Home";
import { MyProSidebarProvider } from "./context/SidebarContext";
import QpiVolta_Gen from "./pages/QpiVolta_Gen";
import QpiVolta_Force from "./pages/QpiVolta_Force";
import QpiVolta_reax from "./pages/QpiVolta_reax";
import { AuthContextProvider } from "./context/AuthContext";
import GenMol from "./pages/GenMol";
import Workflows from "./pages/Workflows";
import CatDiscover from "./pages/CatDiscover";
import Molecule from "./components/cifMolecule";
import QpiVolta_predict from "./pages/QpiVolta_Predict";
import Visualization from "./pages/Visualization";

const App = () => {
  
  const [isSidebar, setIsSidebar] = useState(true);

  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthContextProvider>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route exact path="/" element={<Login />} />
          <Route
            element={
              <MyProSidebarProvider>
                <div style={{ height: "100%", width: "100%" }}>
                  <Topbar isSidebar={isSidebar}/>
                  <Outlet /> {/* Renders child routes */}
                </div>
              </MyProSidebarProvider>
            }
          >
            <Route path="/home" element={<Home/>} />
            <Route path="/qpiVoltaGen" element={<QpiVolta_Gen/>} />
            <Route path="/genMol" element={<GenMol/>} />
            <Route path="/qpiVoltaForce" element={<QpiVolta_Force/>} />
            <Route path="/qpiVoltaReax" element={<QpiVolta_reax/>} />
            <Route path="/cifMolecule" element={<Molecule/>} />
            <Route path="/qpiVoltaPredict" element={<QpiVolta_predict/>} />
            <Route path="/qpiVoltaPredict/visualization" element={<Visualization/>} />
            <Route path="/workFlows" element={<Workflows/>} />
            <Route path="/catDiscovery" element={<CatDiscover/>} />
          </Route>
        </Routes>
        </AuthContextProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>    
  )
}

export default App
