import React, { useState } from "react";
import ReactMapGL, { Marker } from 'react-map-gl'
import red_pin from '../../../assets/red_pin.png'
import './listingDetails.css'

const ListingMap = (props) => {

    const [viewport, setViewport] = useState({
        latitude: props[0],
        longitude: props[1],
        zoom: 17,
        height: '100vh',
        width: '100%',

    });


    return (
        <div>
            <ReactMapGL {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle='mapbox://styles/norrismi/ckjj9pi7n0ez01as1sk0z1hmo'
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}
            >
                <Marker latitude={props[0]} longitude={props[1]}>
                    <div><img className='map_red-pin' src={red_pin} alt='red pin marker' /></div>
                </Marker>
            </ReactMapGL>
        </div>
    );
}

export default ListingMap;
