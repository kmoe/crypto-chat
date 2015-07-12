import * as types from '../constants/action-types';

export function messageInputChanged(text) {
  return {
    type: types.MESSAGE_INPUT_CHANGED,
    text
  };
}

export function nameInputChanged(text) {
  return {
    type: types.NAME_INPUT_CHANGED,
    text
  };
}

export function sendButtonClicked() {
  return {
    type: types.SEND_BUTTON_CLICKED
  };
}

export function serverPushedNewMessage(message) {
  return {
    type: types.SERVER_PUSHED_NEW_MESSAGE,
    message
  };
}

export function clientPushedNewMessage() {
  return {
    type: types.CLIENT_PUSHED_NEW_MESSAGE
  };
}
