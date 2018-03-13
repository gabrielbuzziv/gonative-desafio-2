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

    try {
      const response = await api.get(`/repos/${repository}`);
      const repo = {
        id: response.id,
        name: response.full_name,
        organization: response.organization.login,
        avatar: response.organization.avatar_url,
      };

      console.tron.log(repo);
    } catch (err) {
      alert('Failed');
    }

    // const repositories = (await AsyncStorage.getItem('@Github:repositories')) || JSON.stringify([]);

    // console.tron.log(repositories);

    // repositories = { ...repositories, repository };

    // console.tron.log(repositories);

    // await AsyncStorage.setItem('@Github:repositories', JSON.stringify(repositories));
  };

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
