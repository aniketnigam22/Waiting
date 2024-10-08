import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/LoginScreen/Login';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import SignUp from './src/screens/SignUpScreen/SignUp';
import ChooseUserType from './src/screens/ChooseUserType/ChooseUserType';
import ForgetPassword from './src/screens/ForgetPassword/ForgetPassword';
import ShopDetail1 from './src/screens/ShopDetail/ShopDetail1';
import ShopDetail2 from './src/screens/ShopDetail/ShopDetail2';
import Otp from './src/screens/Otp/Otp';
import WaitingDashboard from './src/screens/WaitingDashboard/WaitingDashboard';
import ShopOwnerProfile from './src/screens/Profile/ShopOwnerProfile';
import ShopNotificaion from './src/screens/ShopNotification/ShopNotificaion';
import FlashMessage from 'react-native-flash-message';
import Home from './src/screens/Home/Home';
import Search from './src/screens/Search/Search';
import UserProfile from './src/screens/Profile/UserProfile';

const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
          {/* <Stack.Screen name="ChooseUserType" component={ChooseUserType} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="ShopDetail1" component={ShopDetail1} />
          <Stack.Screen name="ShopDetail2" component={ShopDetail2} />
          <Stack.Screen name="WaitingDashboard" component={WaitingDashboard} />
          <Stack.Screen name="ShopOwnerProfile" component={ShopOwnerProfile} />
          <Stack.Screen name="ShopNotificaion" component={ShopNotificaion} />
          <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </Provider>
  )
}


const styles = StyleSheet.create({})

export default App

