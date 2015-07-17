import React, {
  Component
} from 'react';
import _ from 'lodash';
import MessageName from './message-name';
import MessageText from './message-text';

//input [1, 2, 3]
//output [1, 1, 2, 2, 3, 3]
function _piecewiseDuplicate(array) {
  return _.flatten(_.map(array, function(value) {
    return _.fill([0, 0], value);
  }));
}

export default class MessagePanel extends Component {

  render() {

    //we can't do this the easy way as <dl>s can't have anything but <dt> and
    //<dd> as children, and JSX does not permit adjacent elements with no
    //enclosing element
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
