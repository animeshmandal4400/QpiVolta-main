import React, { useEffect, useRef } from 'react';
import * as $3Dmol from '3dmol/build/3Dmol-min.js';
import { tokens } from '../theme';
import { useTheme } from '@emotion/react';

const Molecule = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const viewerRef = useRef(null);
  var model = `
  # generated using pymatgen
data_In2S3
_symmetry_space_group_name_H-M   'P 1'
_cell_length_a   7.67999752
_cell_length_b   7.67999660
_cell_length_c   17.19010243
_cell_angle_alpha   102.90788118
_cell_angle_beta   102.90787805
_cell_angle_gamma   90.00000379
_symmetry_Int_Tables_number   1
_chemical_formula_structural   In2S3
_chemical_formula_sum   'In16 S24'
_cell_volume   961.98841120
_cell_formula_units_Z   8
loop_
 _symmetry_equiv_pos_site_id
 _symmetry_equiv_pos_as_xyz
  1  'x, y, z'
loop_
 _atom_site_type_symbol
 _atom_site_label
 _atom_site_symmetry_multiplicity
 _atom_site_fract_x
 _atom_site_fract_y
 _atom_site_fract_z
 _atom_site_occupancy
  In  In0  1  0.29549909  0.54549909  0.09100018  1
  In  In1  1  0.04549909  0.79549909  0.59100018  1
  In  In2  1  0.70450091  0.45450091  0.90899982  1
  In  In3  1  0.95450091  0.20450091  0.40899982  1
  In  In4  1  0.81358970  0.33210391  0.66420882  1
  In  In5  1  0.16789609  0.14938189  0.83579118  1
  In  In6  1  0.16789609  0.68641030  0.83579118  1
  In  In7  1  0.64938189  0.66789609  0.33579118  1
  In  In8  1  0.18641030  0.66789609  0.33579118  1
  In  In9  1  0.83210391  0.31358970  0.16420882  1
  In  In10  1  0.83210391  0.85061811  0.16420882  1
  In  In11  1  0.35061811  0.33210391  0.66420882  1
  In  In12  1  0.50000000  -0.00000000  -0.00000000  1
  In  In13  1  0.50000000  -0.00000000  0.50000000  1
  In  In14  1  0.50000000  0.50000000  0.50000000  1
  In  In15  1  -0.00000000  -0.00000000  -0.00000000  1
  S  S16  1  0.93492718  0.41303293  0.82606686  1
  S  S17  1  0.08696707  0.10886132  0.67393314  1
  S  S18  1  0.08696707  0.56507282  0.67393314  1
  S  S19  1  0.60886132  0.58696707  0.17393314  1
  S  S20  1  0.06507282  0.58696707  0.17393314  1
  S  S21  1  0.91303293  0.43492718  0.32606686  1
  S  S22  1  0.91303293  0.89113868  0.32606686  1
  S  S23  1  0.39113868  0.41303293  0.82606686  1
  S  S24  1  0.58937982  0.07798985  0.15598170  1
  S  S25  1  0.42201015  0.43339812  0.34401830  1
  S  S26  1  0.42201015  0.91062018  0.34401830  1
  S  S27  1  0.93339812  0.92201015  0.84401830  1
  S  S28  1  0.41062018  0.92201015  0.84401830  1
  S  S29  1  0.57798985  0.08937982  0.65598170  1
  S  S30  1  0.57798985  0.56660188  0.65598170  1
  S  S31  1  0.06660188  0.07798985  0.15598170  1
  S  S32  1  0.25743321  0.25067935  0.50135870  1
  S  S33  1  0.75067935  0.75743321  0.00135870  1
  S  S34  1  0.75067935  0.24392549  0.00135870  1
  S  S35  1  0.25607451  0.74932065  0.49864130  1
  S  S36  1  0.74256679  0.74932065  0.49864130  1
  S  S37  1  0.24932065  0.75607451  0.99864130  1
  S  S38  1  0.24932065  0.24256679  0.99864130  1
  S  S39  1  0.74392549  0.25067935  0.50135870  1

  `
  useEffect(() => {
    const viewer = $3Dmol.createViewer(viewerRef.current, {
      defaultcolors: $3Dmol.rasmolElementColors,
      backgroundColor:`${colors.blueAccent[900]}`
    });
    viewer.addModel(model, "cif" );
    viewer.setStyle({}, {sphere: {color: 'spectrum'}});
    viewer.zoomTo();
    viewer.render();
    return () => {
      viewer.removeAllModels();
      viewer.removeAllSurfaces();
    }
  }, []);

  return (
    <div ref={viewerRef} style={{ border:"5px solid black", borderRadius:"10px", position:"relative", width: "100%", height: "100%" }}></div>
  );
};
export default Molecule;