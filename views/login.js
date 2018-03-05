import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';

import AppStyles, {
  BLUE,
  WHITE,
  LIGHTGRAY
} from '../styles/app';

import Icon from '../styles/icons/icon';

import TopNavigation from '../components/top-navigation';
import Heading from '../components/heading';
import FormParagraph from '../components/form-paragraph';
import Button from '../components/button';

class Login extends React.Component {
  constructor(params) {
    super(params)

    this.submit = this.submit.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }

  submit() {

  }

  forgotPassword() {

  }

  render() {

    let primary =
      <View>
        <TouchableOpacity style={AppStyles.topNavigationPrimary} onPress={() => {this.props.history.goBack()}}>
          <View style={AppStyles.topNavigationContainer}>
            <Icon
              name='ChevronLeft'
              style={AppStyles.topNavigationPrimaryIcon} />
            <Text style={AppStyles.topNavigationPrimaryText}>login</Text>
          </View>
        </TouchableOpacity>
      </View>;

    return (
      <View style={ViewStyle.root}>
        <TopNavigation
          left={primary}
          action={() => {this.props.history.push('/onboarding/username')}}
          actionText={'sign up'}/>

        <View style={{padding: 20}}>
          <Heading>welcome back ✌️</Heading>
          <View style={{marginTop: 10}} />
        </View>

        <KeyboardAvoidingView style={{flex: 1}}>
          <View style={ViewStyle.form}>
            <View style={AppStyles.formGroup}>
              <Text style={AppStyles.formLabel}>username or email</Text>
              <TextInput
                autoFocus={true}
                autoCapitalize={false}
                placeholder={'username or email'}
                onChangeText={(username) => {this.setState({username})}}
                style={AppStyles.formInput}/>
            </View>

            <View style={AppStyles.formGroup}>
              <Text style={AppStyles.formLabel}>password</Text>
              <TextInput
                autoCapitalize={false}
                placeholder={'password'}
                onChangeText={(password) => {this.setState({password})}}
                secureTextEntry={true}
                style={AppStyles.formInput}/>
            </View>
          </View>

          <View style={{flex: 2}}>
            <Button
              onPress={this.submit}
              text={'login'} />
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
  }
});

export default Login;
