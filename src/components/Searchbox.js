import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { albumsSearch } from '../actions';

@connect(state => (
  state.albums
), { albumsSearch })

export default class Searchbox extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '' };
    this.performSearch = debounce(this.performSearch, 100);
  }


componentWillUpdate(nextProps) {
  if (nextProps.albums !== this.props.albums) {
    this.props.albumsSearch(this.state.searchValue);
  }
}

  searchChange = (e) => {
    this.setState({ searchValue: e.target.value });
    this.performSearch(e.target.value);
  }

  performSearch(s) {
    this.props.albumsSearch(s);
  }

  render() {
    return (
      <input onChange={this.searchChange} value={this.state.searchValue} />
    );
  }
}
