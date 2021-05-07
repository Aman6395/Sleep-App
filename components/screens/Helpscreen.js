import React from 'react';
import { View,Text,ScrollView,Platform,TouchableOpacity,Linking,} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles.js';
import SleepSvg from './svg/svg1';


export default function HelpScreen() {
    const url1 = 'https://www.nhlbi.nih.gov/health-topics/sleep-deprivation-and-deficiency';
    const url2 = 'https://www.wikihow.com/Sleep-Better';
    const OpenLink1 = () => Linking.canOpenURL(url1).then(() => {
      Linking.openURL(url1);
  });
  const OpenLink2 = () => Linking.canOpenURL(url2).then(() => {
    Linking.openURL(url2);
  });
  const dialCall = () => {
  
    let phoneNumber = '';
  
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:6395055579';
    }
    else {
      phoneNumber = 'telprompt:${+1234567890}';
    }
  
    Linking.openURL(phoneNumber);
  };
    return (
      <View style={{flex:1}}>
          <View style = {styles. container1} >
                  <SleepSvg/>
          </View >
          <View  style={{flex:0.6}}>
          <View style = {styles. container2}>   
          <ScrollView>
                <TouchableOpacity  onPress={dialCall}  >
                    <Text style={styles.buttonText}>HELPLINE</Text>
                  </TouchableOpacity>    
                  <Text style={{textAlign:'left',marginLeft:10,fontWeight:'bold',marginTop:20,fontSize:20}}>MORE INFORMATION</Text>      
                  <Text style={{textAlign:'left',marginLeft:10,fontWeight:'bold',marginTop:10,fontSize:15}}>ABOUT SLEEP</Text> 
                  <Text style={{textAlign:'left',marginLeft:10,marginTop:10,fontSize:15}}>Sleep is a naturally recurring state of mind and body, characterized by altered consciousness, relatively inhibited sensory activity, reduced muscle activity and inhibition of nearly all voluntary muscles during rapid eye movement sleep, and reduced interactions with surroundings.</Text>     
                  <View style = {styles.link}>
                      <TouchableOpacity onPress ={OpenLink1} style = {{display:'flex',flexDirection:'row'}}> 
                        <MaterialCommunityIcons name="information" color='black' size={26} style = {styles.linkText} />
                        <Text style = {styles.linkText}> For more info</Text> 
                      </TouchableOpacity>
                  </View>
                  <Text style={{textAlign:'left',marginLeft:10,fontWeight:'bold',marginTop:20,fontSize:20}}>What can you do?</Text> 
                  <Text style={{textAlign:'left',marginLeft:10,marginTop:10,fontSize:15}}>Sleep plays an important role in your physical health. For example, sleep is involved in healing and repair of your heart and blood vessels. Ongoing sleep deficiency is linked to an increased risk of heart disease, kidney disease, high blood pressure, diabetes, and stroke. Here are the ways you can follow for better sleep</Text>
                  <View style = {styles.link}>
                      <TouchableOpacity onPress ={OpenLink2} style = {{display:'flex',flexDirection:'row'}}> 
                        <MaterialCommunityIcons name="information" color='black' size={26} style = {styles.linkText}/>
                        <Text style = {styles.linkText}> For more info</Text> 
                      </TouchableOpacity>
                  </View>
            </ScrollView>
            </View>
            </View>
      </View>
    );
  }