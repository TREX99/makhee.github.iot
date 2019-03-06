import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class SearchBox extends React.Component {
  constructor ( props ) {
    super ( props )
    this.state = {
      value: ''
    }

  }

  render () {
    const { value } = this.state

    const onChangeTextHandler = (e) => {
      this.setState( { value: e } )
    }

    const onBtnPress = () => {
      Alert.alert( this.state.value )
    }

    return (
      <View style = {{ height: 40, flexDirection: 'row'}}>
        <View style = {{ flex: 3}}>
          <TextInput 
            style = {{ backgroundColor: 'steelblue', height: 36, padding: 10 }}
            placeholder = '검색어를 입력하세요.'
            onChangeText = { onChangeTextHandler }/>
        </View>
        <View style={{ flex: 1}}>
          <Button 
            style = {{ }}
            title = '검색'
            onPress = { onBtnPress }
          />
        </View>
      </View>
    )
  }
}