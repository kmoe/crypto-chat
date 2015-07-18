export function convertPlainTextToArrayBufferView(plaintext) {
  return new TextEncoder('utf-8').encode(plaintext);
}
