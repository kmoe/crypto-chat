import React, {
  Component
} from 'react';

export default class NameLabel extends Component {
  render() {
    return (
      <label
          htmlFor="name-input">
          Name
      </label>
    );
  }
}
