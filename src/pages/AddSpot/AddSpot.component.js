// @flow

import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import theme from '../../theme';
import { Page } from '../../components';

export default class AddSpot extends PureComponent<PropsType> {
  styles = getStyles();
  state = {
    name: '',
    style: '',
  };
  render() {
    const styles = this.styles;
    const { spots } = this.props.navigation.state.params;
    return (
      <Page>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.back}>
          <Text>Back</Text>
        </TouchableOpacity>
        <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
          <Text style={this.styles.title}>NEW SPOT</Text>
          <View>
            <TextInput
              placeholder="Name"
              style={styles.input}
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
            <TextInput
              placeholder="Style"
              style={styles.input}
              value={this.state.style}
              onChangeText={style => this.setState({ style })}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              const { name, style } = this.state;
              if (name && style) {
                spots.add({
                  name,
                  style,
                });
                this.props.navigation.goBack();
              }
            }}
            style={styles.confirm}
          >
            <Text>Confirm</Text>
          </TouchableOpacity>
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
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    input: {
      margin: 10,
      padding: 10,
      backgroundColor: 'white',
      width: 150,
    },
    back: {
      marginTop: 20,
      padding: 10,
      backgroundColor: theme.colors.oceanBlue,
      flexDirection: 'row',
      width: 70,
      justifyContent: 'center',
    },
    confirm: {
      paddingVertical: 10,
      width: 150,
      justifyContent: 'center',
      backgroundColor: theme.colors.oceanBlue,
      flexDirection: 'row',
    },
  });
