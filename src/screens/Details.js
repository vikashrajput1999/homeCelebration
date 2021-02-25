import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from './context';
import {useIsFocused} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

export function Details({navigation, route}) {
  const {details} = route.params;
  console.log(details);
  const {state, setState} = React.useContext(TakeHolidayContext);
  const isFocused = useIsFocused();
  const getInitialData = async () => {};
  React.useEffect(() => {
    getInitialData();
  }, [navigation, isFocused]);

  const handleDelete = (idx) => {
    setState({
      ...state,
      [details]: state[details].filter((e, index) => index !== idx),
    });
  };
  console.log(state, details);
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          //backgroundColor: 'black',
          flexDirection: 'row',
          width: width * 0.96,
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AddDetails', {item: item, details: details})
          }
          style={{
            width: width * 0.85,
            height: height * 0.22,
            borderWidth: 5,
            borderColor: 'black',
             borderTopStartRadius: 40,
             borderTopEndRadius: 40,
            elevation: 1,
            // borderRadius: 40,
            backgroundColor: 'white',
            justifyContent: 'space-between',
            shadowColor: 'red',
            shadowOffset: {width: 4, height: 20},
            shadowOpacity: 20,
            shadowRadius: 5,

            marginTop: height * 0.02,
          }}>
          <View
            style={{
              //  backgroundColor: 'red',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            {/**
             * 
            <View
              style={{
                width: width * 0.2,
                alignItems: 'flex-end',
                borderRadius: 10,
                height: height * 0.1,
                borderWidth: 2,
                // borderColor: 'black'
              }}>
              
            </View>
             */}

            {/* <Text style={{fontSize: height * 0.04, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center', marginRight: 20}}>
                  Pet Image 
                </Text> */}

            <View style={{marginLeft: 10}}>
              {item.image.length ? (
                <Image
                  source={{uri: item.image}}
                  style={{
                    // flexDirection: 'row',
                    marginTop: 7,
                    // marginLeft: 5,
                    height: height * 0.08,
                    borderWidth: 2,
                    borderColor: 'black',
                    borderRadius: 40,
                    width: width * 0.18,
                  }}
                />
              ) : (
                <Text style={{textAlign: 'center', alignSelf: 'center'}}>
                  No Image
                </Text>
              )}
            </View>
            <View
              style={{
                width: width * 0.53,
                height: height * 0.08,
                borderWidth: 4,
                borderTopEndRadius: 20,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
                justifyContent: 'center',
                backgroundColor: '#c1e1c5',
                marginLeft: 10,
                marginTop: 4,
                shadowColor: 'red',
                shadowOffset: {width: 10, height: 10},
                shadowOpacity: 20,
                shadowRadius: 5,
              }}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                {item.place}
              </Text>
            </View>
          </View>

          <View
            style={{
              width: width * 0.73,
              height: height * 0.07,
              borderWidth: 4,
              borderTopEndRadius: 20,
              borderBottomLeftRadius: 20,
              borderTopLeftRadius: 20,
              backgroundColor: '#c1e1c5',
              justifyContent: 'center',
              marginLeft: 10,
              marginTop: 5,
              shadowColor: 'red',
              shadowOffset: {width: 10, height: 10},
              shadowOpacity: 20,
              shadowRadius: 5,
            }}>
            <View
              style={{
                // backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  textAlign: 'center',
                }}>
                Date:
              </Text>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {item.from}
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 'bold'}}></Text>

            {/* <View style={{alignItems: 'center'}}>
              <View
                style={{
                  width: 'auto',
                  alignItems: 'center',
                  padding: height * 0.01,
                  borderWidth: 2,
                  borderRadius: height * 0.2,
                  backgroundColor: '#ff9',
                }}>
                <Text style={{color: '#000', fontSize: height * 0.02}}>
                  {item.from}
                </Text>
              </View>
            </View> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: height * 0.01,
            width: width * 0.15,
            justifyContent: 'center',
          }}
          onPress={(e) => handleDelete(index)}>
          <Icon name="trash" type="ionicon" color="darkred" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={{width, height}}
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
            style={{justifyContent: 'center', padding: 3}}
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
              Details
            </Text>
          </View>
          <TouchableOpacity
            style={{justifyContent: 'center', padding: 5}}
            onPress={() =>
              navigation.navigate('AddDetails', {details: details})
            }>
            <Icon
              name="ios-add-sharp"
              type="ionicon"
              size={height * 0.05}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',

              // backgroundColor: '#c1e1c5',
            height: height * 0.9,
          }}>
          {state[details].length ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={state[details]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          ) : (
            <View
              style={{
                width: width * 0.85,
                height: height * 0.18,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#db3e00',
                //  borderTopRightRadius: height * 0.03,
                //  borderBottomLeftRadius: height * 0.03,
                borderRadius: 20,
                borderColor: 'white',
                borderWidth: 5,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: height * 0.03,
                  textAlign: 'center',
                }}>
                No Data Found , Please click on ' + ' to add data
              </Text>
            </View>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
