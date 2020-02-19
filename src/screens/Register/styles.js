import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  containerSafeArea: {
    flex: 1,
  },
  containerLogo: {
    flex: 2,
    alignItems: 'center',
  },
  logo: {
    width: '75%',
    height: 100,
  },
  containerForm: {
    flex: 4,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  field: {
    backgroundColor: colors.white,
    opacity: 0.6,
    fontSize: 20,
    padding: 10,
    marginTop: 3,
    borderRadius: 7,
    // borderBottomColor: 'gray',
    // borderBottomWidth: 4,
  },
  containerButtons: {
    flex: 2,
  },
  loginButtonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: colors.lightblue,
    padding: 10,
    marginTop: 15,
  },
  registerButtonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
  backButtonText: {
    padding: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  registerButton: {
    backgroundColor: colors.lightblue,
    padding: 10,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 7,
  },
})
