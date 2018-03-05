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
      .signInAndRetrieveDataWithEmailAndPassword(username, password)
      .then(() =>
        this.props.navigation.dispatch(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'home' })],
          })
        )
      );
  };
  render() {
    const styles = this.styles;
    return (
      <Page>
        <KeyboardAvoidingView style={styles.container} behavior="position">
          <Text style={styles.header} testID="title">
            Wind & Waves
          </Text>
          <Image source={Wave} style={styles.image} />
          <View style={styles.innerContainer}>
            <TextInput
              placeholder="Username"
              style={styles.input}
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
            <TouchableOpacity style={styles.back} onPress={this._login}>
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
      flex: 1,
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
    back: {
      backgroundColor: theme.colors.oceanBlue,
      height: 20,
      padding: 15,
      justifyContent: 'center',
      margin: 20,
    },
    image: {
      height: 200,
      resizeMode: 'contain',
    },
  });
