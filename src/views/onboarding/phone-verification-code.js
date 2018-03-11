import React from 'react'
import { connect } from 'react-redux'

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutHighlight,
  TouchableOpacity,
  Keyboard,
  TextInput
} from 'react-native'

import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view'

import UnauthenticatedView from '../helpers/unauthenticated-view'

import AppStyles, {
  BLUE,
  WHITE,
  DARKGREEN,
  LIGHTGRAY
} from '../../styles/app'

import api from '../../services/api'

import {
  setPhoneNumberVerified
} from '../../actions/onboarding'

import Icon from '../../styles/icons/icon'

import TopNavigation from '../../components/top-navigation'
import Heading from '../../components/heading'
import FormParagraph from '../../components/form-paragraph'
import Button from '../../components/button'

class PhoneVerificationCode extends React.Component {
  constructor(params) {
    super(params)

    this.submit = this.submit.bind(this)

    this.state = {
      code: ''
    }
  }

  async submit() {
    if(this.state.code && this.state.code.trim() !== '') {
      try {
        await api.verifyCode(this.props.onboardingState.phoneNumber, this.state.code)
        this.props.setPhoneNumberVerified()
      } catch (e) {
        alert('The code you entered does not match')
      }
    } else {
      alert('Enter verification code')
    }
  }

  render() {

    let primary =
      <View>
        <TouchableOpacity style={AppStyles.topNavigationPrimary} onPress={() => {this.props.history.goBack()}}>
          <View style={AppStyles.topNavigationContainer}>
            <Icon name='ChevronLeft'  />
            <Text style={AppStyles.topNavigationPrimaryText}>sign up</Text>
          </View>
        </TouchableOpacity>
      </View>;

    return (
      <UnauthenticatedView>
        <View style={ViewStyle.root} onResponderRelease={(evt) => {Keyboard.dismiss()}}>
          <TopNavigation left={primary} />

          <KeyboardAwareScrollView>
            <View style={{padding: 20}}>
              <Heading>enter verification code</Heading>
              <View style={{marginTop: 10}} />
            </View>

            <View style={{flex: 1}}>
              <View style={ViewStyle.form}>
                <View style={AppStyles.formGroup}>
                  <Text style={AppStyles.formLabel}>verification code</Text>
                  <TextInput
                    autoFocus={true}
                    autoCapitalize={'none'}
                    keyboardType={'numeric'}
                    placeholder={'code'}
                    onChangeText={(code) => {this.setState({code})}}
                    style={AppStyles.formInput}/>
                </View>
              </View>

              <View style={{paddingLeft: 20, paddingRight: 20}}>
                <View style={{marginTop: 10}} />
                <FormParagraph style={{fontSize: 16}}>if you did not receive a verification code, click here to have it resent</FormParagraph>
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
    setPhoneNumberVerified: () => {
      dispatch(setPhoneNumberVerified('/onboarding/invite-contacts'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneVerificationCode);
