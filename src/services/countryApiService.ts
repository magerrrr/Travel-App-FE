interface ICountryApiService {
  getCountryData: Function,
}

export default class CountryApiService implements ICountryApiService {
  private baseUrl = 'https://restcountries.eu/rest/v2/name';

  private returnedFields = 'fields=name;flag;alpha3Code;latlng;capital;timezones;currencies';

  private getResource = async (countryName: string) => {
    const url = `${this.baseUrl}/${countryName}?${this.returnedFields}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received code is ${response.status}`);
    }

    return response.json();
  };

  public getCountryData = async (countryName: string) => {
    const result = await this.getResource(countryName);
    return result[0];
  };
}
