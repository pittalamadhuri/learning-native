import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textField: {
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    width: 370,
    fontSize: 20,
  },
  label: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 0,
    alignSelf: 'baseline',
  },
  centerView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    height: 30,
    width: 300,
    marginTop: 10,
    backgroundColor: '#5f6fd8',
    borderRadius: 6,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
