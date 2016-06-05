/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

import Resource from './App/Components/Resource'

class Chelsie extends Component {
  renderScene(route, navigator){
    if (route.name == 'Resource') {
      return <Resource navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Resource' }}
        renderScene={ this.renderScene.bind(this) }
      />
    );
  }
}

var styles = StyleSheet.create({
  other: {
    flex: 1,
    backgroundColor: '#aaeaca'
  },
  word: {
    fontFamily: 'Cochin',
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold'
  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});

AppRegistry.registerComponent('Chelsie', () => Chelsie);
