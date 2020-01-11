import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { tsPropertySignature } from '@babel/types';

const style = StyleSheet.create({
    footer: {
        position:'absolute',
        bottom: 0,
        width: '50%',
        height: 60,
        zIndex: 10
    },
    input: {
        padding: 20,
        color: 'white',
        backgroundColor: 'black',
        alignSelf: 'stretch'
    }
  })

const Form = (props) => {
    return(
        <View style={style.footer}>
        <TextInput style={style.input} 
        onChangeText={props.onChangeText}
        value={props.value}>
        </TextInput>
        </View>
    )
}

export default Form;