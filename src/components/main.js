import React, {
  Component
} from 'react';
import MessagePanel from './message-panel';
import Form from './form';
import {
  bindActionCreators
} from 'redux';
import * as actions from '../actions/actions';
import {
  connect
} from 'redux/react';
const Firebase = require('firebase');

@connect(state => ({
  messages: state.default.messages,
  nameInput: state.default.nameInput,
  messageInput: state.default.messageInput
}))
export default class Main extends Component {

  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
  }

  componentWillMount() {
    const firebaseRef = new Firebase('https://blinding-fire-7202.firebaseio.com/chat');

    firebaseRef.on('child_added', function(snapshot){
      this.dispatch(actions.serverPushedNewMessage(snapshot.val()));
    }.bind(this));
  }

  render() {
    return (
      <div
        className="pure-g">
        <div
          className="pure-u-1-5"/>
        <div
          className="pure-u-4-5">
          <h1>
            Crypto chat
          </h1>
          <MessagePanel
            messages={this.props.messages} />
          </div>
        <div
          className="pure-u-1-5"/>
        <div
          className="pure-u-4-5">
          <Form
            messageInput={this.props.messageInput}
            nameInput={this.props.nameInput}
            {...bindActionCreators(actions, this.props.dispatch)} />
        </div>
      </div>
    );
  }
}
