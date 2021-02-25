/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {HomeScreen, CategoriesScreen, AddDetails, Details} from './src/screens';
import Navigator from './src/routes/navigation';
// import {TakeHolidayContext} from './src/screens/context'
import Context from './src/screens/context';

const App = () => {
  return (
    <Context>
      {/* <StatusBar barStyle="light-content" /> */}
      {/* <SafeAreaView> */}
      {/* <HomeScreen/> */}
      {/* <CategoriesScreen/> */}
      {/* <AddDetails/> */}
      {/* <Details/> */}
      <Navigator />
      {/* </SafeAreaView> */}
    </Context>
  );
};

export default App;
