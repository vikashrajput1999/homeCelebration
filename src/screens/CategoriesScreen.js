import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from '../screens/context';
const {height, width} = Dimensions.get('window');

export function CategoriesScreen({navigation}) {
  const {state, setState} = React.useContext(TakeHolidayContext);
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {details: item})}
      style={{
        width: width * 0.9,
         alignItems: 'center',
        flexDirection: 'row',
        height: height * 0.14,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderWidth: 5,
        marginTop: height * 0.018,
        shadowColor: '#4a90e2',
        shadowOffset: {width: 1, height: 10},
        shadowOpacity: 20,
        shadowRadius: 5,
      }}>
      
      <View
        style={{
          width: width * 0.9,
          height: height * 0.1,
          // borderRadius: 40,
          flexDirection: 'row',
          borderWidth: 4,
          borderTopLeftRadius: 30,
          borderBottomEndRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#d32f2f',
          
        }}>
        {/* <Image
          source={require('../assets/ptimg.png')}
          style={{height: height * 0.1, width: width * 0.2}}
        /> */}
        <Text
          style={{
            fontSize: height * 0.035,
            fontWeight: 'bold',
            // textDecorationLine: 'underline',
            color: 'white',
          }}>
          {item}
        </Text>
        
      </View>
        {/* <View style={{width: width * 0.23, height: height * 0.1, marginLeft: 10}}>
           <Image
                 source={require('../assets/mtimg.png')}
                style={{height: height * 0.1, width: width * 0.22}}
           />
        </View> */}
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{width, height}}>
      <ImageBackground
        style={{width, height, flex: 1}}
        blurRadius={0}
        source={require('../assets/hcbk.jpg')}>
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
              Categories
            </Text>
          </View>
          <View style={{padding: 20}}>
            <Text></Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            //  backgroundColor: '#f5fa',
            height: height * 0.85,
          }}>
          {/* <Text style={{fontSize: height * 0.1}}>slfj</Text> */}
          <FlatList
            showsVerticalScrollIndicator={false}
            data={['Birth',
            'Rites of Passage',
            'Graduation',
            'Engagement',
            'Birthday',
            'Honors',
            'Wedding Anniversary',
            'Pets',
            'Personal History',
            'Add Your Own Celebrations']}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
