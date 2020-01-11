import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
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
        flex: 1, 
        flexDirection: 'row'
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
            <CheckBox 
            value={props.valChecked}
            onChange={props.onChange}
            />
            <View>
            <Text style={style.date}>{props.val.date}</Text>
            <Text style={style.date}>{props.val.note}</Text>
            </View>
            </View>
            <TouchableOpacity onPress={props.deleteMethod} style={style.delete}>
                <Ionicons name='md-trash' size={20} color='white' />
            </TouchableOpacity>
        </View>
    )
}

export default Todo;