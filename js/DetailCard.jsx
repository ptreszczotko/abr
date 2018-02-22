/* eslint-disable react/prop-types,react/no-danger */
import React from 'react';
import { Header, Grid, Image, Rating, Label } from 'semantic-ui-react';

const createMarkup = val => ({ __html: val });
const DetailCard = props => (
  <div>
    <Header dividing as="h2">
      {props.volumeInfo.title} <Rating size="large" icon="star" defaultRating={props.volumeInfo.averageRating} maxRating={5} />
      <Header.Subheader>{props.volumeInfo.subtitle}</Header.Subheader>
    </Header>

    <Grid>
      <Grid.Row>
        <Grid.Column width={12}>
          <div dangerouslySetInnerHTML={createMarkup(props.volumeInfo.description)} />
        </Grid.Column>
        <Grid.Column width={4}>
          <Image src={props.volumeInfo.imageLinks.small} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <div>
      <br />
      {props.volumeInfo.categories.map(category => <Label key={category} color="blue"> {category}</Label>)}
    </div>
  </div>
);

export default DetailCard;
