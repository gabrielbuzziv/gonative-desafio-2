import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

export default StyleSheet.create({
  headerInput: {},

  container: {
    flex: 1,
    backgroundColor: colors.light,
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },

  item: {
    marginTop: metrics.basePadding,
  },
});
