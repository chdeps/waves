// @flow

import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../../theme';
import { Page } from '../../components';

export default class AddSpot extends PureComponent<PropsType> {
  styles = getStyles();
  render() {
    const styles = this.styles;
    return (
      <Page>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.back}>
          <Text>Back</Text>
        </TouchableOpacity>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};

const getStyles = () =>
  StyleSheet.create({
    back: {
      marginTop: 20,
      padding: 10,
      backgroundColor: theme.colors.oceanBlue,
      flexDirection: 'row',
      width: 70,
      justifyContent: 'center',
    },
  });
