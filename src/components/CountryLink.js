import React from 'react';
import { Link } from 'react-router-dom';

const CountryLink = ({ code, image, name, pop, region, capital }) => (
  <Link to={`/country/${code}`}>
    <div className='country__thumb'>
      <div className='country__thumb__image__container'>
        <img
          className='country__thumb__image'
          src={image}
          alt={`${name}'s national flag`}
        />
      </div>
      <div className='country__thumb__textbox'>
        <h3 className='country__thumb__textbox--name'>{name}</h3>
        <small className='country__thumb__textbox--population'>
          Population: <span>{pop}</span>
        </small>
        <small className='country__thumb__textbox--region'>
          Region: <span>{region}</span>
        </small>
        <small className='country__thumb__textbox--capital'>
          Capital: <span>{capital}</span>
        </small>
      </div>
    </div>
  </Link>
);

export default CountryLink;
