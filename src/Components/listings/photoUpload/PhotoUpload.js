import React, { useState, useEffect } from "react";
import {projectStorage, projectFirestore} from '../../../config/firebase'
import ProgressBar from '../ProgressBar/ProgressBar'

// import projectStorage from '../../../config/firebase'
// import projectFirestore from '../../../config/firebase'
import "./photoUplaod.css";

const PhotoUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);




  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };



  return (
    <form className="upload__container">
      <h3 className="mt-5 ml-5 larger">Upload Pictures</h3>
      <input className="uploader m-5" onChange={changeHandler} type="file" />
      <div>
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default PhotoUpload;
