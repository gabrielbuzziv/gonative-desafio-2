import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

export default class extends Component {
  static navigationOptions = {
    title: 'Issues',
  };

  async componentDidMount() {
    this.navigationOptions.title = this.props.repository.name;
  }

  render() {
    return (
      <View>
        <Text>Issues here.</Text>
      </View>
    );
  }
}
