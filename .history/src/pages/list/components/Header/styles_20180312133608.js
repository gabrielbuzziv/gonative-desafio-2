import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'stretch',
    backgroundColor: colors.white,
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.baseMargin,
  },

  left: {
    flexGrow: 1,
  },

  right: {
    flexGrow: 0,
    alignContent: 'center',
  },

  icon: {
    justifyContent: 'center,'
    paddingHorizontal: metrics.baseMargin,
    color: colors.darker,
  },

  input: {
    fontSize: 12,
    paddingVertical: 0,
    paddingHorizontal: metrics.baseMargin,
    lineHeight: 20,
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.lighter,
  },
});
