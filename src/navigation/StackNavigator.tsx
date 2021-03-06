/*
 * @Author: bugdr
 * @Date: 2022-07-11 12:30:53
 * @LastEditors: bugdr
 * @LastEditTime: 2022-07-13 13:16:02
 * @FilePath: \SunOfBeacheRN\src\navigation\StackNavigator.tsx
 * @Description:栈导航器，包括登录这些
 */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import Settings from '@src/screens/Settings';
import Auth from '@src/screens/Auth';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="设置" component={Settings} />
      <Stack.Screen
        name="Sign"
        options={{
          title: '登录',
          gestureEnabled: true,
          headerShown: false,
        }}
        component={Auth}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
