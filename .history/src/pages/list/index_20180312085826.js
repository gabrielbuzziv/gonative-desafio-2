import React, { Component } from 'react';

import { View, TextInput } from 'react-native';

import styles from './styles';

export default class List extends Component {
  static navigationOptions = {
    title: <TextInput style={styles.headerInput} placeholder="Adicionar Repositório" />,
  };

  render() {
    return <View />;
  }
}
