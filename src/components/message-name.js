import React, {
  Component
} from 'react';

export default class MessageName extends Component {
  render() {
    return (
      <span
        className="message-name">
        {this.props.name}
      </span>
    );
  }
}
