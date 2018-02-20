/* eslint-disable react/prop-types */
import React from 'react';

const Title = props => (
  <h3>
    {`title: ${props.title}`}
  </h3>
);

const Description = props => <p>{props.text}</p>;

export { Title, Description };
