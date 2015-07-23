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

export function wrap(key, wrappingKey) {
  return window.crypto.subtle.wrapKey('raw', key, wrappingKey, 'AES-GCM');
}

export function unwrap(wrappedKey, unwrappingKey) {
  return window.crypto.subtle.unwrapKey('raw', wrappedKey, unwrappingKey, 'AES-GCM', 'RSA-OAEP', false, ['encrypt', 'decrypt']);
}
