// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Page } from '../../components';
import theme from '../../theme';
import Wave from '../../../assets/images/wave.png';

export default class Welcome extends PureComponent<PropsType> {
  styles = getStyles();
  render() {
    const styles = this.styles;
    return (
      <Page>
        <View style={styles.container} behavior="position">
          <Text style={styles.header} testID="title">
            Wind & Waves
          </Text>
          <Image source={Wave} style={styles.image} />
          <TouchableOpacity
            style={styles.back}
            onPress={() => this.props.navigation.navigate('login')}
          >
            <Text>Get started</Text>
          </TouchableOpacity>
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
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    header: {
      ...theme.fonts.header,
      color: theme.colors.oceanBlue,
      textAlign: 'center',
      margin: theme.grid.x4,
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
