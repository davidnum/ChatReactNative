import { StyleSheet } from 'react-native';

export const drawerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export const itemStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16
  },
  text: {
    fontSize: 14,
    paddingLeft: 26,
    flex: 1,
    color: 'gray'
  }
});

export const selectedItemStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'lightgray'
  },
  text: {
    fontSize: 14,
    paddingLeft: 26,
    flex: 1,
    color: 'black'
  }
});
