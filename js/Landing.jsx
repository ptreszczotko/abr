/* eslint-disable react/prop-types, jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header as Headr, Grid, Image, Segment, Divider } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';
import preload from '../data.json';

// import type { RouterHistory } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';
import ShowBookCard from './ShowBookCard';

class Landing extends Component {
  goToSearch = event => {
    event.preventDefault();
    this.props.history.push('/search');
  };
  render() {
    const numberOfCards = 4;
    return (
      <div className="landing">
        <Header />
        <Container style={{ marginTop: '7em' }}>
          <Headr as="h1">Here are some of our recent reviews...</Headr>
          <Grid stackable>
            <Grid.Row columns={numberOfCards}>
              {preload && preload.books.slice(0, numberOfCards).map(book => <Grid.Column><ShowBookCard key={book.id} {...book} /></Grid.Column>)}
            </Grid.Row>
          </Grid>
          <Divider />
          <Segment style={{ padding: '8em 2em' }} vertical>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={8}>
                  <Headr as="h3" style={{ fontSize: '2em' }}>Some marketing propaganda...</Headr>
                  <p style={{ fontSize: '1.33em' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorem error expedita fuga in nihil repellat! Fugiat, ipsam tempore. Aut earum eos, magni maxime nemo quos rerum sunt voluptas? Minima?
                  </p>
                  <Headr as="h3" style={{ fontSize: '2em' }}>Another placeholder</Headr>
                  <p style={{ fontSize: '1.33em' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deserunt dolores esse labore ratione! Accusamus, aspernatur aut debitis dignissimos doloribus illum, in ipsa iste laboriosam odit possimus quo, reprehenderit ullam?
                    A alias, aspernatur blanditiis consequatur dignissimos distinctio dolores error, exercitationem facere itaque molestias neque quidem rem repudiandae similique tempora tenetur unde voluptas?

                  </p>
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                  <Image bordered rounded size="large" src="/public/white-image.png" />
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Segment>

        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
