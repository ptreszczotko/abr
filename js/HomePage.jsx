/* eslint-disable react/require-default-props,react/prop-types */
import React from 'react';
import { Visibility, Menu, Card, Image, Container, Button, Segment, Input, Icon, Grid, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const HomepageHeading = ({ mobile }) => (
  <Container>
    <Header
      as="h1"
      content="We review the books for you."
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em'
      }}
    />

    <Segment style={{ padding: '8em 0em' }} inverted textAlign="middle">
      <Grid container verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={16}>
            <Card.Group>
              <CardExampleImageCard src="/public/img/posters/a.jpg" />
              <CardExampleImageCard src="/public/img/posters/b.jpg" />
              <CardExampleImageCard src="/public/img/posters/v.jpg" />
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

const CardExampleImageCard = props => (
  <Card>
    <Image src={props.src} />
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        10 Friends
      </a>
    </Card.Content>
  </Card>
);

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: true
    };
  }
  render() {
    const fixed = this.state.fixed;
    return (
      <div>

        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign="center" style={{ minHeight: 700, padding: '1em 0em' }} vertical>
            <Menu fixed={fixed ? 'top' : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size="large">
              <Container>
                <Menu.Item as="a" active>Home</Menu.Item>
                <Menu.Item as="a">Work</Menu.Item>
                <Menu.Item as="a">Company</Menu.Item>
                <Menu.Item><Input size="big" action={{ icon: 'search' }} placeholder="Search..." /></Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}>Log in</Button>
                  <Button as="a" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }}>
          <Grid container verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={16}>
                <Card.Group>
                  <CardExampleImageCard src="/public/img/posters/a.jpg" />
                  <CardExampleImageCard src="/public/img/posters/b.jpg" />
                  <CardExampleImageCard src="/public/img/posters/v.jpg" />
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default HomePage;
