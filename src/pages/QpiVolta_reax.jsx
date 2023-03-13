import React from 'react'
import Molecule from '../components/Molecule3d'


const moleculeData = `
  C1=CC=C(C=C1)C(=O)NC2=NC(=NC=C2N)N
  C1=CC=C(C=C1)C(=O)NC2=NC(=NC=C2N)N
  C1=CC=C(C=C1)C(=O)NC2=NC(=NC=C2N)N
  C1=CC=C(C=C1)C(=O)NC2=NC(=NC=C2N)N
  C1=CC=C(C=C1)C(=O)NC2=NC(=NC=C2N)N
  C1=CC=C(C=C1)C(=O)NC2=NC(=NC=C2N)N
  C1=CC=C(C=C1)C(=O)NC2=NC(=NC=C2N)N
`;

const QpiVolta_reax = () => {
  return (
    <div>
 <Molecule data={moleculeData} />
     </div>
  )
}

export default QpiVolta_reax
