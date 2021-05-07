import React,{useState,Component} from 'react';
import { View,Text,ScrollView,TouchableOpacity,Alert, Modal,Pressable, TextInput} from 'react-native';
import styles from './styles.js';
import SleepSvg from './svg/svg1';
//import DateTimePicker from '@react-native-community/datetimepicker';



export default function SleepScreen(){ 

  // const [date, setDate] = useState(new Date(1598051730000));
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };

    const [number, onChangeNumber] = React.useState(null);
    const [number1, onChangeNumber1] = React.useState(null);
    const [num,setNum] = useState(8);
    const [Zone,setZone] = useState("");
    
      const ZoneAm = () =>{
        setZone("AM");
      };
      const ZonePm = () =>{
        setZone("PM");
      };

      const incNum = () =>{3
        setNum(num+1);
      };
    const decNum = () => {
      if(num > 0){
        setNum(num-1);
      }else{
        setNum(0);
      }
    }
    const [num1,setNum1] = useState(1);
      const incNum1 = () =>{
        setNum1(num1+1);
      };
    const decNum1 = () => {
      if(num1 > 0){
        setNum1(num1-1);
      }else{
        setNum1(0);
      }
    }
  
    const [num2,setNum2] = useState(1);
      const incNum2 = () =>{
        setNum2(num2+1);
      };
    const decNum2 = () => {
      if(num2 > 0){
        setNum2(num2-1);
      }else{
        setNum2(0);
      }
    }

   const [modalVisible, setModalVisible] = useState(false);
   
    return (
      
          <View style={{flex: 1,backgroundColor: '#dfdfe5',}}>
                  <View style = {styles. container1} >
                    <SleepSvg/>
                  </View >
                
                  <ScrollView style = {{flex: 0.6,backgroundColor: '#dfdfe5',}}>
                    <View style = {styles. container2}>
        
                    <Text style = {styles.title1}>When do you want to wakeup?</Text>
                    



                    <View style = {styles.container3}>

                    {/* </View>
                    <TouchableOpacity  onPress={showTimepicker} >
                          <Text style={styles.buttonText}>CALCULATE</Text>
                    </TouchableOpacity>
                    </View>  
                      
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={time}
                      mode={mode}
                      is24Hour={false}
                      display="default"
                      onChange={onChange}
                    />
                  )} */}




                      <View style={{flexDirection:'row',width:'60%'}}>
                      <TextInput
                          style={styles.input1}
                          onChangeText={onChangeNumber}
                          value={number}
                          
                          keyboardType="numeric"
                        />
                        <TextInput
                          style={styles.input2}
                          onChangeText={onChangeNumber1}
                          value={number1}
                          
                          keyboardType="numeric"
                        />

                    </View>

                          <TouchableOpacity onPress={() => ZoneAm()}   >
                                <Text style={styles.incdecButton}>AM</Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity onPress={() => ZonePm()}>
                                <Text style={styles.incdecButton}>PM</Text>
                              </TouchableOpacity>
                      </View>
                    <Text style={{paddingLeft:20,paddingVertical:5}}>Wake Up At {number}:{number1} {Zone}</Text>

                    <View style={styles.line} />
                      <Text style = {styles.title1}>Desired Amount of Sleep</Text>
                      <View style = {styles.container3}>
                            <View style = {{width:'70%'}}>
                              <Text style = {{paddingLeft:20}}>{num} hours</Text>
                            </View>
                            <TouchableOpacity onPress={() => decNum()}>
                              <Text style={styles.incdecButton}> - </Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => incNum()}>
                              <Text style={styles.incdecButton}>+</Text>
                            </TouchableOpacity>
                      </View>
                    
                    <View style={styles.line} />
        
        
                    <Text style = {styles.title1}>Daily Work amount</Text>
                    <View style = {styles.container3}>
                            <View style = {{width:'70%'}}>
                              <Text style = {{paddingLeft:20}}>{num1} hrs</Text>
                            </View>
                            <TouchableOpacity onPress={() => decNum1()}>
                              <Text style={styles.incdecButton}> - </Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => incNum1()}>
                              <Text style={styles.incdecButton}>+</Text>
                            </TouchableOpacity>
                    </View>
        
                    <View style={styles.line} />
        
                    <Text style = {styles.title1}>Daily Coffee intake</Text>
                    <View style = {styles.container3}>
                            <View style = {{width:'70%'}}>
                              <Text style = {{paddingLeft:20}}>{num2} cup</Text>
                            </View>
                            <TouchableOpacity onPress={() => decNum2()}>
                              <Text style={styles.incdecButton}> - </Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => incNum2()}>
                              <Text style={styles.incdecButton}>+</Text>
                            </TouchableOpacity>
                    </View>
                    <TouchableOpacity  onPress={() => setModalVisible(true)}>
                          <Text style={styles.buttonText}>CALCULATE</Text>
                    </TouchableOpacity>
                    </View>
                        <View style={styles.centeredView}>
                              <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                    onRequestClose={() => {
                                  Alert.alert("Modal has been closed.");
                                  this.setModalVisible(!modalVisible);
                                }}
                              >
                                <View style={styles.centeredView}>
                                  <View style={styles.modalView}>
                                  <Text style={styles.modalText}>Your ideal BedTime is: 10:00 PM </Text>
                                    <Pressable
                                      style={[styles.button]}
                                      onPress={() => setModalVisible(!modalVisible)}
                                            >
                                    <Text style={styles.textStyle}>Ok</Text>
                                  </Pressable>
                                </View>
                                </View>
                            </Modal>
                          </View>
                    </ScrollView>
                
          </View>
    );
  }
  
