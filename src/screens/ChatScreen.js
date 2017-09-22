import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

class ChatScreen extends Component {
  static navigationOptions = { title: 'Chat' };

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  render() {
    const { navigate } = this.props.navigation;
    return <Button title="Go to somewhere" onPress={() => navigate('Main')} />;
  }
}

export default ChatScreen;
