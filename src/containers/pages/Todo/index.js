import React from 'react';
import { StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
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
            checked: {}
        }
    }

    async componentDidMount() {
        const noteArray = await AsyncStorage.getItem('dt');
        if (noteArray !== '') {
            this.setState({noteArray: JSON.parse(noteArray) || []});
        }
        const checked = await AsyncStorage.getItem('checked');
        this.setState({checked: JSON.parse(checked) || []});

    }

    render() {
        
        let notes = this.state.noteArray.map((val, key)=>{
            return <Todo 
                    key={key} 
                    keyval={key} 
                    val={val}
                    valChecked={this.state.checked[key]}
                    onChange= {() => this.check(key) }
                    deleteMethod={()=>this.deleteNote(key)}
                    />
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
            'date':  d.getDate()+
                    "/" + (d.getMonth()+1) + 
                    "/" + d.getFullYear(),
            'note': this.state.noteText,
            'checked': false
        });
        this.setState({
            noteArray: this.state.noteArray,
            noteText: ''
        },() => AsyncStorage.setItem('dt', JSON.stringify(this.state.noteArray)));
        }else{
            alert('masukkan todo');
        }
    }

    deleteNote(key){
        const checkCopy = {...this.state.checked};
        checkCopy[key] = false;
        this.state.noteArray.splice(key, 1);
        this.setState({
            noteArray: this.state.noteArray,
            checked: checkCopy 
        },() => AsyncStorage.setItem('dt', JSON.stringify(this.state.noteArray)),
        () => AsyncStorage.setItem('checked', JSON.stringify(this.state.checked))
        );
    }

    check = (key) => {
        const checkCopy = {...this.state.checked}
        if (checkCopy[key]) checkCopy[key] = false;
        else checkCopy[key] = true;
        this.setState({ 
            checked: checkCopy 
        },() => AsyncStorage.setItem('checked', JSON.stringify(this.state.checked)));
    }

}



export default TodoScreen;