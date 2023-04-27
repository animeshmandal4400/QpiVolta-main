import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from "react-router-dom";

const FileUploader =() => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  function handleDrop(acceptedFiles) {
    setSelectedFile(acceptedFiles[0]);
  }

  function handleSubmit(event) { 
    event.preventDefault();
    if(selectedFile) {
      const reader = new FileReader();
      reader.readAsText(selectedFile);
      reader.onload = function(e) {
        const fileContent = e.target.result;
        localStorage.setItem("model", fileContent);
        navigate("/Genmol");
      }
    }
  }
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop:handleDrop });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          {...getRootProps()}
          style={{
            border: '2px dashed gray',
            padding: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            backgroundColor: isDragActive ? 'lightgray' : ''
          }}
        >
          <input {...getInputProps()} />
          {selectedFile ? (
            <div
            style={{width:"250px"}}
            >
              <p>Selected file:  {selectedFile.name}</p>
              
            </div>
          ) : (
            <p>Drag and drop a file here, or click to select a file</p>
          )}
        </div>
        <Button type="submit" disabled={!selectedFile} variant="contained" style={{marginTop:"5px"}}>
          Upload
        </Button>
      </form>
    </div>
  );
}

export default FileUploader;
