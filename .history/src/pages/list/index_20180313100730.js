import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, AsyncStorage, ActivityIndicator, FlatList, StatusBar } from 'react-native';

import Header from './components/Header';
import RepositoryItem from './components/RepositoryItem';

import styles from './styles';

export default class List extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setParams: PropTypes.func,
    }).isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    header: <Header {...navigation.state.params} />,
  });

  state = {
    repositories: [],
    loading: true,
    refreshing: false,
  };

  async componentDidMount() {
    this.props.navigation.setParams({
      loadRepositories: this.loadRepositories,
    });

    await this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const repositories = (await AsyncStorage.getItem('@Github:repositories')) || JSON.stringify([]);
    this.setState({ repositories: JSON.parse(repositories), loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => (
    <RepositoryItem repository={item} navigation={this.props.navigation} />
  );

  renderList = () => (
    <FlatList
      data={this.state.repositories}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadRepositories}
      refreshing={this.state.refreshing}
    />
  );

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
