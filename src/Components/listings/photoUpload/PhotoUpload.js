import React, { useState } from "react";
import ProgressBar from '../ProgressBar/ProgressBar'
import "./photoUplaod.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

const PhotoUpload = ({auth}) => {

console.log(auth)

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const {email} = auth


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

    // if(email != "admin@gmail.com"){
    //       return <Redirect to='/'/>
    // }



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

// export default PhotoUpload;

const mapStateToProps = (state) => {


    return {
        auth: state.firebase.auth
    };
};


export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "properties" }])
)(PhotoUpload);
