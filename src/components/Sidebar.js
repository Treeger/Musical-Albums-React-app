import React, { Component } from 'react';
import { connect } from 'react-redux';
import { albumRemove } from '../actions';

@connect(state => (
  state.albums
), { albumRemove })
export default class Sidebar extends Component {

  removeHandle = (id) => {
    this.props.albumRemove({ id });
  }

  render() {
    if (!this.props.albums) return;
    return (
      <ul className="collection sidebar">
        {this.props.albums.map(album => (
          album.saved &&
          <li className="collection-item" key={album.id}>{album.name}
             <a
                onClick={() => this.removeHandle(album.id)}
                href="#!"
                className="secondary-content remove"
             >
              <i className="material-icons">remove</i>
            </a></li>
        ))}
      </ul>
    );
  }
}
