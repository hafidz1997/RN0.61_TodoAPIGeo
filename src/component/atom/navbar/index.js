import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const style = StyleSheet.create({
    navbar: {
        backgroundColor: 'tomato', 
        height: 60,
        justifyContent: 'center',
        padding: 10
    },
    navtext: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
  })

const Navbar = (props) => {
    return(
        <View style={style.navbar}>
        <Text style={style.navtext}>{props.title}</Text>
        </View>
    )
}

export default Navbar;