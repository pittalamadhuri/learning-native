import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/Styles';

export default function MyButton(props) {
  return (
    <TouchableOpacity onPress={props.onClick} style={styles.button}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}
