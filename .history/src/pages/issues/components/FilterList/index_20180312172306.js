import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class FilterList extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  updateFilter = (filter) => {
    const { repository } = this.props;

    this.props.navigation.navigate('Issues', { repository, filter });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.updateFilter('all')}>
          <Text style={styles.filter} />
        </TouchableOpacity>
      </View>
    );
  }
}
