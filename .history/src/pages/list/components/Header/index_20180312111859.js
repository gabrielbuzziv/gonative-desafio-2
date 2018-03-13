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

    // const response = await api.get(`/repos/${repository}`);
    // const newRepository = this.createRepository(response);

    AsyncStorage.clear();
    let repositories = await AsyncStorage.getItem('@Github:repositories');
    repositories = JSON.parse(repositories);

    console.tron.log(repositories);

    // console.tron.log(repo);
  };

  createRepository = repository => ({
    id: repository.id,
    name: repository.full_name,
    organization: repository.organization.login,
    avatar: repository.organization.avatar_url,
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
            <Icon name="exchange" size={16} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
