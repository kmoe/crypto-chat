import React, {
  Component
} from 'react';

export default class MessageName extends Component {
  render() {
    return (
      <dt>
        {this.props.name}
      </dt>
    );
  }
}
