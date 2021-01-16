import React, { useState, useEffect, createContext } from 'react';

export const CountriesContext = createContext();

const CountriesContextProvider = (props) => {
  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: false });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterByRegion, setFilterByRegion] = useState('');
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  );

  useEffect(() => {
    getCountries('https://restcountries.eu/rest/v2/all');
  }, []);

  const getCountries = async (allCountriesAPI) => {
    setLoading(true);

    let returned = await await fetch(allCountriesAPI);

    if (returned.ok) {
      let result = await returned.json();
      setAllCountries([...result]);
    } else {
      setError({
        error: true,
        statusCode: returned.status,
        statusText: returned.statusText,
      });
    }
    setLoading(false);
  };

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <CountriesContext.Provider
      value={{
        allCountries,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        filterByRegion,
        setFilterByRegion,
        theme,
        setTheme,
        formatNumber,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContextProvider;
