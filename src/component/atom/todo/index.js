import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const style = StyleSheet.create({
    todo: {
        flexDirection:'row',
        backgroundColor: 'white', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2, 
        elevation: 5,
        justifyContent: 'space-between',
        padding: 10, 
        margin: 10
    },
    text: {
        justifyContent: 'space-between'
    },
    date: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold'
    },
    delete: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
    }
  })

const Todo = (props) => {
    return(
        <View style={style.todo} key={props.keyval}>
            <View style={style.text}>
            <Text style={style.date}>{props.val.date}</Text>
            <Text style={style.date}>{props.val.note}</Text>
            </View>
            <TouchableOpacity onPress={props.deleteMethod} style={style.delete}>
                <Ionicons name='md-trash' size={20} color='white' />
            </TouchableOpacity>
        </View>
    )
}

export default Todo;