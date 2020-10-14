import React from 'react';
import firebase from '../../../config/firebase'

const cardPicture = () => {


    // function addTestFile() {
    //   const storageRef = firebase.storage().ref()
    //   const fileRef = storageRef.child('test.txt')

    //    fileRef.getDownloadURL().then(function(url)
       
    //   )

    // }
  
    return (
      <div>
        <h1>Example Upload</h1>
        <button >Upload Example File</button>
      </div>
    )
}

export default cardPicture;
