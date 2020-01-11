import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const style = StyleSheet.create({
    post: {
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
    title: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold'
    },
    desc: {
        color: 'grey',
        fontSize: 12,
    }
  })

const Post = (props) => {
    return(
        <View style={style.post} key={props.keyval}>
            <View style={style.text}>
            <Text style={style.title}>{props.title}</Text>
            <Text style={style.desc}>{props.desc}</Text>
            </View>
        </View>
    )
}

export default Post;