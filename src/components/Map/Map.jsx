import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Tyography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map = ({setCoordinates, coordinates, setBounds}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDrFLUG4g0BuznzWYa5531nmBcwD40922E' }}
                defaultCenter={{}}
                defaultZoom={isMobile ? 15 : 10}
                center={coordinates}
                margin={[ 50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng }); 
                    setBounds({ ne: e.bounds.ne, sw: e.bounds.sw });
                }}
                >
                
            </GoogleMapReact>
        </div>
    )
}

export default Map;
