import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class FilterList extends Component {
  updateFilter = (filter) => {
    console.tron.log(filter);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.updateFilter('all')}>
          <Text style={styles.filter}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.updateFilter('open')}>
          <Text style={styles.filter}>Open</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.updateFilter('Closed')}>
          <Text style={styles.filter}>Closed</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
