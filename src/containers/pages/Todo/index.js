import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from '../../../component/atom/navbar';
import AddButton from '../../../component/atom/addButton';
import Todo from '../../../component/atom/todo';
import Form from '../../../component/atom/form';
import { ScrollView } from 'react-native-gesture-handler';

const style = StyleSheet.create({
    container: {
      flex: 1
    }
  })

class TodoScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        }
    }

    render() {
        
        let notes = this.state.noteArray.map((val, key)=>{
            return <Todo key={key} keyval={key} val={val}
                    deleteMethod={()=>this.deleteNote(key)}/>
        })
        
      return (
          <>
            <Navbar title = {'TODO'}/>
            <View style={{flex:1}}>
            <ScrollView style={{marginBottom: 100}}>
                {notes}
            </ScrollView>
            <AddButton onPress={this.addNote.bind(this)}/>
            <Form onChangeText={(noteText)=>this.setState({noteText})}
            value={this.state.noteText}/>
            </View>
          </>
      );
    }

    addNote(){
        if(this.state.noteText){
        var d = new Date();
        this.state.noteArray.push({
            'date': d.getFullYear() +
            "/" + (d.getMonth()+1) + 
            "/" + d.getDate(),
            'note': this.state.noteText
        })
        this.setState({noteArray: this.state.noteArray})
        this.setState({noteText: ''})
        }else{
            alert('masukkan todo');
        }
    }

    deleteNote(key){
        this.state.noteArray.splice(key, 1);
        this.setState({noteArray: this.state.noteArray})
    }
}



export default TodoScreen;