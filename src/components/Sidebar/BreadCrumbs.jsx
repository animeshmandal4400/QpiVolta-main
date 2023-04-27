import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Breadcrumb = () => {
  const location = useLocation();
  const [pathnames, setPathnames] = useState([]);

  useEffect(() => {
    const { pathname } = location;
    const parts = pathname.split("/").filter((x) => x);
    setPathnames(parts);
  }, [location]);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnames.length > 0 ? (
        <Link style={{display:"flex", alignItems:"center", textDecoration:"none", color:"inherit" }} to="/home">
                        <HomeOutlinedIcon /> Home
        </Link>
      ) : (
        <Typography color="textPrimary">Home</Typography>
      )}

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography color="textPrimary" key={name}>
            {name}
          </Typography>
        ) : (
          <Link color="inherit" href={routeTo} key={name}>
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb
