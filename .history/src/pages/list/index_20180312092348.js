import React, { Component } from 'react';

import { View, TextInput } from 'react-native';

import Header from './components/Header';

import styles from './styles';

export default class List extends Component {
  static navigationOptions = {
    header: <Header />,
  };

  render() {
    return <View />;
  }
}
