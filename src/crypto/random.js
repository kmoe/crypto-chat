export default function generateRandomNumbers() {
  var arrayBufferView = new Uint8Array(16);
  return window.crypto.getRandomValues(arrayBufferView);
}
