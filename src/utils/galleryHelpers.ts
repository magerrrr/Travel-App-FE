const apiKey = "5ae2e3f221c38a28845f05b6f59fbba3c196710360a8bb50471d1d8b";
const otmBaseUrl = "https://api.opentripmap.com/0.1/en/places/";

export const apiGet = (method: string, query?: string) => {
  return new Promise<any>(function (resolve, reject) {
    let otmAPI = `${otmBaseUrl}${method}?apikey=${apiKey}`;
    if (query) {
      otmAPI += "&" + query;
    }
    fetch(otmAPI)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(function (err) {
        throw new Error(`Could not fetch ${otmAPI}, received code is ${err.status}`);
      });
  });
};
