import React, { useContext } from 'react';
import { CountriesContext } from '../context/countryContext';
import {
  NavigationBar,
  CountriesContainer,
  CountryLink,
  Spinner,
} from '../components';

const Home = () => {
  const {
    allCountries,
    loading,
    formatNumber,
    searchTerm,
    filterByRegion,
  } = useContext(CountriesContext);

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <>
          <NavigationBar />
          <CountriesContainer>
            {allCountries
              .filter((country) => country.region.includes(filterByRegion))
              .filter((country) =>
                country.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((country) => (
                <CountryLink
                  key={country.alpha3Code}
                  code={country.alpha3Code}
                  image={country.flag}
                  name={country.name}
                  pop={formatNumber(country.population)}
                  region={country.region}
                  capital={country.capital}
                />
              ))}
          </CountriesContainer>
        </>
      )}
    </>
  );
};

export default Home;
