import React from 'react'
import { connect } from 'react-redux';

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

import { setUsername } from '../../actions/onboarding'

import api from '../../services/api'

import AppStyles, {
  BLUE,
  WHITE,
  DARKGREEN,
  LIGHTGRAY,
  RED
} from '../../styles/app'

import Icon from '../../styles/icons/icon'

import TopNavigation from '../../components/top-navigation'
import Heading from '../../components/heading'
import FormParagraph from '../../components/form-paragraph'
import Button from '../../components/button'

class Username extends React.Component {
  constructor(params) {
    super(params)

    this.setUsername = this.setUsername.bind(this)
    this.submit = this.submit.bind(this)

    this.state = {
      username: this.props.onboardingState.username,
      availableUsername: this.props.onboardingState.availableUsername
    }
  }

  async setUsername(username) {
    this.setState({
      username: username
    })

    try {
      let payload = await api.checkUsername(username)
      this.setState({
        availableUsername: payload.usernameAvailable
      })
    } catch(e) {
    }
  }

  submit() {
    if(this.state.availableUsername) {
      this.props.setUsername(this.state.username, '/onboarding/password')
    } else {
      alert('Enter an available username')
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

    let availbilityLabel = null;
    if(this.state.availableUsername !== undefined && this.state.availableUsername !== null) {
      let availabilityLabelStyle = this.state.availableUsername ? ViewStyle.availableUsername : ViewStyle.unavailableUsername;
      let availibilityLabelText = this.state.availableUsername ? 'available' : 'unavailable';

      availbilityLabel =
        <Text
          style={availabilityLabelStyle}
          ref={(ref) => {this.availabilityLabel = ref}}>
          {availibilityLabelText}
        </Text>;
    }

    return (
      <View style={ViewStyle.root}>
        <TopNavigation
          left={primary}
          actionText={'login'}
          action={() => {this.props.history.push('/login')}} />

        <KeyboardAwareScrollView>
          <View style={{padding: 20}}>
            <Heading>let's get started</Heading>
            <View style={{marginTop: 10}} />
            <FormParagraph>pick a username, this is how people will find  you and how you’ll be seen in messages</FormParagraph>
          </View>

          <View style={{flex: 1}}>
            <View style={ViewStyle.form}>
              <View style={AppStyles.formGroup}>
                <Text style={AppStyles.formLabel}>username</Text>
                <TextInput
                  value={this.state.username}
                  autoFocus={true}
                  autoCapitalize={'none'}
                  placeholder={'username'}
                  onChangeText={(username) => {this.setUsername(username)}}
                  style={AppStyles.formInput}/>
                {availbilityLabel}
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
  },
  availableUsername: {
    position: 'absolute',
    right: 20,
    top: 56,
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    fontSize: 18,
    color: DARKGREEN
  },
  unavailableUsername: {
    position: 'absolute',
    right: 20,
    top: 56,
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    fontSize: 18,
    color: RED
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    onboardingState: state.onboarding
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (username, nextRoute) => {
      dispatch(setUsername(username, nextRoute))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Username);
