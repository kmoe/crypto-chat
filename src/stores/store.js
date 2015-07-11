import {
  MESSAGE_INPUT_CHANGED,
  NAME_INPUT_CHANGED,
  SEND_BUTTON_CLICKED,
  SERVER_PUSHED_NEW_MESSAGE
} from '../constants/action-types';

const initialState = {
  messages: [{
    name: 'name 1',
    text: 'message 1'
  },
  {
    name: 'name 2',
    text: 'message 2'
  }],
  nameInput: '',
  messageInput: ''
};

export default function messages(state = initialState, action) {
  switch(action.type) {

    case MESSAGE_INPUT_CHANGED:
      return {
        messages: state.messages,
        nameInput: state.nameInput,
        messageInput: action.text
      };

    case NAME_INPUT_CHANGED:
      return {
        messages: state.messages,
        nameInput: action.text,
        messageInput: state.messageInput
      };

    case SEND_BUTTON_CLICKED:
      return {
        messages: [
          ...state.messages, {
            text: state.messageInput,
            name: state.nameInput
        }],
        nameInput: '',
        messageInput: ''
      };

      case SERVER_PUSHED_NEW_MESSAGE:
        return {
          messages: [
            ...state.messages,
            action.message
          ],
          nameInput: state.nameInput,
          messageInput: state.messageInput
        };

    default:
      return state;
  }
}
