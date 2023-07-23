import React from 'react';

import List from './List';
import classes from './Details.module.css';

const Details = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.userNames.map((user) => (
        <List
          key={user.id}
          userName={user.userName}
          country={user.country}
          age={user.age}
        />
      ))}
    </ul>
  );
};

export default Details;