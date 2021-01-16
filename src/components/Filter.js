import React, { useState, useContext } from 'react';
import { CountriesContext } from '../context/countryContext';
import chevron from '../images/chevron-black.svg';
import chevron_white from '../images/chevron-white.svg';

const Filter = () => {
  const { theme, filterByRegion, setFilterByRegion } = useContext(
    CountriesContext
  );
  const [droppedDown, setDroppedDown] = useState(false);
  const listItem = [...document.querySelectorAll('.filter__box__list__item')];

  const showFilterOptions = () => {
    setDroppedDown(!droppedDown);
  };

  listItem.forEach((region) =>
    region.addEventListener('click', (e) => {
      setFilterByRegion(e.target.dataset.region);
      setDroppedDown(!droppedDown);
    })
  );

  return (
    <div className='filter__box'>
      <button
        className='filter__box__deployment'
        onClick={() => showFilterOptions()}
      >
        <span>
          {filterByRegion !== '' ? `${filterByRegion}` : `Filter By Region`}
        </span>
        <img src={`${theme === 'light' ? chevron : chevron_white}`} alt='' />
      </button>
      <ul className={`filter__box__list ${droppedDown ? 'active' : ''}`}>
        {filterByRegion && (
          <li className='filter__box__list__item' data-region=''>
            All
          </li>
        )}
        <li className='filter__box__list__item' data-region='Africa'>
          Africa
        </li>
        <li className='filter__box__list__item' data-region='Americas'>
          Americas
        </li>
        <li className='filter__box__list__item' data-region='Asia'>
          Asia
        </li>
        <li className='filter__box__list__item' data-region='Europe'>
          Europe
        </li>
        <li className='filter__box__list__item' data-region='Oceania'>
          Oceania
        </li>
        <li className='filter__box__list__item' data-region='Polar'>
          Polar
        </li>
      </ul>
    </div>
  );
};

export default Filter;
