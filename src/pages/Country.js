import React, { useContext } from 'react';
import { CountriesContext } from '../context/countryContext';
import { Spinner } from '../components';
import { Link } from 'react-router-dom';
import arrow from '../images/arrow-black.svg';
import arrow_white from '../images/arrow-white.svg';

const Country = ({ match, history }) => {
  const { theme, allCountries, loading, formatNumber } = useContext(
    CountriesContext
  );

  const country = allCountries.find(
    (country) => country.alpha3Code === match.params.countryCode
  );

  const countryBorderFullName = (border) => {
    const borderCountry = [...allCountries].filter(
      ({ alpha3Code }) => alpha3Code === border
    );
    return (
      <Link to={`/country/${borderCountry[0].alpha3Code}`}>
        {borderCountry[0].name}
      </Link>
    );
  };

  return (
    <>
      {loading && <Spinner />}
      <button
        className='country__page__back__btn'
        onClick={() => history.goBack()}
      >
        <div className='country__page__back__btn--inner'>
          <span>Back</span>
          <img
            src={`${theme === 'light' ? arrow : arrow_white}`}
            alt='Arrow to go back to main page'
          />
        </div>
      </button>
      {country && (
        <div className='country__page'>
          <div className='country__page__image__container'>
            <img
              className='country__page__image'
              src={country.flag}
              alt={`${country.name}'s national flag`}
            />
          </div>
          <div className='country__page__textbox'>
            <h1 className='country__page__textbox--title'>{country.name}</h1>
            <div className='country__page__textbox__metadata'>
              <ul className='country__page__textbox__metadata--list-1'>
                <li className='country__page__textbox__metadata--name'>
                  Native Name: <span>{country.nativeName}</span>
                </li>
                <li className='country__page__textbox__metadata--population'>
                  Population: <span>{formatNumber(country.population)}</span>
                </li>
                <li className='country__page__textbox__metadata--region'>
                  Region: <span>{country.region}</span>
                </li>
                <li className='country__page__textbox__metadata--subregion'>
                  Sub Region: <span>{country.subregion}</span>
                </li>
                <li className='country__page__textbox__metadata--capital'>
                  Capital: <span>{country.capital}</span>
                </li>
              </ul>
              <ul className='country__page__textbox__metadata--list-2'>
                <li className='country__page__textbox__metadata--domain'>
                  Top Level Domain: <span>{country.topLevelDomain}</span>
                </li>
                <li className='country__page__textbox__metadata--currency'>
                  {country.currencies.length > 1
                    ? `Currencies: `
                    : `Currency: `}
                  {country.currencies
                    .filter(({ name }) => name !== null)
                    .map(({ name, symbol, code }, i) => (
                      <span key={name}>
                        <span className='country__page__textbox__metadata--currency-symbol'>
                          {symbol && `${symbol} `}
                        </span>
                        <span className='country__page__textbox__metadata--currency-name'>
                          {name}
                        </span>
                        <span className='country__page__textbox__metadata--currency-code'>
                          {code && country.currencies.length === i + 1
                            ? ` (${code}) `
                            : ` (${code}), `}
                        </span>
                      </span>
                    ))}
                </li>
                <li className='country__page__textbox__metadata--languages'>
                  {country.languages.length > 1 ? `Languages: ` : `Language: `}
                  {country.languages.map(({ name }, i) => (
                    <span key={name}>
                      <span className='country__page__textbox__metadata--languages-lang'>
                        {country.languages.length === i + 1
                          ? `${name} `
                          : `${name}, `}
                      </span>
                    </span>
                  ))}
                </li>
              </ul>
            </div>
            <div className='country__page__textbox__borders'>
              <ul className='country__page__textbox__borders--list'>
                <li className='country__page__textbox__borders--list-title'>
                  Border Countries:{' '}
                </li>
                {country.borders.length > 0 ? (
                  country.borders.map((border) => (
                    <li className='country__page__textbox__border' key={border}>
                      <span>{countryBorderFullName(border)}</span>
                    </li>
                  ))
                ) : (
                  <li className='no__borders'>None</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Country;
