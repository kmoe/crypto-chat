import React, {
  Component
} from 'react';
import _ from 'lodash';
import MessageName from './message-name';
import MessageText from './message-text';

//TODO add explanatory comment for this crazy thing
function _piecewiseDuplicate(array) {
  return _.flatten(_.map(array, function(value) {
    return _.fill([0, 0], value);
  }));
}

export default class MessagePanel extends Component {

  render() {

    //N.B. we do not optimistically render pending messages
    const piecewiseDuplicatedMessages = _piecewiseDuplicate(this.props.messages);
    return (
      <dl>
         {piecewiseDuplicatedMessages.map(function(message, index) {
            return index % 2
              ? <MessageText
                  key={index}
                  text={message.text} />
              : <MessageName
                  key={index}
                  name={message.name} />;
          })}
      </dl>
    );
  }
}
