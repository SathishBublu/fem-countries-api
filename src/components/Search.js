import React, { useContext } from 'react';
import { CountriesContext } from '../context/countryContext';
import search from '../images/search-dark.svg';
import search_light from '../images/search-light.svg';

const Search = () => {
  const { theme, searchTerm, setSearchTerm } = useContext(CountriesContext);

  return (
    <div className='search__input'>
      <input
        className='search__input--bar'
        placeholder='Search for a country...'
        aria-label='Input to search for any country by name'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
        src={`${theme === 'light' ? search : search_light}`}
        alt={`${theme === 'light' ? 'Sun ' : 'Moon '}icon`}
      />
    </div>
  );
};

export default Search;
