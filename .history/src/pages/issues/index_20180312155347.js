import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    title: navigation.state.params.repository.name,
  }

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
