import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: colors.white,
    padding: metrics.basePadding,
  },

  left: {
    flexGrow: 1,
  },

  right: {
    flexGrow: 0,
    width: 20,
  },

  input: {
    fontSize: 12,
    paddingVertical: 0,
    paddingHorizontal: metrics.basePadding,
    lineHeight: 20,
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.lighter,
  },
});
