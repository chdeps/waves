// @flow

import React, { PureComponent } from 'react';
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
            <TextInput placeholder="Username" style={styles.input} />
            <TextInput placeholder="Password" secureTextEntry style={styles.input} />
            <TouchableOpacity style={styles.back}>
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
