import { StyleSheet } from 'react-native'
import theme from '../../theme'

export default StyleSheet.create({
  container: {
    ...theme.container,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: '#970b11',
    textAlign: 'center',
  },
})
