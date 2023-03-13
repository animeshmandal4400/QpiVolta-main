import React, { useEffect, useRef } from 'react';
import $3Dmol from '3dmol';

function Molecule({ pdb }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const viewer = $3Dmol.createViewer(container, {
      backgroundColor: 'white',
      antialias: true,
      style: 'outline',
    });
    viewer.addModel(pdb, 'pdb');
    viewer.setStyle({}, { cartoon: { color: 'spectrum' } });
    viewer.zoomTo();
    return () => viewer.cleanup();
  }, [pdb]);

  return <div ref={containerRef} style={{ width: '100%', height: '500px' }} />;
}

export default Molecule;
