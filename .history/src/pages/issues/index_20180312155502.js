import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

export default class extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.repository.name,
  });

  state = {
    repository: {},
  };

  async componentDidMount() {
    this.setState({ repository: this.props.navigation.state.params.repository });
  }

  render() {
    return (
      <View>
        <Text>Issues here.</Text>
      </View>
    );
  }
}
