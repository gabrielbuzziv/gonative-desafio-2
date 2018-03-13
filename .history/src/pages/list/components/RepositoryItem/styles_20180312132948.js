import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

export default StyleSheet.create({
  container: {
    ...general.box,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: metrics.baseMargin,
  },
});
