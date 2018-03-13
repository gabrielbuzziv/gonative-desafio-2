import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

export default StyleSheet.create({
  container: {
    ...general.box,

    flex: 1,
    flexDirection: 'row',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
