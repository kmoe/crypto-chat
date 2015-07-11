import {
  MESSAGE_INPUT_CHANGED,
  NAME_INPUT_CHANGED,
  SEND_BUTTON_CLICKED
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
        messages: [...state.messages, {
          text: state.messageInput,
          name: state.nameInput
        }],
        nameInput: '',
        messageInput: ''
      };

    default:
      return state;
  }
}
