import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class HelloWorldApp extends React.Component {
  render () {
    return (
        <Text style= { styles.HelloText }>Hello World</Text>
    )
  }
}

const styles = StyleSheet.create({
  HelloText: {
    color: 'red'
  }
});