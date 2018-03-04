// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Page } from '../../components';
import theme from '../../theme';
import Wave from '../../../assets/images/wave.png';

export default class Login extends PureComponent<PropsType> {
  styles = getStyles();
  render() {
    const styles = this.styles;
    return (
      <Page>
        <View style={styles.container}>
          <Text style={styles.title} testID="title">
            Waves
          </Text>
          <Image source={Wave} style={styles.image} />
        </View>
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      ...theme.fonts.header,
      color: theme.colors.oceanBlue,
      textAlign: 'center',
      margin: theme.grid.x1,
    },
    image: {
      height: 200,
      resizeMode: 'contain',
    },
  });
