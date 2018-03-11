import React from 'react'
import { connect } from 'react-redux'
import Contacts from 'react-native-contacts'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'

import UnauthenticatedView from '../helpers/unauthenticated-view'

import AppStyles, {
  BLUE,
  WHITE,
  DARKGREEN,
  LIGHTGRAY
} from '../../styles/app'

import {
  createAccount
} from '../../actions/onboarding'

import Icon from '../../styles/icons/icon'

import TopNavigation from '../../components/top-navigation'
import Heading from '../../components/heading'
import FormParagraph from '../../components/form-paragraph'
import Button from '../../components/button'

class InviteContacts extends React.Component {
  constructor(params) {
    super(params)

    this.skip = this.skip.bind(this)
    this.submit = this.submit.bind(this)

    this.state = {
      emailAddress: this.props.onboardingState.emailAddress
    }
  }

  componentDidMount() {
    const self = this;
    Contacts.getAll((err, contacts) => {
      if(err == 'denied') {
        self.props.createAccount(self.props.onboardingState)
      } else {

      }
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.onboardingState.errors.length > 0) {
      alert(nextProps.onboardingState.errors.join('. '))
    }
  }

  skip() {
    this.props.createAccount(this.props.onboardingState)
  }

  submit() {
  }

  render() {

    let primary =
      <View>
        <TouchableOpacity style={AppStyles.topNavigationPrimary} onPress={() => {this.props.history.goBack()}}>
          <View style={AppStyles.topNavigationContainer}>
            <Icon name='ChevronLeft' />
            <Text style={AppStyles.topNavigationPrimaryText}>add friends</Text>
          </View>
        </TouchableOpacity>
      </View>;

    return (
      <UnauthenticatedView>
        <View
          style={ViewStyle.root}
          behavior={'padding'}>
          <TopNavigation
            left={primary}
            action={this.skip}
            actionText={'skip'} />

          <ScrollView>

            <View style={{padding: 20}}>
              <Heading>add some friends</Heading>
            </View>

          </ScrollView>
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
    createAccount(onboardingState) {
      dispatch(createAccount(onboardingState, '/plans'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteContacts);
