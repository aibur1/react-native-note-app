import {
    View, 
    Text, 
    Image,
    TextInput,
    StyleSheet,
    Pressable,
    SafeAreaView, 
   } from 'react-native';
 import React from 'react';
 import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
 
 const image = require("../../../../assets/empty-state.jpg");
 export default function SignIn({navigation}) {
   return (
     <SafeAreaView style={{flex:1}}>
       
       <Image style={{width: 400, height: 400, alignSelf:"center"}} source={image} />
       <Text style={{fontSize:18, fontWeight:"bold", textAlign:"center", paddingTop:20}}>
         Never forget your notes
       </Text>
       <View style={{paddingHorizontal:16, paddingVertical:25}}>
        <Input placeholder="Email address"/>
        <Input placeholder='Password' secureTextEntry />
 
       </View>
 
       <View style={{ flex:1, justifyContent:"flex-end",  alignItems:"center",}}>
       <Button title={"Login"} customStyles={{alignSelf:"center", marginBottom:60}} />
 
         <Pressable onPress={() => {navigation.navigate("SignUp")}}>
           <Text>Don't have an account ?{" "}<Text style={{color:"green", fontWeight:"bold",}}>Sign up</Text></Text>
         </Pressable>
       </View>
       
     </SafeAreaView>
   )
 }
 
 const styles = StyleSheet.create({
    input:{
      height:48,
      borderBottomWidth:1,
      borderBottomColor:"#ccc",
      marginBottom:25,
      
    }
 })