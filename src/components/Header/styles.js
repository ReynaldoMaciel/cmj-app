import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
  mainView: {
    height: 41,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: -1,
  },
  backButtonContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingVertical: 10,
    borderBottomColor: colors.lightblue,
    borderBottomWidth: 1,
  },
  titleText: {
    fontSize: 18,
    color: colors.lightblue,
  },
})
