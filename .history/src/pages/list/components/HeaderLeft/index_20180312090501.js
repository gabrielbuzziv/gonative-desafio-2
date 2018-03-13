import React, { Component } from 'react';

import { TextInput } from 'react-native';

export default class HeaderLeft extends Component {
  render() {
    return (
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Adicionar Repositório"
        underlineColorAndroid="rgba(0, 0, 0, 0)"
      />
    );
  }
}
