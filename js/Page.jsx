/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Container,
  Visibility,
  Segment,
  Image,
  Card,
  Icon
  // , Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment, Visibility,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import Header from './Header';
import preload from '../data.json';

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em'
};

const CardExampleImageCard = props => (
  <Card href={`/details/${props.details.imdbID}`} raised>
    <Image src={`/public/img/posters/${props.details.poster}`} />
    <Card.Content>
      <Card.Header>{props.details.title}</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>{props.details.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="heart" />
        10 Likes
      </a>
    </Card.Content>
  </Card>
);

class StickyLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuFixed: false,
      overlayFixed: false
    };

    //    this.stickOverlay = this.stickOverlay.bind(this);
    //  this.unStickOverlay = this.stickOverlay.bind(this);
  }

  stickOverlay() {
    this.setState({ overlayFixed: true });
  }

  unStickOverlay() {
    this.setState({ overlayFixed: false });
  }

  render() {
    const { overlayFixed, overlayRect } = this.state;

    return (
      <div>
        <Header top={this.props.searchTerm}/>
        <Container>
          <Visibility offset={80} once={false} onTopPassed={this.stickOverlay} onTopVisible={this.unStickOverlay} style={overlayFixed ? { overlayStyle, overlayRect } : {}} />
          <h3>Here are some of our latest reviews.</h3>
          <Card.Group centered itemsPerRow="4">
            {preload.shows.slice(0, 4).map(show => <CardExampleImageCard key={show.imdbID} details={show} />)}
          </Card.Group>
        </Container>
        <Segment vertical>
          <Container>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis debitis deserunt dolor eaque eligendi esse fugit minus natus neque officia quas quod ratione suscipit tempore unde veniam, vero voluptatibus.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis debitis deserunt dolor eaque eligendi esse fugit minus natus neque officia quas quod ratione suscipit tempore unde veniam, vero voluptatibus.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis debitis deserunt dolor eaque eligendi esse fugit minus natus neque officia quas quod ratione suscipit tempore unde veniam, vero voluptatibus.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis debitis deserunt dolor eaque eligendi esse fugit minus natus neque officia quas quod ratione suscipit tempore unde veniam, vero voluptatibus.
            </p>
          </Container>
        </Segment>
        <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
          <Container textAlign="center">
            footer would go here.
          </Container>
        </Segment>
      </div>
    );
  }
}
const mapPropsToState = state => ({ searchTerm: state.searchTerm });

export default connect(mapPropsToState)(StickyLayout);
export { CardExampleImageCard };
