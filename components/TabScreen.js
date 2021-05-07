import React, { useState } from 'react';
import { View, Text, ScrollView, Platform, TouchableOpacity, StatusBar, Linking, Alert, Modal, Pressable } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Day from './screens/Day';
import Month from './screens/month';
import Week from './screens/week';
import HelpScreen from './screens/Helpscreen';
import SleepScreen from './screens/SleepScreen';


const TopTab = createMaterialTopTabNavigator();

// function HomeScreen() {
//   return (

//     <TopTab.Navigator
//       tabBarOptions={{
//         style: { backgroundColor: '#34c85a', },
//       }}
//     >
//       <TopTab.Screen name="Day" component={Day} />
//       <TopTab.Screen name="Week" component={Week} />
//       <TopTab.Screen name="Month" component={Month} />
//     </TopTab.Navigator>
//   );
// }




const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <>
      {/* <NavigationContainer> */}

      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          name="Home" component={Day} />

        <Tab.Screen
          options={{
            tabBarLabel: 'Sleep',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bed" color={color} size={26} />
            ),
          }}
          name="Settings" component={SleepScreen} />
        <Tab.Screen
          options={{
            tabBarLabel: 'Help',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="heart" color={color} size={26} />
            ),
          }}
          name="Help" component={HelpScreen} />
      </Tab.Navigator>

      {/* </NavigationContainer> */}
    </>

  );
}

