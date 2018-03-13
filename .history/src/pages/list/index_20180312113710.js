import React, { Component } from 'react';

import { View, Text, AsyncStorage, FlatList } from 'react-native';

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

  loadRepositories = async () => {
    this.setState({ loading: true });

    const repositories = (await AsyncStorage.getItem('@Github:repositories')) || JSON.stringify([]);
    this.setState({ repositories: JSON.parse(repositories) });
  };

  renderListItem = ({ item }) => <Text>{item.id}</Text>;

  render() {
    return <View />;
  }
}
