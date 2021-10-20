import React from 'react';
import {Text, Linking} from 'react-native';

export default function MyLink(props) {
  return (
    <Text style={{color: 'blue'}} onPress={() => Linking.openURL(props.link)}>
      {props.text}
    </Text>
  );
}
