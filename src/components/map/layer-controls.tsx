import * as React from 'react';
import { LayersControl, TileLayer } from 'react-leaflet';
import { mapLayouts } from './map-options';

const { BaseLayer } = LayersControl;

const LayerViewControls = () => {
  const baseLayers = mapLayouts.map(
    (layout) => {
      const {
        name,
        url,
        attributes,
        checked = false,
      } = layout;

      return (
        <BaseLayer checked={checked} name={name} key={name}>
          <TileLayer
            attribution={attributes}
            url={url}
          />
        </BaseLayer>
      );
    },
  );

  return (
    <LayersControl position='topright'>
      { baseLayers }
    </LayersControl>
  );
};

export default LayerViewControls;
