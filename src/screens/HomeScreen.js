import { Assets } from '@react-navigation/stack';
import React from 'react';
import { CheckBox } from 'react-native';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableHighlight,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

const {height, width} = Dimensions.get('window');
export function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <ImageBackground
      source={require('../assets/hcbk.jpg')}
      style={{height, width, flex: 1,}}>
      <View
        style={{
            //  backgroundColor: 'red',
          width: width,
          height: height * 0.35,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
             marginBottom: -120,
            //  backgroundColor: '#c4deff',
            backgroundColor: 'red',
            borderWidth: 5,
            borderColor: 'black',
            height: height * 0.13,
            width: width * 1,
            
             justifyContent: 'center',
             alignItems: 'center',
            shadowColor: 'white',
            shadowOffset: {width: 4, height: 8},
            shadowOpacity: 5
          }}>
          <Text
            style={{
              fontSize: height * 0.05,
              padding: 5,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Home Celebration
          </Text>
        </TouchableOpacity>
      </View>
        

      <View
        style={{
          width,
          height: height * 0.7,
          // backgroundColor: 'pink',
          paddingTop: height * 0.02,
          marginTop: 1,
          // flexDirection: 'row'
          // justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <View style= {{width, height: height * 0.14, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
           <View style={{width: width * 0.21,  height: height * 0.11, justifyContent: 'center', alignItems: 'center'}}>
 
              <Image source={require('../assets/clbicn.png')}
               style={{width: width * 0.24, height: height * 0.12, justifyContent: 'center', }}>
               </Image>

          </View> 

         <View style={{height: height * 0.15, alignItems:'center', justifyContent: 'center', padding: 5}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CategoriesScreen')}
            activeOpacity={0.7}
            style={{ 
              width: width * 0.7,
              height: height * 0.12,
              backgroundColor: 'white',
              marginTop: 1,
              marginRight: -10,
              marginLeft: 5,
               justifyContent: 'center',
               alignItems: 'center',
              borderRadius: height * 0.04,
              borderWidth: 5,
              borderColor: 'black',
              shadowColor: 'red',
              shadowOpacity: 12,
              shadowOffset: {width: 5, height: 10}
              
            }}>
            <Text style={{fontSize: height * 0.05, fontWeight: 'bold'}}>
              Add Details
            </Text>
          </TouchableOpacity>
         </View>
        </View>

        <View style= {{width, height: height * 0.14, marginTop: 30, flexDirection: 'row', alignItems: 'center'}}>
          

         <View style={{height: height * 0.13, alignItems:'center', justifyContent: 'center', padding: 5}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewDetails')}
            activeOpacity={0.7}
            style={{ 
              width: width * 0.7,
              height: height * 0.12,
              backgroundColor: 'white',
              marginTop: 1,
              // marginRight: -10,
              // marginLeft: 5,
               justifyContent: 'center',
               alignItems: 'center',
              borderRadius: height * 0.04,
              borderWidth: 5,
              borderColor: 'black',
              shadowColor: 'red',
              shadowOpacity: 12,
              shadowOffset: {width: 5, height: 10}
              
            }}>
            <Text style={{fontSize: height * 0.05, fontWeight: 'bold'}}>
              View Details
            </Text>
          </TouchableOpacity>
         </View>

         <View style={{width: width * 0.21,  height: height * 0.11, justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>
 
              <Image source={require('../assets/clbicn.png')}
               style={{width: width * 0.24, height: height * 0.12, justifyContent: 'center', }}>
               </Image>

          </View>
        </View>

        <View style={{marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AboutUs')}
            style={{
              width: width * 0.8,
              height: height * 0.1,
              backgroundColor: '#64020f',
              // marginLeft: -60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: height * 0.025,
              borderWidth: 5,
              borderColor: 'white'
            }}>
            
            <Text style={{fontSize: height * 0.05, fontWeight: 'bold', color: 'white' }}>About Us</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>


    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

