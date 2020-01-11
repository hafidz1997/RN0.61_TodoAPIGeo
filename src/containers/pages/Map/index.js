import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Navbar from '../../../component/atom/navbar';
import MapView, { Marker, AnimatedRegion} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

class MapScreen extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        latitude: 0,
        longitude: 0,
        error: null
      };
    }

    // gotToMyLocation(){
    //   console.log('gotToMyLocation is called')
    //   Geolocation.getCurrentPosition(
    //     (position) => {
    //       console.log("curent location: ", position);
    //       console.log(this.map);
    //       if (this.map) {
    //         console.log("curent location: ", position)
    //         this.map.animateToRegion({
    //           latitude: position.coords.latitude,
    //           longitude: position.coords.longitude,
    //           latitudeDelta: 0.005,
    //           longitudeDelta: 0.005
    //         })
    //       }
    //     },
    //     (error) => alert('Error: Are location services on?'),
    //     { enableHighAccuracy: true }
    //   )
    // }

    componentDidMount(){
      Geolocation.getCurrentPosition(position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      }, 
      error => this.setState({error: error.message})),
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 2000}
    }


    render() {
      return (
        <>
        <Navbar title={'MAP'}/>
        <MapView style={{flex:1, justifyContent:'center', alignItems:'center'}}
          initialRegion={{
            latitude: -6,
            longitude: 107,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
        >
          <Marker coordinate={this.state}/>
        </MapView>
        {/* <TouchableOpacity onPress={this.gotToMyLocation.bind(this)} style={{
          width: 60, height: 60,
          position: "absolute", bottom: 20, right: 20, borderRadius: 30, backgroundColor: "tomato"
        }}>
          <Text>Locate</Text>
        </TouchableOpacity> */}
        </>
      );
    }


}

export default MapScreen;