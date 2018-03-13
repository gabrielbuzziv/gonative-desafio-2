import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class RespositoryItem extends Component {
  propTypes = {
    repository: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      organization: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
  };

  gotoRepository = () => {
    alert('Goto Repository!');
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: this.props.repository.avatar }} />
        <View style={styles.data}>
          <Text style={styles.name}>{this.props.repository.name}</Text>
          <Text style={styles.organization}>this.props.repository.organization</Text>
        </View>

        <View style={styles.navigation}>
          <TouchableOpacity onPress={gotoRepository}>
            <Icon name="plus" size={16} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
