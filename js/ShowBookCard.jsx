/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Icon, Grid, Label } from 'semantic-ui-react';

class ShowBookCard extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Card as={Link} to={`/d/${this.props.id}`}>
        <Image src={this.props.image} />
        <Card.Content>
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Meta>{this.props.subtitle}</Card.Meta>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Grid columns={2}>
            <Grid.Column>
              <Icon name="heart" />{this.props.likes} Likes
            </Grid.Column>
            <Grid.Column fluid>
              <Label image>
                <Image avatar size="mini" src={`/public/avatars/${this.props.reviewed}.png`} />
                by {this.props.reviewed}
              </Label>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

ShowBookCard.defaultProps = {
  likes: 0
};

export default ShowBookCard;
