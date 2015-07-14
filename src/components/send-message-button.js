import React, {
  Component
} from 'react';
import _ from 'lodash';

export default class SendMessageButton extends Component {
  constructor(props) {
    super(props);
    this._onClick = _.bind(this.onClick, this);
  }

  render() {
    return (
      <button
        className="pure-button pure-button-primary"
        type="submit"
        onClick={this._onClick}>
        Encrypt &amp; send
      </button>
    );
  }

  onClick(e) {
    e.preventDefault();
    this.props.onClick();
  }
}
