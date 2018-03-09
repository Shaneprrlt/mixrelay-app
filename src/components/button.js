import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import {
  BLUE,
  WHITE
} from '../styles/app';

class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity style={ViewStyle.root} onPress={this.props.onPress}>
        <Text style={ViewStyle.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const ViewStyle = StyleSheet.create({
  root: {
    width: 320,
    height: 50,
    backgroundColor: BLUE,
    borderRadius: 6,
    alignSelf: 'center'
  },
  text: {
    color: WHITE,
    fontSize: 29,
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 50
  }
});

export default Button;
