export function convertPlainTextToArrayBufferView(plaintext) {
  return new TextEncoder('utf-8').encode(plaintext);
}

export function convertArrayBufferViewToPlainText(arrayBufferView) {
  return new TextDecoder('utf-8').decode(new Uint8Array(arrayBufferView));
}
