import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class FilterList extends Component {
  static propTypes = {
    updateFilter: PropTypes.func.isRequired,
  };

  selectFilter = ({ filter }) => {
    this.props.updateFilter({ filter });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.selectFilter({ filter: 'all' })}>
          <Text style={[styles.filter, this.props.selectFilter == 'all' && styles.active]}>
            Todas ({this.props.selectedFilter})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.selectFilter({ filter: 'open' })}>
          <Text style={styles.filter}>Abertas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.selectFilter({ filter: 'closed' })}>
          <Text style={styles.filter}>Fechadas</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
