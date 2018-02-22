/* eslint-disable react/prop-types,no-console,no-nested-ternary */
import React from 'react';
import { Container, Menu, Segment, Header as Headr, Image, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import fetchBooks from './actionCreators';
import { fetchOneBook } from './actionCreators';
import DetailCard from './DetailCard';

import Header from './Header';
import Footer from './Footer';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Details'
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount() {
    this.props.callBack(this.props.match.params.id);
    // console.log('this.props:', this.state);
  }

  handleItemClick(event, { name }) {
    this.setState({ activeItem: name });
  }
  render() {
    const { isFetching, activeBook } = this.props;
    const isEmpty = activeBook.length === 0;

    let detailSegment;
    if (this.state.activeItem === 'Details') {
      detailSegment = (
        <Segment loading={isFetching} basic>
          {isEmpty ? (isFetching ? <h2>Loading...</h2> : <Container>Loading Details...</Container>) : <DetailCard {...activeBook.volumeInfo} />}
        </Segment>
      );
    } else if (this.state.activeItem === 'Reviews') {
      detailSegment = (
        <Segment basic>
          <Headr as="h2">Placeholder for the custom reviews. They will be fetched from our CMS via an API call</Headr>
          <Image src="/public/img/media-paragraph.png" /><br />
          <Image src="/public/img/paragraph.png" /><br />
          <Image src="/public/img/paragraph.png" /><br />
        </Segment>
      );
    } else if (this.state.activeItem === 'Where to buy?') {
      detailSegment = (
        <Segment basic>
          <Headr as="h2">Your can purchase this book at:</Headr>
          <ul>
            <li>Amazon (need to figure out how to link to Amazon.com)</li>
            {activeBook.saleInfo.retailPrice &&
              <li>Google Store <Label color="green" as={Link} target="_blank" to={activeBook.saleInfo.buyLink}>${activeBook.saleInfo.retailPrice.amount}</Label></li>}
            <li>Some other fine retailers...</li>
          </ul>
        </Segment>
      );
    }

    return (
      <div>
        <Header />

        <Container style={{ marginTop: '7em' }}>

          <Menu pointing secondary>
            <Menu.Item name="Details" active={this.state.activeItem === 'Details'} onClick={this.handleItemClick} />
            <Menu.Item name="Reviews" active={this.state.activeItem === 'Reviews'} onClick={this.handleItemClick} />
            <Menu.Item color="green" name="Where to buy?" active={this.state.activeItem === 'Where to buy?'} onClick={this.handleItemClick} />
          </Menu>

          {detailSegment}
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm, isFetching: state.isFetching, activeBook: state.books.books });

const mapDispatchToProps = dispatch => ({
  callBack(id) {
    dispatch(fetchOneBook(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
