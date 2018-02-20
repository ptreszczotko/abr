/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
    // this.fun = this.fun.bind(this);
    this.state = {
      name: 'james bond'
    };
  }
  render() {
    return (
      <div>
        <h1>search term is: {this.props.searchTerm}</h1>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: 'simple term', abc: state.searchTerm });

export default connect(mapStateToProps)(SearchBooks);
