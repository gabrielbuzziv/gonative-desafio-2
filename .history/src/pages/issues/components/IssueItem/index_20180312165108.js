import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class IssueItem extends Component {
  static propTypes = ({
    issue: PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: this.props.issue.avatar }} />

        <View style={styles.data}>
          <Text style={styles.title}>{this.props.issue.title}</Text>
          <Text style={styles.author}>{this.props.issue.author}</Text>
        </View>

        <TouchableOpacity>
          <Icon name="chevron-right" size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}
