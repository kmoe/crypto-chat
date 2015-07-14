import React, {
  Component
} from 'react';
import _ from 'lodash';
import * as actions from '../actions/actions';
const Firebase = require('firebase');

const firebaseRef = new Firebase('https://cypto-chat.firebaseio.com/chat');

export default class FirebaseConnector extends Component {

  componentWillMount() {
    firebaseRef.on('child_added', function(snapshot){
      this.props.dispatch(actions.serverPushedNewMessage(snapshot.val()));
    }.bind(this));
  }

  componentDidUpdate() {
    const dispatch = this.props.dispatch;
    if(this.props.pendingMessages.length) {
      _.each(this.props.pendingMessages, function(message) {
        firebaseRef.push(message);
        dispatch(actions.clientPushedNewMessage());
      });
    }
  }

  componentWillUnmount() {
    firebaseRef.off('child_added');
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
