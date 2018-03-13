import React, { Component } from 'react';

import { TextInput, AsyncStorage } from 'react-native';

export default class HeaderLeft extends Component {
  state = {
    respository: '',
  };

  render() {
    return (
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Adicionar Repositório"
        underlineColorAndroid="rgba(0, 0, 0, 0)"
        value={this.state.respository}
        onChangeText={respository => this.setState(respository)}
      />
    );
  }
}
