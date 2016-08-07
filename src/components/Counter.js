import React from 'react';
import classes from './Counter.scss';

export const Counter = ({ counter, onIncrement, onDoubleAsync }) => (
  <div className="text-center">
    <h2 className={classes.counterContainer}>
      Counter:
      {' '}
      <span className={classes['counter--green']}>
        {counter}
      </span>
    </h2>
    <button className="btn btn-default" onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button className="btn btn-default" onClick={onDoubleAsync}>
      Double (Async)
    </button>
  </div>
);

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  onDoubleAsync: React.PropTypes.func.isRequired,
  onIncrement: React.PropTypes.func.isRequired,
};

export default Counter;
