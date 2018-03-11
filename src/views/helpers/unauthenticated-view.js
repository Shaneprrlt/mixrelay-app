import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import {
  View
} from 'react-native'

class UnauthenticatedView extends React.Component {
  componentDidMount() {
    if(this.props.loginState.accessToken &&
      this.props.loginState.accessToken.trim() !== '') {
      this.props.push('/plans')
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loginState.accessToken &&
      nextProps.loginState.accessToken.trim() !== '') {
      this.props.push('/plans')
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>{this.props.children}</View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loginState: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    push: (routeName) => {
      dispatch(push(routeName))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnauthenticatedView)
