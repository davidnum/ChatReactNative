import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Item from './Item';
import { drawerStyle } from './styles';
import * as constants from '../constants';

export default class Drawer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.onItemPressed = this.onItemPressed.bind(this);
    this.state = {
      selectedItem: constants.MAIN_SCREEN
    };
  }

  onItemPressed(screen, title) {
    this.setState({ selectedItem: screen });
    this.toggleDrawer();
    this.props.navigator.resetTo({
      screen,
      title,
      animated: false,
      navigatorButtons: { leftButtons: [{ id: 'sideMenu' }] }
    });
  }

  toggleDrawer() {
    this.props.navigator.toggleDrawer({
      to: 'closed',
      side: 'left',
      animated: true
    });
  }

  render() {
    const { selectedItem } = this.state;

    return (
      <View style={drawerStyle.container}>
        <View>
          <Item
            text="Main"
            selectedItem={selectedItem}
            value={constants.MAIN_SCREEN}
            onPress={this.onItemPressed}
            iconName="md-home"
          />
          <Item
            text="Chat"
            selectedItem={selectedItem}
            value={constants.CHAT_SCREEN}
            onPress={this.onItemPressed}
          />
        </View>
      </View>
    );
  }
}
