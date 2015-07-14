import {
  MESSAGE_INPUT_CHANGED,
  NAME_INPUT_CHANGED,
  SEND_BUTTON_CLICKED,
  SERVER_PUSHED_NEW_MESSAGE,
  CLIENT_PUSHED_NEW_MESSAGE
} from '../constants/action-types';
import _ from 'lodash';

const initialState = {
  messages: [{
    name: 'name 1',
    text: 'message 1'
  },
  {
    name: 'name 2',
    text: 'message 2'
  }],
  pendingMessages: [],
  nameInput: '',
  messageInput: ''
};

export default function messages(state = initialState, action) {
  switch(action.type) {

    case MESSAGE_INPUT_CHANGED:
      return {
        messages: state.messages,
        pendingMessages: state.pendingMessages,
        nameInput: state.nameInput,
        messageInput: action.text
      };

    case NAME_INPUT_CHANGED:
      return {
        messages: state.messages,
        pendingMessages: state.pendingMessages,
        nameInput: action.text,
        messageInput: state.messageInput
      };

    case SEND_BUTTON_CLICKED:
      return {
        messages: state.messages,
        pendingMessages: [
          ...state.pendingMessages, {
            text: state.messageInput,
            name: state.nameInput
        }],
        nameInput: '',
        messageInput: ''
      };

      case SERVER_PUSHED_NEW_MESSAGE:
        const stateMessages = state.messages;
        const messagesLength = stateMessages.length;
        const sliceStart = messagesLength > 5 ? messagesLength - 5 : 0;
        const lastSixMessages = _.slice(stateMessages, sliceStart, messagesLength);
        return {
          messages: [
            ...lastSixMessages,
            action.message
          ],
          pendingMessages: state.pendingMessages,
          nameInput: state.nameInput,
          messageInput: state.messageInput
        };

      case CLIENT_PUSHED_NEW_MESSAGE:
        return {
          messages: state.messages,
          pendingMessages: [],
          nameImput: state.nameInput,
          messageInput: state.messageInput
        };

    default:
      return state;
  }
}
