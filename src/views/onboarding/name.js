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

import UnauthenticatedView from '../helpers/unauthenticated-view'

import AppStyles, {
  BLUE,
  WHITE,
  DARKGREEN,
  LIGHTGRAY
} from '../../styles/app'

import {
  setName
} from '../../actions/onboarding'

import Icon from '../../styles/icons/icon'

import TopNavigation from '../../components/top-navigation'
import Heading from '../../components/heading'
import FormParagraph from '../../components/form-paragraph'
import Button from '../../components/button'

class Name extends React.Component {
  constructor(params) {
    super(params)

    this.submit = this.submit.bind(this)

    this.state = {
      firstName: this.props.onboardingState.firstName,
      lastName: this.props.onboardingState.lastName
    }
  }

  submit() {
    if(this.state.firstName && this.state.firstName.trim() !== '' &&
      this.state.lastName && this.state.lastName.trim() !== '') {
        this.props.setName(this.state.firstName, this.state.lastName, '/onboarding/email')
      } else {
        alert('Enter first and last name')
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
        <View style={ViewStyle.root}>
          <TopNavigation left={primary} />

          <KeyboardAwareScrollView>

            <View style={{padding: 20}}>
              <Heading>what's your name?</Heading>
              <View style={{marginTop: 10}} />
            </View>

            <View>
              <View style={ViewStyle.form}>
                <View style={AppStyles.formGroup}>
                  <Text style={AppStyles.formLabel}>first name</Text>
                  <TextInput
                    value={this.state.firstName}
                    autoFocus={true}
                    autoCorrect={false}
                    autoCapitalize={'words'}
                    placeholder={'first name'}
                    onChangeText={(firstName) => {this.setState({firstName})}}
                    style={AppStyles.formInput}/>
                </View>
                <View style={AppStyles.formGroup}>
                  <Text style={AppStyles.formLabel}>last name</Text>
                  <TextInput
                    value={this.state.lastName}
                    autoCorrect={false}
                    autoCapitalize={'words'}
                    placeholder={'last name'}
                    onChangeText={(lastName) => {this.setState({lastName})}}
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
    setName: (firstName, lastName, nextRoute) => {
      dispatch(setName(firstName, lastName, nextRoute))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Name);
