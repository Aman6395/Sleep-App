import React, { useEffect } from 'react';
import { AsyncStorage, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './components/screens/Onboarding';
import TabScreen from './components/TabScreen';
import HomeScreen from './components/TabScreen';
const AppStack = createStackNavigator();

export default function App() {

  //   /// for first launch only
  //   const [isFirstLaunch,setIsFirstLaunch] = React.useState(null);
  //   useEffect(() =>{
  //     AsyncStorage.getItem('alreadyLaunched').then(value => {
  //       if(value == null){
  //         AsyncStorage.setItem('alreadyLaunched','true');
  //         setIsFirstLaunch(true);
  //       }
  //       else{
  //         setIsFirstLaunch(false);
  //       }
  //     });
  //   }, []);

  //   if( isFirstLaunch === null){
  //     return null;
  //   }else if(isFirstLaunch === true){
  //     return(
  // ///



  //       <NavigationContainer>
  //         <StatusBar backgroundColor = "#34c85a"/>
  //         <AppStack.Navigator 
  //         headerMode = 'none'
  //         >

  //         <AppStack.Screen name = "Onboarding" component ={OnboardingScreen} />
  //         <AppStack.Screen name = "Tabscreen" component ={TabScreen} />



  //        </AppStack.Navigator>
  //       </NavigationContainer>
  //     )
  //   }
  //   else{
  //    return <TabScreen/>;
  //   } 
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#34c85a" />
      <AppStack.Navigator
        headerMode='none'
      >

        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="Tabscreen" component={TabScreen} />



      </AppStack.Navigator>
    </NavigationContainer>
  )
}
