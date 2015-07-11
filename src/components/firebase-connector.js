import React, {
  Component
} from 'react';
import * as actions from '../actions/actions';
const Firebase = require('firebase');

export default class FirebaseConnector extends Component {

  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
  }

  componentWillMount() {
    const firebaseRef = new Firebase('https://blinding-fire-7202.firebaseio.com/chat');

    firebaseRef.on('child_added', function(snapshot){
      this.dispatch(actions.serverPushedNewMessage(snapshot.val()));
    }.bind(this));
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
