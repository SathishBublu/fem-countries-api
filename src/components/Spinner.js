import React from 'react';

const Spinner = () => (
  <div className='wrapper'>
    <div className='loading__animation'>
      <p className='loading__animation__text'>Loading</p>
      <div className='ring'>
        <div className='ball__holder'>
          <div className='ball'></div>
        </div>
      </div>
    </div>
  </div>
);

export default Spinner;
