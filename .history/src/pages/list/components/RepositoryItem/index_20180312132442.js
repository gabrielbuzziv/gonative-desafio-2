import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: repository.avatar }} />
    <View style={styles.data}>
      <Text style={styles.name}>{repository.name}</Text>
      <Text style={styles.organization}>repository.organization</Text>
    </View>

    <View style={styles.navigation}>
      <TouchableOpacity onPress={gotoRepository}>
        <Icon name="plus" size={16} style={styles.icon} />
      </TouchableOpacity>
    </View>
  </View>
);

export default RepositoryItem;
