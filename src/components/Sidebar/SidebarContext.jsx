import React, { createContext, useContext } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import MyProSidebar from "./MyProSidebar";

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
          {children}
        </div>
      {/* </SidebarContext.Provider> */}
    </ProSidebarProvider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
