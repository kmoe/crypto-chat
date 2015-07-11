import React, {
  Component
} from 'react';

export default class MessageText extends Component {
  render() {
    return (
      <dd>
        {this.props.text}
      </dd>
    );
  }
}
