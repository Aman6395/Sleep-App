import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
  container1: {
    flex: 0.4, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#34c85a',
    
  },
  container2: {
    backgroundColor: 'white',
    marginLeft:10,
    marginRight:10,
    marginTop:20,
    marginBottom:20,
    borderRadius:10,
    paddingBottom:10
  },
  container3: {
    display:'flex',
    flexDirection:'row',
  },
  title1:{
    marginTop:10,
    paddingLeft:20,
    fontWeight:'bold',
    fontSize:15,

  },
  list1:{
    
    borderRadius:10,
    display:'flex',
    flexDirection:'row',
    marginTop:30,
   
    justifyContent:'center',
  },
  listItem:{
    width:'45%',
    backgroundColor:'#34c85a',
    borderRadius:10,
  },
  listItem1:{
    width:'45%',
    backgroundColor:'#34c85a',
    marginLeft:10,
    borderRadius:10,
  },
  listText1:{
    textAlign:'left',
    paddingLeft:10,
    
    paddingTop:10,
    paddingBottom:20,
    color:'white',
  },
  listText2:{
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontSize:25,
    paddingBottom:20,
  },
  listText3:{
    textAlign:'right',
    paddingRight:10,
    
    paddingBottom:10,
    color:'white',
  },
  link:{
    borderWidth:1,
    borderColor:"#24a0ed",
    borderRadius:20,
    width:'60%',
    margin:10,
    
  },
  linkText:{
    color:"#24a0ed",
    paddingHorizontal:2,
    paddingVertical:5,

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    paddingRight:30,
    paddingLeft:30,
    backgroundColor:'#34c85a'

    
    
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  buttonText:{
    fontSize:16,
          color:'black',
          backgroundColor:'#34c85a',
          borderRadius:20,
          margin: 10,
          padding:10,
          textAlign: 'center', 
          
  },
line:{

  borderBottomColor: '#dfdfe5',
  borderBottomWidth: 1,
  margin:5,
},
incdecButton:{
  
  fontSize:16,
  color:'black',
  backgroundColor:'#dfdfe5',
  borderRadius:5,
  paddingLeft:20,
  paddingRight:20,
  textAlign: 'center', 
  marginLeft:1,
},

input1: {
  height: 40, width:'40%',
  borderRadius:10,
  display:'flex',
  backgroundColor:'#dfdfe5',
  flexDirection:'column',
  marginLeft:20,
  marginTop:5,
  padding:5,
  color:'black'
},
input2: {
  height: 40, width:'40%',
  borderRadius:10,
  display:'flex',
  backgroundColor:'#dfdfe5',
  flexDirection:'column',
  marginLeft:10,
  marginTop:5,
  padding:5,
  color:'black'
},


});