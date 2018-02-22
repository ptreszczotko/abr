/* eslint-disable react/prop-types,react/no-danger */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

const createMarkup = val => ({ __html: val });

const ShowBookCardNew = props => (
  <div>
    <Card as={Link} to={`/d/${props.id}`}>
      <Image src={props.imageLinks.thumbnail} />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>{props.subtitle}</Card.Meta>

        <Card.Description><div dangerouslySetInnerHTML={createMarkup(props.textSnippet)} /></Card.Description>
      </Card.Content>
      <Card.Content extra>
        {props.authors && `Published by: ${props.authors.join(', ')}`}
      </Card.Content>
    </Card>
  </div>
);

ShowBookCardNew.defaultProps = {
  title: 'No title',
  subtitle: '',
  description: 'No description provided.',
  imageLinks: {
    thumbnail: '/public/white-image.png'
  },

  textSnippet: 'No description provided.'
};

export default ShowBookCardNew;
