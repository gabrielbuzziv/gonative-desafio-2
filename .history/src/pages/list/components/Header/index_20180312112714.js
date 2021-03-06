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
    console.tron.log(response);
    console.tron.log(response.data.id);
    console.tron.log(response.data.owner.id);
    // const newRepository = {
    //   id: response.id,
    //   name: response.full_name,
    //   organization: response.organization ? response.organization.login : response.owner.login,
    //   avatar: response.organization ? response.organization.avatar_url : response.owner.avatar_url,
    // };

    // let repositories = (await AsyncStorage.getItem('@Github:repositories')) || JSON.stringify([]);
    // repositories = JSON.parse(repositories);
    // repositories = [...repositories, newRepository];
    // console.log(repositories);

    // console.tron.log(repositories);

    // console.tron.log(repo);
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
