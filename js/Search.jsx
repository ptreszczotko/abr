/* eslint-disable react/prop-types,no-nested-ternary,no-console,no-unused-vars */

import React from 'react';
import { connect } from 'react-redux';
import { Container, Header as Headr, Segment, Grid } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';
import { fetchBooks } from './actionCreators';
import ShowBookCardNew from './ShowBookCardNew';

class Search extends React.Component {
  componentDidMount() {
    console.log('component did MOUNT!', this.props);

    this.props.callBack(this.props.searchTerm);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm !== this.props.searchTerm) {
      // event.preventDefault();
      console.log('search changed!', this.nextProps);
    }
  }

  render() {
    const { isFetching, books } = this.props;
    const isEmpty = books.length === 0;
    return (
      <div>
        <Header />
        <Container style={{ marginTop: '7em' }}>
          <Segment loading={this.props.isFetching} basic>
            <Headr as="h2">Search results for: {this.props.searchTerm}</Headr>
            {isEmpty
              ? isFetching ? <h2>Loading...</h2> : <Container>Loading Details...</Container>
              : <Grid stackable>
                  <Grid.Row columns={5}>
                    {books.length && books.map(book => <Grid.Column key={book.id}><ShowBookCardNew id={book.id} {...book.volumeInfo} {...book.searchInfo} /></Grid.Column>)}
                  </Grid.Row>
                </Grid>}
          </Segment>

        </Container>
        <Footer />
      </div>
    );
  }
}

Search.defaultProps = {
  searchTerm: '',
  books: []
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  books: state.books.books,
  isFetching: state.books.isFetching
});

const mapDispatchToProps = dispatch => ({
  callBack(keyword = 'mike') {
    dispatch(fetchBooks(keyword));
  }
});

export const Unwrapped = Search;
export default connect(mapStateToProps, mapDispatchToProps)(Search);
