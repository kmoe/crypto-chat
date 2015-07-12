import React, {
  Component
} from 'react';
import NameLabel from './name-label';
import NameInput from './name-input';
import MessageLabel from './message-label';
import MessageInput from './message-input';
import SendMessageButton from './send-message-button';

export default class Form extends Component {
  render() {
    return (
      <form
        className="pure-form">
        <fieldset>
          <NameLabel />
          <NameInput
            value={this.props.nameInput}
            onChange={this.props.nameInputChanged} />
          <MessageLabel />
          <MessageInput
            value={this.props.messageInput}
            onChange={this.props.messageInputChanged} />
          <SendMessageButton
            onClick={this.props.sendButtonClicked} />
        </fieldset>
      </form>
    );
  }
}
