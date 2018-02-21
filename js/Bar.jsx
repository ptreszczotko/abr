/* eslint-disable react/prop-types,react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';

class Bar extends React.Component {
  render() {
    return (
      <div>
        <h2>Simple component: Bar</h2>

        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(Bar);
