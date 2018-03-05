// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import * as Pages from 'waves/src/pages';
import { navListener } from 'waves/src/modules/Nav/module';

export const AppNavigator = StackNavigator(
  {
    login: {
      screen: Pages.Login,
      navigationOptions: {
        header: null,
      },
    },
    welcome: {
      screen: Pages.Welcome,
      navigationOptions: {
        header: null,
      },
    },
    home: {
      screen: Pages.Home,
      navigationOptions: {
        title: 'Your spots',
      },
    },
  },
  {
    initialRouteName: 'home',
  }
);

export const RootNavigator = StackNavigator(
  {
    root: {
      screen: AppNavigator,
    },
    addSpot: {
      screen: Pages.AddSpot,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

class App extends React.Component {
  render() {
    return (
      <RootNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener: navListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
