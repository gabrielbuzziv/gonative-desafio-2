import React, { Component } from 'react';
import api from 'services/api';

import { View, Text, ActivityIndicator, FlatList } from 'react-native';

import IssueItem from './components/IssueItem';

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

  componentDidMount() {
    const { repository } = this.props.navigation.state.params;
    this.setState({ repository }, this.loadIssues);
  }

  loadIssues = async () => {
    this.setState({ refreshing: true });

    const { repository } = this.state;

    const response = await api.get(`repos/${repository.name}/issues`);
    const issues = response.data.map(issue => ({
      title: issue.title,
      author: issue.user.login,
      avatar: issue.user.avatar_url,
      url: issue.html_url,
    }));
    this.setState({ issues, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <IssueItem issue={item} />;

  renderList = () => (
    <FlatList
      data={this.state.issues}
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
