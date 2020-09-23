import React, { Component } from "react";
import "./carousel.css";
import { Carousel } from "react-bootstrap";
import firebase from "../../../config/firebase";
import one from "../../../assets/05000619000.jpg";
import two from "../../../assets/30504039000.jpg";
import three from "../../../assets/30506238000.jpg";
import { storage } from "firebase-admin";

class carousel extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     brawley1: "",
  //   };
  //   this.getImage("brawley1");
  // }

  
  
  
  // getImage(image){
  //   let {state} = this
  //   storage.child(`${image}.png`).getDownloadURL().then((url) => {
  //     state[image] = url
  //     this.setState(state)
  //   }).catch((error)=> {
  //     console.error(error)
  //   })
  // }
  
  
  render() {
    //console.log(property.pic1);

    // Create a reference with an initial file path and name
const storage = firebase.storage();
const pathReference = storage.ref('Brawley St./Brawley 1.jpg');

// Create a reference from a Google Cloud Storage URI
const gsReference = storage.refFromURL('gs://tall-graand.appspot.com/Brawley St./Brawley 1.jpg')

// Create a reference from an HTTPS URL
// Note that in the URL, characters are URL escaped!
      //Open  link name
const httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/tall-graand.appspot.com/o/Brawley%20St.%2FBrawley%201.jpg');
    


    return (
      <Carousel className="carousel__container mt-3 mb-1 ">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel__picture"
            src={one}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel__picture"
            src={two}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel__picture"
            src={three}
            alt="Third slide"
          />
        </Carousel.Item>

        {/* <div>
          Hello new image
          <img src={this.state.brawley1} alt='propertyPic1'/>
        </div> */}
      </Carousel>
    );
  }
}

export default carousel;
