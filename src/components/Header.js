import React, { useEffect, useContext } from 'react';
import { CountriesContext } from '../context/countryContext';
import { Link } from 'react-router-dom';
import sun from '../images/sun.svg';
import moon from '../images/moon.svg';

const Header = () => {
  const { theme, setTheme, setSearchTerm, setFilterByRegion } = useContext(
    CountriesContext
  );
  const htmlTag = document.body.parentElement;

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      setTheme('light');
      localStorage.setItem('theme', 'light');
      htmlTag.setAttribute('data-theme', 'light');
    } else {
      htmlTag.setAttribute('data-theme', localStorage.getItem('theme'));
    }
  }, []);

  const themeToggle = () => {
    if (theme !== 'light') {
      localStorage.setItem('theme', 'light');
      htmlTag.setAttribute('data-theme', localStorage.getItem('theme'));
      setTheme('light');
    } else {
      localStorage.setItem('theme', 'dark');
      htmlTag.setAttribute('data-theme', localStorage.getItem('theme'));
      setTheme('dark');
    }
  };

  const resetSearch = () => {
    setFilterByRegion('');
    setSearchTerm('');
  };

  return (
    <div className='header'>
      <Link to='/' onClick={() => resetSearch()}>
        <h1 className='header__heading'>Where in the world?</h1>
      </Link>
      <button className='header__theme__toggle' onClick={() => themeToggle()}>
        <img
          className={`${theme === 'light' ? 'moon' : 'sun'}`}
          src={`${theme === 'light' ? moon : sun}`}
          alt={`${theme === 'light' ? 'Moon' : 'Sun'} icon`}
        />
        <span className='header__theme__toggle--mode'>
          {theme === 'light' ? `Dark` : `Light`} Mode
        </span>
      </button>
    </div>
  );
};

export default Header;
