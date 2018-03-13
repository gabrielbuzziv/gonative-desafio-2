import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

export default class extends Component {
  static navigationOptions = {
    title: 'SOMETHING',
  };

  async componentDidMount() {
    const repository = this.props.navigation.state.params.repository;

    console.tron.log(respository);
  }

  render() {
    return (
      <View>
        <Text>Issues here.</Text>
      </View>
    );
  }
}
