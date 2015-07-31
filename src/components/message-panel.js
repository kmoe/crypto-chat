import React, {
  Component
} from 'react';
import MessageName from './message-name';
import MessageText from './message-text';

export default class MessagePanel extends Component {

  render() {
    const messages = this.props.messages;

    return (
      <ol role="log" aria-relevant="additions">
         {messages.map(function(message, index) {
            const ariaLive = index === messages.length - 1 ? 'assertive' : undefined;

            return (
              <li
                aria-live={ariaLive}>
               <MessageName
                  key={index + 100}
                  name={message.name} />
                <MessageText
                  key={index}
                  text={message.text} />
                </li>
              );
          })}
      </ol>
    );
  }
}
