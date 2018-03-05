import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import AppStyles, {
  BLUE,
  WHITE
} from '../styles/app';

class TopNavigation extends React.Component {
  render() {

    let rightItem = null;
    if(this.props.action !== undefined && this.props.action !== null) {
      rightItem =
        <TouchableOpacity style={ViewStyle.rightAction} onPress={this.props.action}>
          <Text style={ViewStyle.rightActionText}>{this.props.actionText}</Text>
        </TouchableOpacity>;
    }

    return (
      <View style={ViewStyle.root}>
        <View style={ViewStyle.container}>
          <View style={ViewStyle.left}>
            {this.props.left}
          </View>
          <View style={ViewStyle.right}>
            {rightItem}
          </View>
        </View>
      </View>
    );
  }
}

const ViewStyle = StyleSheet.create({
  root: {
    height: 125,
    backgroundColor: BLUE,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 0,
    paddingBottom: 10
  },
  right: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  rightAction: {
  },
  rightActionText: {
    color: WHITE,
    fontSize: 18,
    letterSpacing: 0.33,
    textAlign: 'right',
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    alignSelf: 'center'
  }
});

export default TopNavigation;
