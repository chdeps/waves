// @flow

import React, { PureComponent } from 'react';
import firebase from 'react-native-firebase';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  Image,
  View,
} from 'react-native';
import BulletWave from '../../../assets/images/bulletWave.png';
import Bin from '../../../assets/images/bin.png';
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
      <View style={this.styles.itemContainer} testID="spotContainer">
        <Image source={BulletWave} style={this.styles.bullet} />
        <Text style={this.styles.itemText} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={this.styles.itemSubText}>{item.style}</Text>
        <TouchableOpacity
          testID="spotBin"
          style={this.styles.binContainer}
          onPress={() => this.spots.doc(item.id).delete()}
        >
          <Image source={Bin} style={this.styles.bin} />
        </TouchableOpacity>
      </View>
    );
  };

  _separator = () => <View style={this.styles.separator} />;

  render() {
    const styles = this.styles;
    console.log(this.state.spots);
    return (
      <Page noMargin>
        <FlatList
          data={this.state.spots}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this._separator}
          ListFooterComponent={this.state.spots.length && this._separator}
        />
        <TouchableOpacity
          testID="addSpotButton"
          style={styles.back}
          onPress={() => this.props.navigation.navigate('addSpot', { spots: this.spots })}
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
    bullet: {
      height: 40,
      width: 40,
    },
    bin: {
      height: 20,
      width: 20,
    },
    binContainer: {
      padding: 5,
      backgroundColor: 'orange',
    },
    itemText: {
      flex: 1,
      marginLeft: 16,
      marginRight: 24,
    },
    itemSubText: {
      marginLeft: 8,
      marginRight: 24,
      fontStyle: 'italic',
    },
    back: {
      backgroundColor: theme.colors.oceanBlue,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    buttonText: {
      fontSize: 17,
    },
    separator: {
      borderBottomColor: theme.colors.darkGray,
      borderBottomWidth: 2,
    },
    header: {
      fontSize: 17,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
  });
