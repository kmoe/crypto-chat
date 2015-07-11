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
