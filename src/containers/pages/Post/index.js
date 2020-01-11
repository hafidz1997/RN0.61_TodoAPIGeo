import React from 'react';
import { FlatList, StyleSheet, Text,TextInput, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modalbox';
import Navbar from '../../../component/atom/navbar';
import Post from '../../../component/atom/post';
import AddButton from '../../../component/atom/addButton';

class PostScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      id: '',
      title: '',
      body: ''
    }
  }

  componentDidMount()
  {
    this.apiCall();
  }

  async apiCall(){
    let resp =await fetch('https://jsonplaceholder.typicode.com/posts/');
    let respjson = await resp.json();
    // console.warn(respjson);
    this.setState({data:respjson})
  }
    render() {
      return (
        <>
        <Navbar title={'POST'}/>
        <FlatList
          data={this.state.data}
          renderItem={({item})=>
          <Post title={item.title} desc={item.body}/>
          }
          keyExtractor={(item) => item.id.toString()} 
        />
        <AddButton onPress={this.openModal.bind(this)}/>
        <Modal ref={"Modal"} style={style.modalContainer} position='center'
        backdrop={true}>
          <Text style={style.judul}>Tambah Post</Text>
          <Text style={style.label}>Judul</Text>
          <TextInput 
          placeholder='Masukkan Judul'
          style={style.input}
          value={this.state.title}
          onChangeText={(text) => this.setState({title: text})} 
          />
          <Text style={style.label}>Isi</Text>
          <TextInput
          placeholder='Masukkan isi'
          style={style.input} 
          multiline = {true}
          numberOfLines = {4}
          value={this.state.body}
          onChangeText={(text) => this.setState({body: text})}  
          />
          <TouchableOpacity 
          style={style.button}
          onPress={this.addPost.bind(this)}
          >
            <Text style={style.buttonText}> Simpan</Text> 
          </TouchableOpacity>
        </Modal>
        </>
      );
    }

    addPost(){
      if(this.state.title && this.state.body){
      this.state.data.push({
          'id': this.generateId(24),
          'title': this.state.title,
          'body': this.state.body
      })
      this.setState({data: this.state.data});
      this.setState({title: ''});
      alert('post berhasil ditambahkan');
      this.refs.Modal.close();
      }else{
          alert('masukkan post');
      }
  }

    openModal(){
      this.refs.Modal.open();
    }

    generateId = (numberOfCharacters) => {
      return require('random-string')({length: numberOfCharacters});
    }
}


const style = StyleSheet.create({
  modalContainer: {
      // justifyContent: 'center',
      borderRadius: 30,
      shadowRadius: 10,
      width: '90%',
      height: 400
  },
  judul:{
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20
  },
  label:{
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20
  },
  input:{
    borderColor: 'grey',
    borderWidth: 1,
    margin: 20,
  },
  button:{
    backgroundColor: 'lightgreen',
    borderRadius: 6,
    width: 100,
    padding: 10,
    marginBottom: 20,
    alignSelf:'center'
  },
  buttonText:{
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default PostScreen;
