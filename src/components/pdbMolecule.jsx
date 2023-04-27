import React, { useEffect, useRef } from 'react';
import * as $3Dmol from '3dmol/build/3Dmol-min.js';
import { tokens } from '../theme';
import { useTheme } from '@emotion/react';

const Molecule = ({ modelpdb }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const viewerRef = useRef(null);
  
  useEffect(() => {
    const viewer = $3Dmol.createViewer(viewerRef.current, {
      defaultcolors: $3Dmol.rasmolElementColors,
      backgroundColor:`${colors.primary[600]}`,
    });
    viewer.addModel(modelpdb, "pdb" );
    viewer.setStyle({}, {stick: {color: 'spectrum'}});
    viewer.zoomTo();
    viewer.render();
    return () => {
      viewer.removeAllModels();
      viewer.removeAllSurfaces();
    }
  }, [modelpdb]);

  return (
    
    <div ref={viewerRef} style={{ border:"5px solid black", borderRadius:"10px", position:"relative", marginTop:"50px", width: "100%", height: "100%" }}></div>
    
  );
};
export default Molecule;