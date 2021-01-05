import React, { useState } from "react";
import ReactMapGL, {Marker} from 'react-map-gl'
import red_pin  from  '../../../assets/red_pin.png'
import './listingDetails.css'

const ListingMap = (props) => {

    console.log(props)


    const [viewport, setViewport] = useState({
        latitude: 36.4541699109,
        longitude: -92.914744095,
        zoom: 17,
        height: '100vh',
        width: '100%',

    });


    return (
        <div>

            <ReactMapGL {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle='mapbox://styles/norrismi/ckjj9pi7n0ez01as1sk0z1hmo'
            onViewportChange = {viewport => {
                setViewport(viewport)
            }}
            >
                <Marker latitude={36.4541699109} longitude={-92.914744095}>
                   <div><img className='map_red-pin' src={red_pin} alt='red pin marker'/></div>
                </Marker>
        </ReactMapGL>
        </div>
    );
}

export default ListingMap;
