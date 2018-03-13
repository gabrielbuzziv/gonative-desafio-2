import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

export default class extends Component {
  static navigationOptions = {
    title: 'SOMETHING',
  };

  async componentDidMount() {
    const repository = this.props.navigation.state.params.repository;
    this.navigationOptions.title = repository.organization;
  }

  render() {
    return (
      <View>
        <Text>Issues here.</Text>
      </View>
    );
  }
}
