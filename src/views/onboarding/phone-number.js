import React from 'react'
import { connect } from 'react-redux'

import {
  sendVerificationCode
} from '../../actions/onboarding'

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

import Icon from '../../styles/icons/icon'

import TopNavigation from '../../components/top-navigation'
import Heading from '../../components/heading'
import FormParagraph from '../../components/form-paragraph'
import Button from '../../components/button'

import api from '../../services/api'

class PhoneNumber extends React.Component {
  constructor(params) {
    super(params)

    this.submit = this.submit.bind(this)

    this.state = {
      phoneNumber: this.props.onboardingState.phoneNumber
    }
  }

  submit() {
    if(this.state.phoneNumber && this.state.phoneNumber.trim() !== '') {
      this.props.sendVerificationCode(this.state.phoneNumber)
    } else {
      alert('Enter phone number')
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
        <View style={ViewStyle.root} onResponderRelease={(evt) => {Keyboard.dismiss()}}>
          <TopNavigation left={primary} />

          <KeyboardAwareScrollView>

            <View style={{padding: 20}}>
              <Heading>verify your phone #</Heading>
              <View style={{marginTop: 10}} />
              <FormParagraph>this helps us verify you’re a real person</FormParagraph>
            </View>

            <View style={{flex: 1}}>
              <View style={ViewStyle.form}>
                <View style={AppStyles.formGroup}>
                  <Text style={AppStyles.formLabel}>phone number</Text>
                  <TextInput
                    value={this.state.phoneNumber}
                    autoFocus={true}
                    autoCapitalize={'none'}
                    keyboardType={'numeric'}
                    placeholder={'+1'}
                    onChangeText={(phoneNumber) => {this.setState({phoneNumber})}}
                    style={AppStyles.formInput}/>
                </View>
              </View>

              <View style={{paddingLeft: 20, paddingRight: 20}}>
                <View style={{marginTop: 10}} />
                <FormParagraph style={{fontSize: 16}}>your phone number won’t be seen by other mixrelay users</FormParagraph>
              </View>

              <View style={{paddingLeft: 20, paddingRight: 20}}>
                <View style={{marginTop: 10}} />
                <FormParagraph style={{fontSize: 16}}>check out our privacy policy for more information</FormParagraph>
              </View>

              <View style={{marginTop: 20}}>
                <Button
                  onPress={this.submit}
                  text={'send code'} />
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
    sendVerificationCode: (phoneNumber) => {
      dispatch(sendVerificationCode(phoneNumber, '/onboarding/phone-verification-code'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneNumber);
