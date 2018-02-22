/* eslint-disable no-unused-vars,react/prop-types,no-console */

import React from 'react';
import { connect } from 'react-redux';
import { Menu, Image, Container, Input, Icon, Header as Headr } from 'semantic-ui-react';
import { DebounceInput } from 'react-debounce-input';
import { withRouter } from 'react-router-dom';

import { setSearchTerm } from './actionCreators';

class Header extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm !== this.props.searchTerm) {
      this.props.history.push('/search');
    }
  }
  render() {
    return (
      <Menu borderless stackable fixed="top" inverted color="blue">
        <Container>
          <Menu.Item as="a" header href="/">
            <Image size="mini" src="/public/img/logo.png" style={{ marginRight: '1.5em' }} />
            <Headr floated="left" as="h2">Awesome Book Reviews</Headr>
          </Menu.Item>
          <Menu.Item position="right">
            <DebounceInput
              element={Input}
              minLength={3}
              debounceTimeout={800}
              onChange={this.props.handleSearchTermChange}
              value={this.props.searchTerm}
              icon={<Icon color="blue" name="search" inverted circular link />}
              placeholder="Search..."
            />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
