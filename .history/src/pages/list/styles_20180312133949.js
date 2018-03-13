import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: metrics.basePadding,
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },

  item: {
    marginTop: metrics.basePadding * 2,
  },
});
