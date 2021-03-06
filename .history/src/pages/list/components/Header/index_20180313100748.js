import React, { Component } from 'react';
import api from 'services/api';

import { View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Header extends Component {
  state = {
    repository: '',
  };

  addRepository = async () => {
    const { repository } = this.state;

    if (repository.length === 0) return;

    const response = await api.get(`/repos/${repository}`);
    const newRepository = this.createRespository(response);

    let repositories = (await AsyncStorage.getItem('@Github:repositories')) || JSON.stringify([]);
    repositories = JSON.parse(repositories);
    repositories = [...repositories, newRepository];

    await AsyncStorage.setItem('@Github:repositories', JSON.stringify(repositories));
    this.props.loadRepositories();
    this.setState({ repository: '' });
  };

  createRespository = repository => ({
    id: repository.data.id,
    name: repository.data.full_name,
    organization: repository.data.organization
      ? repository.data.organization.login
      : repository.data.owner.login,
    avatar: repository.data.organization
      ? repository.data.organization.avatar_url
      : repository.data.owner.avatar_url,
  });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar repositório"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            value={this.state.repository}
            onChangeText={repository => this.setState({ repository })}
          />
        </View>

        <View style={styles.right}>
          <TouchableOpacity onPress={this.addRepository}>
            <Icon name="plus" size={16} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
