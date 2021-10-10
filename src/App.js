import React,{useEffect, useState} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import {getPlacesData} from './api';

import { Header, List, Map } from './components';

function App() {

  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    
     })
   }, []);


  useEffect(() => {
    getPlacesData()
  .then(data => setPlaces(data));
   }, [bounds, coordinates]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            coordinates={coordinates}
            setBounds={setBounds}
            places={places}
            setCoordinates={setCoordinates}
            />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
