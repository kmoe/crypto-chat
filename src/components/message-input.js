import React, {
  Component
} from 'react';

export default class MessageInput extends Component {
  render() {
    return (
      <input
        id="message-input"
        type="text"
        maxLength="140"
        onChange={(e) => this.props.onChange(e.target.value)}
        value={this.props.value} />
    );
  }
}
