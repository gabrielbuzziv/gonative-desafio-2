import { StyleSheet } from 'react-native';
import { colors } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: colors.white,
  },

  input: {
    flexGrow: 1,
    fontSize: 12,
    backgroundColor: colors.lighter,
  },
});
