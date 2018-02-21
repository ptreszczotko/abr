/* eslint-disable react/prop-types,no-console */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

const Foo = props => (
  <div>
    <h2>Simple component: Foo</h2>

    <input onChange={props.handleSearch} type="text" placeholder="Search" />
    <pre>{JSON.stringify(props.searchTerm, null, 2)}</pre>
    <Link to="/xyz">here</Link>
  </div>
);

const mapStateToProps = state => ({
  searchT: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  handleSearch(ev) {
    console.log('ev:', ev.target);
    dispatch(setSearchTerm(ev.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Foo);
