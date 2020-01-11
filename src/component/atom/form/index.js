import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { tsPropertySignature } from '@babel/types';

const style = StyleSheet.create({
    footer: {
        position:'absolute',
        bottom: 20,
        width: '70%',
        height: 60
    },
    input: {
        padding: 20,
        marginLeft:20,
        color: 'black',
        borderRadius: 6,
        borderWidth: 1,
    }
  })

const Form = (props) => {
    return(
        <View style={style.footer}>
        <TextInput placeholder="masukkan to do" style={style.input} 
        onChangeText={props.onChangeText}
        value={props.value}>
        </TextInput>
        </View>
    )
}

export default Form;