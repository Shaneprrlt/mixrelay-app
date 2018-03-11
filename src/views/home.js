import React from 'react';

import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  PixelRatio
} from 'react-native';

import AppStyles, {
  BLUE,
  WHITE
} from '../styles/app';

import UnauthenticatedView from './helpers/unauthenticated-view'

class Home extends React.Component {
  constructor(params) {
    super(params)

    this.onLoginClick = this.onLoginClick.bind(this)
    this.onSignUpClick = this.onSignUpClick.bind(this)
  }

  onLoginClick() {
    this.props.history.push('/login')
  }

  onSignUpClick() {
    this.props.history.push('/onboarding/username')
  }

  render() {
    return (
      <UnauthenticatedView>
        <View style={ViewStyle.root}>
          <View style={ViewStyle.centeredContent}>
            <Image
              source={require('../../images/app-icon.png')}
              style={ViewStyle.appIcon}/>
          </View>
          <View style={ViewStyle.centeredContent}>
            <Text style={ViewStyle.logo}>mixrelay</Text>
          </View>
          <View style={ViewStyle.centeredContent}>
            <Text style={ViewStyle.sublogo}>good friends</Text>
            <Text style={ViewStyle.sublogo}>fun plans</Text>
          </View>
          <View style={ViewStyle.centeredContent}>
            <TouchableOpacity style={ViewStyle.cta} onPress={this.onLoginClick}>
              <Text style={ViewStyle.ctaText}>login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ViewStyle.cta} onPress={this.onSignUpClick}>
              <Text style={ViewStyle.ctaText}>sign up</Text>
            </TouchableOpacity>
          </View>
          <View style={ViewStyle.centeredContent}>
            <TouchableHighlight>
              <Text style={ViewStyle.link}>privacy</Text>
            </TouchableHighlight>
          </View>
        </View>
      </UnauthenticatedView>
    );
  }
}

const ViewStyle = StyleSheet.create({
  root: {
    backgroundColor: BLUE,
    padding: 28,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  centeredContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  appIcon: {
    height: 93,
    width: 93
  },
  logo: {
    fontSize: 58,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: WHITE,
    fontFamily: 'Avenir Next'
  },
  sublogo: {
    fontSize: 40,
    fontWeight: '400',
    fontFamily: 'Avenir Next',
    color: WHITE,
    letterSpacing: 0.83
  },
  cta: {
    backgroundColor: WHITE,
    borderRadius: 6,
    height: 45,
    marginBottom: 10,
    width: 320
  },
  ctaText: {
    color: BLUE,
    textAlign: 'center',
    fontSize: 29,
    fontWeight: '400',
    letterSpacing: 0.6,
    fontFamily: 'Avenir Next',
    lineHeight: 45
  },
  link: {
    color: WHITE,
    fontFamily: 'Avenir Next',
    letterSpacing: 0.37,
    fontSize: 18
  }
});

export default Home;
