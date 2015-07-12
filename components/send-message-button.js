import React, {
  Component
} from 'react';

export default class SendMessageButton extends Component {
  render() {
    return (
      <button
        className="pure-button pure-button-primary"
        type="button"
        onClick={this.props.onClick}>
        Encrypt &amp; send
      </button>
    );
  }
}
