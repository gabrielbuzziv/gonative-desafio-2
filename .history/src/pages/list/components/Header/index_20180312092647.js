import React, { Component } from 'react';

import { View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Header extends Component {
  state = {
    respository: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar Repositório"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            value={this.state.respository}
            onChangeText={respository => this.setState(respository)}
          />
        </View>

        <View style={styles.right}>
          <TouchableOpacity onPress={this.addRepository}>
            <Icon name="plus" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
