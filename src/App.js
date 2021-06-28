import './App.css';
import { FormControl, MenuItem, Select, Card, CardContent } from '@material-ui/core';
import { useEffect, useState } from 'react';
import InfoBox from './InfoBox';
import Map from './Map';

function App() {
  // https://disease.sh/v3/covid-19/countries

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    //console.log('YOUR country code>>>>', countryCode);
    setCountry(countryCode);
  }

  useEffect(() => {
    // async ->  send a request, wait for it, do something with it

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {

          const countries = data.map(
            (country) => (
              {
                name: country.country,
                value: country.countryInfo.iso3
              })
          );
          console.log(countries);
          setCountries(countries)

        });
    };
    getCountriesData();
  }, [])

  return (
    <div className="app">
      <div className="app__left">
        {/* Header */}
        {/* Title + Select input dropdown field */}
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown" >
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              {/* Loop through al the countries and show a drop down list of the options */}
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem key={country.value} value={country.value}>{country.name}</MenuItem>
              ))}

            </Select>
          </FormControl>
        </div>

        <div className="app__stats">

          <InfoBox title="Coronavirus Cases" cases={123} total={200} />

          <InfoBox title="Recovered" cases={1234} total={2000} />

          <InfoBox title="Deaths" cases={12223} total={20000} />
        </div>



        {/* Map */}
        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          {/* Table */}
          <h3>Wordwid new cases</h3>
          {/* Graph */}

        </CardContent>
      </Card>


    </div>
  );
}

export default App;
