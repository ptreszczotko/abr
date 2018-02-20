import React from 'react';
import { Container, Grid, Header, List, Divider, Segment } from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
    <Container textAlign="center">
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Products" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Other stuff" />
            <List link inverted>
              <List.Item as="a">Link One</List.Item>
              <List.Item as="a">Link Two</List.Item>
              <List.Item as="a">Link Three</List.Item>
              <List.Item as="a">Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={10}>
            <Header inverted as="h4" content="Footer Header" />
            <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider inverted section />
    </Container>
  </Segment>
);

export default Footer;
