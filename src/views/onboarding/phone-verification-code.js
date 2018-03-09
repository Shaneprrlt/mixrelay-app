import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutHighlight,
  TouchableOpacity,
  Keyboard,
  TextInput
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

class PhoneVerificationCode extends React.Component {
  constructor(params) {
    super(params)

    this.submit = this.submit.bind(this)

    this.state = {
      code: ''
    }
  }

  submit() {
    const self = this;
    setTimeout(() => {

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
      <View style={ViewStyle.root} onResponderRelease={(evt) => {Keyboard.dismiss()}}>
        <TopNavigation left={primary} />

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
                autoCapitalize={false}
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

export default PhoneVerificationCode;
