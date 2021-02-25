import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  SafeAreaView
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from '../screens/context';
const {height, width} = Dimensions.get('window');

export function AboutUs({navigation}) {
  return (
    <SafeAreaView>
    <ImageBackground blurRadius={0} source={require('../assets/hcbk1.jpg')} style={{width, height, flex: 1}}>
      <View
        style={{
          justifyContent: 'space-between',
          backgroundColor: 'rgba(0,0,0,0.9)',
          height: height * 0.065,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center', padding: 5}}
          onPress={() => navigation.goBack()}>
          <Icon
            name="ios-arrow-back-outline"
            type="ionicon"
            size={height * 0.05}
            color="#fff"
          />
        </TouchableOpacity>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              color: '#fff',
              fontSize: height * 0.03,
              fontWeight: 'bold',
            }}>
            About Us
          </Text>
        </View>
        <View style={{padding: 20}}>
          <Text></Text>
        </View>
      </View>
      <View
        // source={require('../assets/holiday5.jpg')}
        style={{
          justifyContent: 'center',
             alignItems: 'center',
          // padding: height * 0.02,
        //   backgroundColor: '#f5fafa',
        //  backgroundColor: 'rgba(244,200,200,0.4)',
          height: height,
        }}>
        <View
          style={{
            marginTop: -100,
            height: height * 0.8,
            width: width * 0.98,
            paddingTop: height * 0.1,
            // paddingHorizontal: height * 0.02,
            backgroundColor: '(rgba(100,100,100,5))',
            borderColor: 'white',
            borderWidth: 2,
            borderColor: 'black',
            borderRadius: 20,

          }}>
          <Text
            style={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: '#ebe459',
              textAlign: 'center',
            }}>
            This is simple, amazing  and ads free app for Home Celebration.
          </Text>
          <Text
            style={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: '#fff',
              textAlign: 'center',
              paddingTop: height * 0.04,
            }}>
            In this app, there are various types of celebration like Graduation, Engagement,Birthday,Honors etc.
          </Text>
          <Text
            style={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: '#fff',
              textAlign: 'center',
              paddingTop: height * 0.05,
            }}>
            Also in this app, you can manage your celebration details.
          </Text>
          <Text
            style={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: 'rgba(235,100,150,10)',
              textAlign: 'center',
              paddingTop: height * 0.1,
            }}>
            Enjoy the App
          </Text>
        </View>
      </View>
    </ImageBackground>
    </SafeAreaView>
  );
}
