import React, { Component } from 'react';
import { connect } from 'react-redux';
import { albumsFetch } from '../actions';
import Searchbox from './Searchbox';
import Album from './Album';

@connect(state => (
  state.albums
), { albumsFetch })

export default class Albums extends Component {
  componentDidMount() {
    this.props.albumsFetch();
  }

  renderAlbums(array) {
    return array.map((a) => (
      <Album key={a.id} id={a.id} name={a.name} saved={a.saved} />
    ));
  }

  render() {
    return (
      <div>
      <Searchbox />
      <ul className="collection">
          {!this.props.searched.length ? this.renderAlbums(this.props.albums) :
            this.renderAlbums(this.props.searched)
          }
      </ul>
      </div>
      );
  }
}
