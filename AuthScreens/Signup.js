import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform
  } from 'react-native';
import React, { useState } from 'react'

import { Height , Width  } from '../Dimensions/ProjectDimension'
const Signup = () => {
  
  const[User,SetUser]=useState({name:'',Email:'',Password:'',ConfirmPassword:''})
  const[Error,SetError]=useState(null)
  const HandleInput = (name,val) => {
    SetUser({
      ...User,
      [name]:val
    })
    if(name=='ConfirmPassword' && val!='' && User.Password!=''){
      if(User.ConfirmPassword !== User.Password){
        console.log("val is",User.ConfirmPassword)
        console.log("Password is",User.Password)
        console.log("value ha",val.value)
      }
     else{
      console.log("value nae ha")
     }
    }
    else{
      console.log("dbvuya")
    }
  }
  return (
    <KeyboardAvoidingView  style={{flex:1,paddingHorizontal:20,backgroundColor:'black'}} behavior='padding' >
      <ScrollView contentContainerStyle={{flex:1,justifyContent:'center'}} >
        <View style={{alignItems:'center'}}>
          <Image
            source={require('../Assets/ReactIcon.png')}
            style={{
              width: '50%',
              resizeMode: 'contain',
            }}
          />
        </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="white" 
              autoCapitalize="sentences"
              returnKeyType="next"
              blurOnSubmit={false}
              value={User.name}
              onChange={(val)=>HandleInput('name',val)}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="white"
              keyboardType="email-address"
              returnKeyType="next"
              blurOnSubmit={false}
              value={User.Email}
              onChange={(val)=>HandleInput('Email',val)}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="white"
              returnKeyType="next"
              secureTextEntry={true}
              blurOnSubmit={false}
              value={User.Password}
              onChange={(val)=>HandleInput('Password',val)}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Confirmed Password"
              placeholderTextColor="white"
              returnKeyType="next"
              secureTextEntry={true}
              blurOnSubmit={false}
              value={User.ConfirmPassword}
              onChange={(val)=>HandleInput('ConfirmPassword',val)}
            />
          {Error!=null?(<Text style={{color:'white'}}>{Error}</Text>):null}
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            >
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
    </ScrollView>
   
    </KeyboardAvoidingView>

  )
}

export default Signup

const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        marginTop: 10,
        margin: 5,
      },
      buttonStyle: {
        backgroundColor: '#7DE24E',
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 20,
        marginBottom: 20,
        // flex:2,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
      inputStyle: {
        height:'80%',
        width:'100%',
        color: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
      },
      MainViewa:{
        flex:1,
        // height:Height,
        backgroundColor: 'black',
        // justifyContent:'center',
        // alignItems:'center',
        paddingHorizontal:20
      }
    
})