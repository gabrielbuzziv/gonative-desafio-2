import React, { Component } from 'react';

import { View, Text, AsyncStorage, ActivityIndicator, FlatList, StatusBar } from 'react-native';

import Header from './components/Header';

import styles from './styles';

export default class List extends Component {
  static navigationOptions = {
    header: <Header />,
  };

  state = {
    repositories: [],
    loading: true,
    refreshing: false,
  };

  async componentDidMount() {
    await this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const repositories = (await AsyncStorage.getItem('@Github:repositories')) || JSON.stringify([]);

    console.tron.log(repositories);
    this.setState({ repositories: JSON.parse(repositories), loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <Text style={styles.item}>{item.id}</Text>;

  renderList = () => {
    <FlatList
      data={this.state.repositories}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadRepositories}
      refreshing={this.state.refreshing}
    />;
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View>
          {this.state.loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
        </View>
      </View>
    );
  }
}
