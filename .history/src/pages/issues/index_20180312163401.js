import React, { Component } from 'react';
import api from 'services/api';

import { View, Text, ActivityIndicator, FlatList } from 'react-native';

import styles from './styles';

export default class extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.repository.name,
  });

  state = {
    repository: null,
    issues: [],
    loading: true,
    refreshing: false,
  };

  async componentDidMount() {
    const { repository } = this.props.navigation.state.params;

    console.tron.log(repository);

    this.setState({ repository });
    await this.loadIssues();
  }

  loadIssues = async () => {
    this.setState({ refreshing: true });

    const { repository } = this.state;

    console.tron.log(repository);

    // const response = await api.get(`repos/${repository.name}/issues`);
    // this.setState({ issues: response.data, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <Text>{item.title}</Text>;

  renderList = () => (
    <FlatList
      data={this.props.issues}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadIssues}
      refreshing={this.state.refreshing}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
