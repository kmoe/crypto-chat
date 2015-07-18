import React, {
  Component
} from 'react';
import MessagePanel from './message-panel';
import Form from './form';
import FirebaseConnector from './firebase-connector';
import {
  bindActionCreators
} from 'redux';
import * as actions from '../actions/actions';
import {
  connect
} from 'react-redux';

@connect(state => ({
  messages: state.default.messages,
  pendingMessages: state.default.pendingMessages,
  nameInput: state.default.nameInput,
  messageInput: state.default.messageInput
}))
export default class Main extends Component {

  render() {
    return (
      <FirebaseConnector
        dispatch={this.props.dispatch}
        pendingMessages={this.props.pendingMessages}>
        <div
          className="content">
            <h1>
              Crypto chat
            </h1>
            <MessagePanel
              messages={this.props.messages} />
            <Form
              messageInput={this.props.messageInput}
              nameInput={this.props.nameInput}
              {...bindActionCreators(actions, this.props.dispatch)} />
        </div>
      </FirebaseConnector>
    );
  }
}
