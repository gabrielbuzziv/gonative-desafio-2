import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-around',
    backgroundColor: colors.white,
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.baseMargin,
  },

  left: {
    flexGrow: 1,
  },

  right: {
    flexGrow: 0,
    width: 20,
    textAlign: 'center',
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
