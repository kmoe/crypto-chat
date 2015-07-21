export function encrypt(publicKey, text) {
  return window.crypto.subtle.encrypt({
    name: 'RSA-OAEP'
  }, publicKey, text);
}

export function decrypt(privateKey, text) {
  return window.crypto.subtle.decrypt({
    name: 'RSA-OAEP'
  }, privateKey, text);
}
