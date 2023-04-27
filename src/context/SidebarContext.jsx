import React, { createContext, useContext } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import MyProSidebar from "../components/Sidebar/LeftSidebar";
import RightSidebar from "../components/Sidebar/RightSidebar";

const SidebarContext = createContext({});

export const MyProSidebarProvider = ({ children }) => {

  return (
    <ProSidebarProvider>
        <div
          style={{
            display: "flex",
          }}
        >
          <MyProSidebar />
          <RightSidebar/>
          {children}
        </div>
      {/* </SidebarContext.Provider> */}
    </ProSidebarProvider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
