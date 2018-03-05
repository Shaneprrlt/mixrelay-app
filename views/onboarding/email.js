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

class Email extends React.Component {
  constructor(params) {
    super(params)

    this.submit = this.submit.bind(this)

    this.state = {
      emailAddress: ''
    }
  }

  submit() {
    const self = this;
    setTimeout(() => {
      self.props.history.push('/onboarding/phone-number');
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

    return (
      <View style={ViewStyle.root}>
        <TopNavigation left={primary} />

        <View style={{padding: 20}}>
          <Heading>what's your email address?</Heading>
          <View style={{marginTop: 10}} />
          <FormParagraph>your email can be used to login and helps us stay in touch</FormParagraph>
        </View>

        <KeyboardAvoidingView style={{flex: 1}}>
          <View style={ViewStyle.form}>
            <View style={AppStyles.formGroup}>
              <Text style={AppStyles.formLabel}>email address</Text>
              <TextInput
                autoFocus={true}
                autoCapitalize={false}
                keyboardType={'email-address'}
                placeholder={'email address'}
                onChangeText={(emailAddress) => {this.setState({emailAddress})}}
                style={AppStyles.formInput}/>
            </View>
          </View>

          <View style={{flex: 3}}>
            <Button
              onPress={this.submit}
              text={'continue'} />
          </View>
        </KeyboardAvoidingView>
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
    flex: 1
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

export default Email;
