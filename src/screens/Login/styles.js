import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    marginTop: 80,
  },
  containerForm: {
    flex: 4,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 20,
    color: colors.white,
  },
  emailField: {
    backgroundColor: colors.white,
    // opacity: 0.6,
    fontSize: 20,
    padding: 10,
    marginTop: 3,
    borderRadius: 7,
  },
  passwordField: {
    backgroundColor: colors.white,
    // opacity: 0.6,
    fontSize: 20,
    padding: 10,
    marginTop: 3,
    borderRadius: 7,
  },
  containerButtons: {
    flex: 2,
  },
  loginButtonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: colors.lightblue,
    padding: 10,
    marginTop: 30,
    borderRadius: 7,
    marginHorizontal: 40,
  },
  registerButtonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
  registerButton: {
    textDecorationStyle: 'solid',
    textDecorationColor: colors.blue,
    padding: 10,
    marginTop: 15,
    borderRadius: 7,
    marginHorizontal: 40,
  },
})
