import * as React from "react";
import axios, { AxiosResponse } from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageGallery from "react-image-gallery";
import { apiGet } from "../../utils/galleryHelpers";

import "./ImageGallery.scss";

type SlideType = {
  original: string;
  thumbnail: string;
  description?: string | null;
};

type AllPlacesResponseType = {
  preview?: {
    source: string;
    width: number;
  };
  wikipedia_extracts?: {
    text: string;
  };
}

const CountryImageGallery = ({ latlng = [53, 27] }) => {
  const [images, setImages] = React.useState<SlideType[] | undefined>();

  React.useEffect(() => {
    let shouldCancel = false;
    let results: SlideType[] = [];
    const geoName = "radius";
    const placesQuery = `radius=100000&limit=8&offset=10&lon=${latlng[0]}&lat=${latlng[1]}&rate=2&format=json`;

    const getData = async () => {
      apiGet(geoName, placesQuery).then(function (data: any) {
        if (!shouldCancel && data) {
          Promise.all(
            data.map(async (res: any) => {
              const data: AllPlacesResponseType = await apiGet(`xid/${res.xid}`, "");
              if (data && data.preview) {
                const { source, width } = data.preview;
                if (source) {
                  const original = source.replace(`${width}px`, "920px");
                  const description = data.wikipedia_extracts ? data.wikipedia_extracts.text : null;
                  const place = {
                    original,
                    thumbnail: source,
                    description,
                  };
                  const index = results.findIndex(elem => place.original === elem.original);
                  if (index < 0) {
                    results.push(place);
                  }
                }
              };
            })).then(() => {
              setImages(results);
            });
        }
      });
    };
    if (latlng) {
      getData();
    };
    return () => { shouldCancel = true };
  }, []);

  return images ? <ImageGallery items={images} /> : null;
};

export default CountryImageGallery;
