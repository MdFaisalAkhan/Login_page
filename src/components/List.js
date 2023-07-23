import React from 'react';

import classes from './List.module.css';

const List = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.userName}</h2>
      <h3>{props.country}</h3>
      <p>{props.age}</p>
    </li>
  );
};

export default List;