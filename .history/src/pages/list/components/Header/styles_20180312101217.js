import { StyleSheet } from 'react-native';
import { colors } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 0 1 auto,
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: colors.white,
  },

  input: {
    fontSize: 12,
    backgroundColor: colors.lighter,
  },
});
