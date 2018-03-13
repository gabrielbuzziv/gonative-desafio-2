import { StyleSheet } from 'react-native';
import { colors } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: colors.white,
  },

  left: {
    flexGrow: 1,
  },

  right: {
    flexGrow: 0,
    width: 20;
  },

  input: {
    fontSize: 12,
    backgroundColor: colors.lighter,
  },
});
