import React, {useEffect, useState} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import {getPlacesData} from './api';

import { Header, List, Map } from './components';

const App = () => {

  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    
     })
   }, []);


  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => { console.log(data); setPlaces(data) });
   }, [bounds, coordinates]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            coordinates={coordinates}
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            places={places}
            />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
