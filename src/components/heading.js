import React from 'react';

import {
  Text,
  StyleSheet
} from 'react-native';

import {
  DARKCHARCOAL
} from '../styles/app';

class Heading extends React.Component {
  render() {
    return (
      <Text style={ViewStyle.root}>{this.props.children}</Text>
    )
  }
}

const ViewStyle = StyleSheet.create({
  root: {
    fontSize: 24,
    fontFamily: 'Avenir Next',
    fontWeight: '600',
    color: DARKCHARCOAL
  }
});

export default Heading;
