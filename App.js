import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import About from './src/pages/about/about.component';
import Login from './src/pages/login/login.component';

export default function App() {
  return (
    <NativeRouter>
      <View>
        <Route exact path = "/" component={Login}></Route>
        <Route path = "/about" component={About}></Route>
      </View>
    </NativeRouter>
  );
}