import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class FilterList extends Component {
  selectFilter = () => {
    console.tron.log('Should do something now!);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectFilter}>
          <Text style={styles.filter}>Todas</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
