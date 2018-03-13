import React, { Component } from 'react';

import { View, TextInput } from 'react-native';

export default class List extends Component {
  static navigationOptions = {
    title: <TextInput placeholder="Adicionar Repositório" />,
  };

  render() {
    return <View />;
  }
}
