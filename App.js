import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Signup from './client/screens/signup';
import { Provider } from 'react-redux';
import store from './client/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Signup />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
