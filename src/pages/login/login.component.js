import React, {useState} from 'react';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import {useHistory} from 'react-router-dom';
import MyButton from '../../components/myButton/myButton.component';
import myButton from '../../components/myButton/myButton.component';
import MyLink from '../../components/myLink/myLink.component';
import styles from '../../styles/Styles';

export default function Login() {
  let history = useHistory();
  const [username, changeUsername] = useState('');
  const [password, changePassword] = useState('');
  function login() {
    if (username == 'test' && password == 'test') {
      console.log('logged in');
      goToAboutPage();
    }
  }
  function goToAboutPage() {
    history.push('/about');
  }
  return (
    <ScrollView>
      <View style={styles.centerView}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.textField}
          onChangeText={text => changeUsername(text)}
          value={username}></TextInput>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textField}
          onChangeText={text => changePassword(text)}
          value={password}></TextInput>
        <MyButton text="Login" onClick={login} />
        <Text onPress={goToAboutPage} style={styles.linkText}>
          About
        </Text>
      </View>
    </ScrollView>
  );
}
