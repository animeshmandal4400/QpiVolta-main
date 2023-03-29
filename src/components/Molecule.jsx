import React, { useEffect, useRef } from 'react';
import * as $3Dmol from '3dmol/build/3Dmol-min.js';

const Molecule = () => {
  const viewerRef = useRef(null);
  var model =`MODEL
HETATM    1  C1  UNL     1      26.252   5.785   5.688  1.00  0.00           C  
HETATM    2  C2  UNL     1      27.006   6.916   5.832  1.00  0.00           C  
HETATM    3  C3  UNL     1      26.288   5.103   4.478  1.00  0.00           C  
HETATM    4  C4  UNL     1      27.789   7.366   4.784  1.00  0.00           C  
HETATM    5  C5  UNL     1      27.080   5.565   3.430  1.00  0.00           C  
HETATM    6  C6  UNL     1      27.849   6.711   3.564  1.00  0.00           C  
HETATM    7  N1  UNL     1      28.659   7.193   2.508  1.00  0.00           N  
HETATM    8  F1  UNL     1      27.085   4.858   2.251  1.00  0.00           F  
HETATM    9  H1  UNL     1      -2.987  -0.308   0.150  1.00  0.00           H  
HETATM   10  H2  UNL     1      -1.512  -2.336  -0.014  1.00  0.00           H  
HETATM   11  H3  UNL     1      -1.985   1.893   0.185  1.00  0.00           H  
HETATM   12  H4  UNL     1       0.952  -2.016  -0.137  1.00  0.00           H  
HETATM   13  H5  UNL     1       2.845   0.467   0.726  1.00  0.00           H  
HETATM   14  H6  UNL     1       2.837   0.051  -0.996  1.00  0.00           H  
ENDMDL

`
  useEffect(() => {
    const viewer = $3Dmol.createViewer(viewerRef.current, {
      defaultcolors: $3Dmol.rasmolElementColors,
      backgroundColor: '#141b2d'
    });
    viewer.addModel(model, "pdb" );
    viewer.setStyle({}, {stick: {color: 'spectrum'}});
    viewer.zoomTo();
    viewer.render();
    return () => {
      viewer.removeAllModels();
      viewer.removeAllSurfaces();
    }
  }, []);

  return (
    <div ref={viewerRef} className="data-style1='cartoon:color=spectrum'"  style={{position:"relative", marginTop:"50", width: "100%", height: "500px" }}></div>
  );
};

export default Molecule;