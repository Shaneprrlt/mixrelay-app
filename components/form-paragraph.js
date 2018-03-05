import React from 'react';

import {
  Text,
  StyleSheet
} from 'react-native';

import {
  DARKCHARCOAL
} from '../styles/app';

class FormParagraph extends React.Component {
  render() {

    let style = ViewStyle.root;


    if(this.props.style !== undefined && this.props.style !== null) {
      style = Obect.assign({}, ViewStyle.root, this.props.style);
    }

    return (
      <Text style={style}>{this.props.children}</Text>
    )
  }
}

const ViewStyle = StyleSheet.create({
  root: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Avenir Next',
    fontWeight: '400',
    color: DARKCHARCOAL
  }
});

export default FormParagraph;
