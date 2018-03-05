// @flow

import React, { PureComponent } from 'react';
import firebase from 'react-native-firebase';
import { StyleSheet, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';
import { Page } from '../../components';
import theme from '../../theme';

export default class Home extends PureComponent<PropsType> {
  styles = getStyles();
  constructor() {
    super();
    this.spots = firebase.firestore().collection('spots');
    this.unsubscribe = null;
    this.state = {
      spots: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.unsubscribe = this.spots.onSnapshot(this.onCollectionUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = querySnapshot => {
    const spots = [];

    querySnapshot.forEach(spot => {
      const { name, style } = spot.data();
      spots.push({
        id: spot.id,
        spot,
        name,
        style,
      });
    });

    this.setState({
      loading: false,
      spots,
    });
  };

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {}} style={this.styles.itemContainer}>
        <Text style={this.styles.itemText} numberOfLines={2}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const styles = this.styles;
    console.log(this.state.spots);
    return (
      <Page noMargin>
        <ScrollView>
          <FlatList
            data={this.state.spots}
            renderItem={this._renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('addSpot')}
        >
          <Text style={styles.buttonText}>Add</Text>
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
    itemContainer: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
    },
    itemText: {
      flex: 1,
      marginLeft: 16,
      marginRight: 24,
    },
    button: {
      backgroundColor: theme.colors.oceanBlue,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
  });
