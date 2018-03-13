import React, { Component } from 'react';

import { View, TextInput, AsyncStorage } from 'react-native';

import Header from './components/Header';

import styles from './styles';

export default class List extends Component {
  static navigationOptions = {
    header: <Header />,
  };

  state = {
    repositories: [],
    loading: true,
  };

  async componentDidMount() {
    await this.loadRepositories();
  }

  loadRepositories = async () => {};

  render() {
    return <View />;
  }
}
