import React, { Component } from 'react';

import { View, TextInput } from 'react-native';

import styles from './styles';

export default class List extends Component {
  static navigationOptions = {
    headerLeft: (
      <TextInput
        style={styles.headerInput}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Adicionar Repositório"
        underlineColorAndroid="rgba(0, 0, 0, 0)"
      />
    ),
  };

  render() {
    return <View />;
  }
}
