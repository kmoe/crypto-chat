import React, {
  Component
} from 'react';

export default class MessageText extends Component {
  render() {
    return (
      <span>
        {this.props.text}
      </span>
    );
  }
}
