/* eslint-disable react/prop-types,react/no-danger */
import React from 'react';
import { Header, Grid, Image, Rating, Label } from 'semantic-ui-react';

const createMarkup = val => ({ __html: val });
const DetailCard = props => (
  <div>
    <Header dividing as="h2">
      {props.title} <Rating size="large" icon="star" defaultRating={props.averageRating} maxRating={5} />
      <Header.Subheader>{props.subtitle}</Header.Subheader>
    </Header>

    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={12}>
          <div style={{ fontSize: '1.1em' }} dangerouslySetInnerHTML={createMarkup(props.description)} />
        </Grid.Column>
        <Grid.Column width={4}>
          <Image src={props.imageLinks.small} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <div>
      <br />
      {props.categories.map(category => <Label key={category} color="blue"> {category}</Label>)}
    </div>
  </div>
);

DetailCard.defaultProps = {
  imageLinks: {
    small: '/public/white-image.png'
  },
  categories: []
};

export default DetailCard;
