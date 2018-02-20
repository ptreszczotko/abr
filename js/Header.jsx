/* eslint-disable no-unused-vars,react/prop-types */

import React from 'react';
import { connect } from 'react-redux';
import { Menu, Image, Container, Input, Icon } from 'semantic-ui-react';
import { setSearchTerm } from './actionCreators';

const Header = props => (
  <Menu fixed="top" inverted color="blue">
    <Container>
      <Menu.Item as="a" header href="/">
        <Image size="mini" src="/public/img/logo.png" style={{ marginRight: '1.5em' }} />
        Awesome Book Reviews
      </Menu.Item>
      <Menu.Item position="right">
        <Input onChange={props.handleSearchTermChange} value={props.searchTerm} icon={<Icon color="blue" name="search" inverted circular link />} placeholder="Search..." />
      </Menu.Item>
    </Container>
  </Menu>
);

Header.defaultProps = {
  showSearch: false
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
