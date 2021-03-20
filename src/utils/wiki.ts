const wikiBaseUrl =
  'wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles=';

export const wikiGet = (query = 'belarus', lang: string) => {
  return new Promise<any>(function (resolve, reject) {
    let wikiAPI = `https://${lang}.${wikiBaseUrl}${query}`;
    fetch(wikiAPI)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(function (err) {
        throw new Error(`Could not fetch ${wikiAPI}, received code is ${err.status}`);
      });
  });
};
