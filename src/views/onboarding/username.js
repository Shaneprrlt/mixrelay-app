import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

import AppStyles, {
  BLUE,
  WHITE,
  DARKGREEN,
  LIGHTGRAY
} from '../../styles/app';

import Icon from '../../styles/icons/icon';

import TopNavigation from '../../components/top-navigation';
import Heading from '../../components/heading';
import FormParagraph from '../../components/form-paragraph';
import Button from '../../components/button';

class Username extends React.Component {
  constructor(params) {
    super(params)

    this.submit = this.submit.bind(this)

    this.state = {
      username: '',
      availableUsername: null
    }
  }

  submit() {
    this.setState({
      availableUsername: true
    })

    const self = this;
    setTimeout(() => {
      self.props.history.push('/onboarding/password')
    }, 1000)
  }

  render() {

    let primary =
      <View>
        <TouchableOpacity style={AppStyles.topNavigationPrimary} onPress={() => {this.props.history.goBack()}}>
          <View style={AppStyles.topNavigationContainer}>
            <Icon
              name='ChevronLeft'
              style={AppStyles.topNavigationPrimaryIcon} />
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
                autoFocus={true}
                autoCapitalize={false}
                placeholder={'username'}
                onChangeText={(username) => {this.setState({username})}}
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
  }
});

export default Username;
