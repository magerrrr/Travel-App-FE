import * as React from 'react';
import { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import FullscreenControl from 'react-leaflet-fullscreen';
import 'react-leaflet-fullscreen/dist/styles.css';
import './style.scss';

import {
  Map,
  TileLayer,
  Marker,
  ScaleControl,
  GeoJSON,
} from 'react-leaflet';

import LayerViewControls from './layer-controls';

type MapProps = {
  capitalPosition: {
    lat: number,
    lng: number,
  },
  countryCode: string,
};

const MapComponent = (props: MapProps) => {
  const {
    capitalPosition,
    countryCode = 'blr',
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [geoData, setGeoData] = useState<any>({ type: 'Feature', properties: { cca2: '' }, geometry: { type: 'Polygon', coordinates: [[]] } });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`../data/${countryCode.toLocaleLowerCase()}.geo.json`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      response
        .json()
        .then((data) => {
          if (data.features) {
            setGeoData(data.features[0]);
            setIsLoading(false);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
    if (!isLoading) {
      setIsLoading(true);
    }
    fetchData();
  }, [countryCode]);

  const content = isLoading ? <CircularProgress size={120} />
    : (
      <Map id='mapid' center={capitalPosition} zoom={5} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png'
        />
        <LayerViewControls />
        <Marker position={capitalPosition} />
        <ScaleControl />
        <FullscreenControl position='topleft' />
        <GeoJSON data={geoData} />
      </Map>
    );
  return (
    <>
      { content }
    </>
  );
};

export default MapComponent;
