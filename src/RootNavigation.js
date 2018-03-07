// @flow

import React from 'react';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { TouchableOpacity, Image } from 'react-native';
import Door from '../assets/images/door.png';
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';

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
      navigationOptions: ({ navigation }) => ({
        title: 'Wind & Waves',
        headerLeft: (
          <TouchableOpacity
            testID="logoutButton"
            onPress={() => {
              firebase
                .auth()
                .signOut()
                .then(() =>
                  navigation.dispatch(
                    NavigationActions.reset({
                      index: 0,
                      actions: [NavigationActions.navigate({ routeName: 'welcome' })],
                    })
                  )
                );
            }}
            style={{ padding: 5, backgroundColor: 'red' }}
          >
            <Image source={Door} style={{ marginLeft: 10, height: 20, width: 20 }} />
          </TouchableOpacity>
        ),
      }),
    },
  },
  {
    initialRouteName: 'welcome',
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
