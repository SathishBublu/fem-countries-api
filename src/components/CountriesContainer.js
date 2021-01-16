import React, { useState, useEffect, useContext } from 'react';
import { CountriesContext } from '../context/countryContext';

const CountriesContainer = ({ children }) => {
  const { searchTerm, filterByRegion, error } = useContext(CountriesContext);
  const [gridChildren, setGridChildren] = useState(null);
  let grid = document.querySelector('.main__grid');

  useEffect(() => {
    grid && setGridChildren(grid.children.length);
  }, [searchTerm, filterByRegion, grid]);

  return (
    <>
      <div className='main__grid'>{children}</div>
      {gridChildren === 0 && !error.error && (
        <p className='main__grid__error__msg'>
          No country with the name <span>{searchTerm}</span> found in the{' '}
          <span>{filterByRegion ? `${filterByRegion}` : `All`}</span> region
        </p>
      )}
      {error.error && (
        <div className='network__error'>
          <p className='error__code'>{error.statusCode}</p>
          <p className='error__msg'>Oops, there was an error</p>
        </div>
      )}
    </>
  );
};

export default CountriesContainer;
