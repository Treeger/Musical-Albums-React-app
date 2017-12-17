import React, { Component } from 'react';
import { connect } from 'react-redux';
import { albumSave, albumRemove } from '../actions';

@connect(null, { albumSave, albumRemove })
export default class Album extends Component {

  saveHandle = () => {
    this.props.albumSave({ id: this.props.id });
  }

  removeHandle = () => {
    this.props.albumRemove({ id: this.props.id });
  }

  renderSaveOrRemoveLink() {
    if (this.props.saved) {
      return (
        <a onClick={this.removeHandle} href="#!" className="secondary-content remove">
          <i className="material-icons">remove</i>
        </a>
      );
    }
        return (
          <a onClick={this.saveHandle} href="#!" className="secondary-content">
            <i className="material-icons">save</i>
          </a>
        );
  }

  render() {
    const { name } = this.props;
    return (
      <li className="collection-item">
        {name} {this.renderSaveOrRemoveLink()}
      </li>
    );
  }
}
