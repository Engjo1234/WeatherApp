// import { View, Text,I18nManager } from 'react-native'
import React from 'react'
// import Home from './src/screens/Home'
// import Search from './src/screens/Search'
import  Settings  from './src/screens/Settings'
import  Counter  from './src/screens/Counter'

// import  Splash  from './src/screens/Splash'
// import  IntroSlider  from './src/screens/IntroSlider'
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/navigation/HomeStack'
import { Provider } from 'react-redux';
import store from './src/Redux/store'

// I18nManager.allowRTL(false);
// I18nManager.forceRTL(false);
export default function App() {
  return (
  //  <Provider store={store}>
  //   <Counter/>
  //  </Provider>
    // <Settings/>
   <NavigationContainer>
    <HomeStack/>
   </NavigationContainer>

  )
}