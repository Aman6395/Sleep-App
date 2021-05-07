import React,{useState} from 'react';
import { View,Text,ScrollView,Platform,TouchableOpacity,StatusBar,Linking,Alert, Modal,Pressable} from 'react-native';
import styles from './styles.js';

export default function Day() {
    return (
      
      <View style={{backgroundColor:'#dfdfe5'}} >
          <StatusBar backgroundColor = "#34c85a"/>
          <ScrollView>
              <View style = {styles.container2}>
              <Text style={{color:'#34c85a',textAlign:'center',fontWeight:'bold',fontSize:30}}>STATISTICS</Text>
              <View style = {styles.list1}>
                <View style = {styles.listItem}>  
                      <Text style = {styles.listText1}>Heart Rate</Text>
                      <Text style = {styles.listText2}>83 BPM</Text>
                      <Text style = {styles.listText3}>80-120 Healthy</Text>
                </View>
                <View style = {styles.listItem1}>  
                      <Text style = {styles.listText1}>Sleep</Text>
                      <Text style = {styles.listText2}>46h 53m </Text>
                      <Text style = {styles.listText3}>Deep Sleep</Text>
                      <Text style = {styles.listText3}>26h 13m</Text>
                      
                </View>
              </View>
              <View style = {styles.list1}>
                <View style = {styles.listItem}>  
                      <Text style = {styles.listText1}>Energy Burn</Text>
                      <Text style = {styles.listText2}>4,082 kcal</Text>
                      <Text style = {styles.listText3}>weekly Goal</Text>
                      <Text style = {styles.listText3}>4800kcal </Text>
                </View>
                <View style = {styles.listItem1}>  
                      <Text style = {styles.listText1}>Steps</Text>
                      <Text style = {styles.listText2}>14,3251</Text>
                      <Text style = {styles.listText3}>weekly Goal</Text>
                      <Text style = {styles.listText3}>25,000 Steps</Text>
                </View>
              </View>
              <View style = {styles.list1}>
                <View style = {styles.listItem}>  
                      <Text style = {styles.listText1}>Running</Text>
                      <Text style = {styles.listText2}>39.8 km</Text>
                      <Text style = {styles.listText3}>weekly Goal</Text>
                      <Text style = {styles.listText3}>70 km</Text>
                </View>
                <View style = {styles.listItem1}>  
                      <Text style = {styles.listText1}>Cycling</Text>
                      <Text style = {styles.listText2}>89.7 km</Text>
                      <Text style = {styles.listText3}>weekly Goal</Text>
                      <Text style = {styles.listText3}>125 km</Text>
                </View>
              </View>
              </View>
              </ScrollView>
      </View>
    );
  }