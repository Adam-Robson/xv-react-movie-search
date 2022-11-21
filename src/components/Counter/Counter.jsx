import React, { useState } from 'react';
import './Counter.css';
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (

    <>
      <h3>increase or decrease?</h3>
      <div className='count'>
        <button onClick={ () => setCounter((prevCount) => prevCount + 1) }>+</button>
        <span>{ counter }</span>
        <button onClick={ () => setCounter((prevCount) => prevCount - 1) }>-</button>
      </div>
    </>
  );
};

export default Counter;