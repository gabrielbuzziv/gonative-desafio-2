import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

export default class IssueItem extends Component {
  static propTypes = ({
    issue: PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
  }

  render() {
    return <View />;
  }
}
