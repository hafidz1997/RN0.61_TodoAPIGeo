// import React from 'react';
// import { FlatList, Text } from 'react-native';
// import Navbar from '../../../component/atom/navbar';
// import Post from '../../../component/atom/post';
// import AddButton from '../../../component/atom/addButton';

// class PostScreen extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       data:[]
//     }
//   }

//   componentDidMount()
//   {
//     this.apiCall();
//   }

//   async apiCall(){
//     let resp =await fetch('https://jsonplaceholder.typicode.com/posts/');
//     let respjson = await resp.json();
//     // console.warn(respjson);
//     this.setState({data:respjson})
//   }
//     render() {
//       return (
//         <>
//         <Navbar title={'POST'}/>
//         <FlatList
//         data={this.state.data}
//         renderItem={({item})=>
//         <Post title={item.title} desc={item.body}/>
//         }
//         />
//         <AddButton/>
//         </>
//       );
//     }
// }

// export default PostScreen;

import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

class PostScreen extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default PostScreen;