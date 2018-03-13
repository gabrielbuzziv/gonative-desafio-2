import React, { Component } from 'react';
import api from 'services/api';

import { View, Text, ActivityIndicator, FlatList } from 'react-native';

import styles from './styles';

export default class extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.repository.name,
  });

  state = {
    repository: {},
    issues: [],
    loading: true,
    refreshing: false,
  };

  async componentDidMount() {
    this.setState({ repository: this.props.navigation.state.params.repository });
    await this.loadIssues();
  }

  loadIssues = async () => {
    this.setState({ refreshing: true });

    const response = await api.get(`repos/${this.state.repository.name}/issues`);
    this.setState({ issues: response.data, loading: false, refreshing: false });
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
      <View>
        <Text>Issues here.</Text>
      </View>
    );
  }
}
