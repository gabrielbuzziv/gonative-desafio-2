import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class FilterList extends Component {
  selectFilter = ({ filter }) => {
    console.trong.log(filter);
    // this.props.updateFilter();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectFilter({ filter: 'all' })}>
          <Text style={styles.filter}>Todas</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
