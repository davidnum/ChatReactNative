import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, Text, View } from 'react-native';
import { itemStyle, selectedItemStyle } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default class DrawerItem extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    selectedItem: PropTypes.string,
    iconName: PropTypes.string
  };
  static defaultProps = {
    iconName: 'md-bug'
  };

  render() {
    const { text, value, selectedItem, iconName, onPress } = this.props;
    const isSelected = selectedItem === value;
    const style = isSelected ? selectedItemStyle : itemStyle;
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={() => onPress(value, text)}
      >
        <View style={style.container}>
          <Icon
            name={iconName}
            size={26}
            color={isSelected ? 'white' : 'gray'}
          />
          <Text style={style.text}>{text}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
