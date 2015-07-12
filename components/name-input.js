import React, {
  Component
} from 'react';

export default class NameInput extends Component {
  render() {
    return (
      <input
        id="name-input"
        type="text"
        onChange={(e) => this.props.onChange(e.target.value)}
        value={this.props.value} />
    );
  }
}
