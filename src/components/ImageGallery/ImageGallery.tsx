import * as React from 'react';
import {
  CircularProgress,
} from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import { apiGet, translateText } from '../../utils';

import './ImageGallery.scss';

type SlideType = {
  original: string;
  thumbnail: string;
  description?: string | null;
};

type PlaceResponseType = {
  preview?: {
    source: string;
    width: number;
  };
  wikipedia_extracts?: {
    text: string;
  };
};

type AllPlacesResponseType = {
  xid: string;
};

const defaultCoords = {
  lat: 53.9,
  lon: 27.56667,
};

const CountryImageGallery = ({ name = 'minsk', lang = 'en' }) => {
  const [images, setImages] = React.useState<SlideType[] | undefined>();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let shouldCancel = false;
    const results: SlideType[] = [];

    const getData = async () => {
      const geoNameData = (await apiGet('geoname', `name=${name}`)) || defaultCoords;
      const placesQuery = `radius=3000&limit=8&offset=5&lon=${geoNameData.lon}&lat=${geoNameData.lat}&rate=2&format=json`;
      apiGet('radius', placesQuery).then((placesData: AllPlacesResponseType[]) => {
        if (!shouldCancel && placesData) {
          Promise.all(
            placesData.map(async (item: AllPlacesResponseType) => {
              const data: PlaceResponseType = await apiGet(`xid/${item.xid}`, '');
              if (data && data.preview) {
                const { source, width } = data.preview;
                if (source) {
                  const original = source.replace(`${width}px`, '920px');
                  const description = await translateText(
                    data.wikipedia_extracts ? data.wikipedia_extracts.text : null,
                    lang,
                  );
                  const place = {
                    original,
                    thumbnail: source,
                    description,
                  };
                  const index = results.findIndex((elem) => place.original === elem.original);
                  if (index < 0) {
                    results.push(place);
                  }
                }
              }
            }),
          ).then(() => {
            setImages(results);
          });
        }
      });
    };
    getData();
    return () => {
      shouldCancel = true;
    };
  }, []);

  const gallery = images
    ? <ImageGallery items={images} onImageLoad={() => setCount(count => count + 1)} />
    : null;
  const loader = (!images || count < images.length)
    ? <div className='overlay'><CircularProgress size={120} /></div>
    : null;

  return (
    <>
      {loader}
      {gallery}
    </>
  );
};

export default CountryImageGallery;
