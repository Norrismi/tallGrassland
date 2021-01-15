import React, { useState } from "react";
import ReactMapGL, { Marker } from 'react-map-gl'
import red_pin from '../../../assets/red_pin.png'
import './listingDetails.css'


const ListingMap = (props) => {

    const [viewport, setViewport] = useState({
        latitude: props[0],
        longitude: props[1],
        zoom: 17,
        // zoom: 5,
        height: '500px',
        width: '100%',

    });



    return (
        <div className='map_container'>
            <ReactMapGL {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                // mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
                mapStyle='mapbox://styles/norrismi/ckjj9pi7n0ez01as1sk0z1hmo'
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}
            >
                <Marker className='map_marker-container' latitude={viewport.latitude} longitude={viewport.longitude}>
                    <img className='map_red-pin' src={red_pin} alt='marker of property' />
                </Marker>
            </ReactMapGL>
        </div>
    );
}

export default ListingMap;
