import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

export default class extends Component {
  static navigationOptions = {
    title: 'Issues',
  };

  state = {
    repository: {},
  };

  async componentDidMount() {
    this.setState({ repository: this.props.navigation.state.params.repository });
    this.navigationOptions.title = this.state.repository.name;
  }

  render() {
    return (
      <View>
        <Text>Issues here.</Text>
      </View>
    );
  }
}
