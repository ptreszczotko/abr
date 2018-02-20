/* eslint-disable react/prop-types, jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header as Headr } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';
import preload from '../data.json';

// import type { RouterHistory } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';
import ShowCard from './ShowCard';

class Landing extends Component {
  goToSearch = event => {
    event.preventDefault();
    this.props.history.push('/search');
  };
  render() {
    return (
      <div className="landing">
        <Header />
        <Container style={{ marginTop: '7em' }}>
          <Headr as="h1">Here are some of our recent reviews...</Headr>
          {preload && preload.shows.slice(0, 4).map(book => <ShowCard key={book.imdbID} {...book} />)}
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
