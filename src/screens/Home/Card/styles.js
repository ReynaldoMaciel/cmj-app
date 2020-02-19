import colors from '../../../constants/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    paddingVertical: 9,
    marginVertical: 6,
    backgroundColor: colors.white,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.lightblue,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  numberText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.lightblue,
  },
  text: {
    fontSize: 15,
    color: colors.lightblue,
  },
  leftContainer: {
    // alignItems: 'center',
    maxWidth: 250,
    justifyContent: 'center',
  },
  rightContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
