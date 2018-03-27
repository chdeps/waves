// @flow

import React, { PureComponent } from 'react';
import firebase from 'react-native-firebase';
import { NavigationActions } from 'react-navigation';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Page } from '../../components';
import theme from '../../theme';
import Wave from '../../../assets/images/wave.png';

export default class Login extends PureComponent<PropsType> {
  styles = getStyles();
  state = {
    username: '',
    password: '',
  };
  _login = () => {
    const { username, password } = this.state;
    firebase
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(username.trim(), password)
      .then(() =>
        this.props.navigation.dispatch(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'home' })],
          })
        )
      )
      .catch(e => console.log(e));
  };
  render() {
    const styles = this.styles;
    return (
      <Page>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.select({ ios: 'position' })}
          testID="login"
        >
          <Text style={styles.header} testID="loginTitle">
            Wind & Waves
          </Text>
          <Image source={Wave} style={styles.image} testID="loginImage" />
          <View style={styles.innerContainer}>
            <TextInput
              placeholder="username"
              style={styles.input}
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
              testID="loginUsername"
            />
            <TextInput
              placeholder="password"
              secureTextEntry
              style={styles.input}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              testID="loginPassword"
            />
            <TouchableOpacity style={styles.login} onPress={this._login} testID="loginButton">
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};

const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    innerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      ...theme.fonts.header,
      color: theme.colors.oceanBlue,
      textAlign: 'center',
      margin: theme.grid.x4,
    },
    input: {
      margin: 10,
      padding: 10,
      backgroundColor: 'white',
      width: 150,
    },
    login: {
      backgroundColor: theme.colors.oceanBlue,
      height: 20,
      padding: 15,
      justifyContent: 'center',
      margin: 20,
      marginBottom: 50,
    },
    image: {
      height: 200,
      resizeMode: 'contain',
    },
  });
