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

import { setPassword } from '../../actions/onboarding'

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

class Password extends React.Component {
  constructor(params) {
    super(params)

    this.submit = this.submit.bind(this)

    this.state = {
      password: this.props.onboardingState.password
    }
  }

  submit() {
    if(this.state.password && this.state.password.trim() !== '') {
      this.props.setPassword(this.state.password, '/onboarding/name')
    } else {
      alert('Enter a unique password')
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
      <View style={ViewStyle.root}>
        <TopNavigation left={primary} />

        <KeyboardAwareScrollView>

          <View style={{padding: 20}}>
            <Heading>pick a password</Heading>
            <View style={{marginTop: 10}} />
            <FormParagraph>passwords must be at least 8 characters long</FormParagraph>
          </View>

          <View style={{flex: 1}}>
            <View style={ViewStyle.form}>
              <View style={AppStyles.formGroup}>
                <Text style={AppStyles.formLabel}>password</Text>
                <TextInput
                  value={this.state.password}
                  secureTextEntry={true}
                  autoFocus={true}
                  autoCapitalize={'none'}
                  placeholder={'password'}
                  onChangeText={(password) => {this.setState({password})}}
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
    setPassword: (password, nextRoute) => {
      dispatch(setPassword(password, nextRoute))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Password);
