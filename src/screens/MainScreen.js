import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button } from 'react-native';

class MainScreen extends Component {

  static navigationOptions = { title: 'Main', tabBarLabel: 'Main'};

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render () {
    const { navigate } = this.props.navigation;
    return <Button title="Go to somewhere" onPress={() =>navigate('Chat')}/>
  }
}

export default MainScreen