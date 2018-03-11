import React from 'react'
import { connect } from 'react-redux'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'

import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view'

import AppStyles, {
  BLUE,
  WHITE,
  DARKGREEN,
  LIGHTGRAY
} from '../../styles/app'

import {
  setEmailAddress
} from '../../actions/onboarding'

import UnauthenticatedView from '../helpers/unauthenticated-view'

import Icon from '../../styles/icons/icon'

import TopNavigation from '../../components/top-navigation'
import Heading from '../../components/heading'
import FormParagraph from '../../components/form-paragraph'
import Button from '../../components/button'

class Email extends React.Component {
  constructor(params) {
    super(params)

    this.submit = this.submit.bind(this)

    this.state = {
      emailAddress: this.props.onboardingState.emailAddress
    }
  }

  submit() {
    if(this.state.emailAddress && this.state.emailAddress.trim() !== '') {
      this.props.setEmailAddress(this.state.emailAddress, '/onboarding/phone-number')
    } else {
      alert('Enter an email address')
    }
  }

  render() {

    let primary =
      <View>
        <TouchableOpacity style={AppStyles.topNavigationPrimary} onPress={() => {this.props.history.goBack()}}>
          <View style={AppStyles.topNavigationContainer}>
            <Icon name='ChevronLeft' />
            <Text style={AppStyles.topNavigationPrimaryText}>sign up</Text>
          </View>
        </TouchableOpacity>
      </View>;

    return (
      <UnauthenticatedView>
        <View
          style={ViewStyle.root}
          behavior={'padding'}>
          <TopNavigation left={primary} />

          <KeyboardAwareScrollView>

            <View style={{padding: 20}}>
              <Heading>what's your email address?</Heading>
              <View style={{marginTop: 10}} />
              <FormParagraph>your email can be used to login and helps us stay in touch</FormParagraph>
            </View>

            <View>
              <View style={ViewStyle.form}>
                <View style={AppStyles.formGroup}>
                  <Text style={AppStyles.formLabel}>email address</Text>
                  <TextInput
                    value={this.state.emailAddress}
                    autoFocus={true}
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                    placeholder={'email address'}
                    onChangeText={(emailAddress) => {this.setState({emailAddress})}}
                    style={AppStyles.formInput}/>
                </View>
              </View>

              <View style={{marginTop: 20}}>
                <Button
                  onPress={this.submit}
                  text={'continue'} />
              </View>
            </View>

          </KeyboardAwareScrollView>
        </View>
      </UnauthenticatedView>
    );
  }
}

const ViewStyle = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: LIGHTGRAY
  },
  form: {
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    onboardingState: state.onboarding
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEmailAddress: (emailAddress, nextRoute) => {
      dispatch(setEmailAddress(emailAddress, nextRoute))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Email);
