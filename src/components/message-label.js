import React, {
  Component
} from 'react';

export default class MessageLabel extends Component {
  render() {
    return (
      <label
          htmlFor="message-input">
          Message
      </label>
    );
  }
}
