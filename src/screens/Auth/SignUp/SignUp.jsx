import {
    View, 
    Text, 
    Image,
    TextInput,
    StyleSheet,
    Pressable,
    SafeAreaView, 
   } from 'react-native';
  import React, {useState} from 'react';
  import Input from '../../../components/Input/Input';
  import Button from '../../../components/Button/Button';
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import {auth, db} from "../../../../App";
  
  // const auth = getAuth();
  const genderOptions = ["Male", "Female"];
  
  export default function SignUp() {
     const [gender, setGender] = useState(null);
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [age, setAge] = useState("");
     const [name, setName] = useState("");
  
     const signup = () => {
  
      // 1- create a new user
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user created", user);
        //2- then we create the user profile in the database.
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
     }
  
   return (
     <SafeAreaView style={{flex:1}}>
  
       
       <View style={{paddingHorizontal:16, paddingVertical:25}}>
  
         <Input placeholder='Email address' onChangeText={ (text) => setEmail(text)} />
         <Input placeholder='Password' secureTextEntry onChangeText={ (text) => setPassword(text)} />
         <Input placeholder='Full Name' onChangeText={ (text) => setName(text)} />
         <Input placeholder='Age' onChangeText={ (text) => setAge(text)} />
  
         <View style={{marginVertical:20}}>
            <Text>Select Gender</Text>
         </View>
  
         {
           genderOptions.map((option) => {
             const selected = option === gender; // MALE === MALE => TRUE;
              return(
                <Pressable onPress={() => setGender(option)} key={option} style={styles.radioContainer}>
                  <View style={[styles.outerCircle, selected && styles.selectedOuterCircle]}>
                      <View style={[styles.innerCircle, selected && styles.selectedInnerCircle]} />
                  </View>
                  <Text style={styles.radioText}>{option}</Text>
             </Pressable>
              )
          })
         }
  
       </View>
  
       <View style={{ flex:1, justifyContent:"flex-end",  alignItems:"center",}}>
    <Button title={"Signup"} customStyles={{alignSelf:"center", marginBottom:60}} onPress={signup} />
  
         <Pressable>
           <Text>Already have an account ?{" "}<Text style={{color:"green", fontWeight:"bold"}}>Sign in</Text></Text>
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
      
    },
    radioContainer:{
      flexDirection:"row",
      alignItems:"center",
      marginBottom:10,
    },
  
    outerCircle:{
       height:30,
       width:30,
       borderRadius:15,
       borderWidth:1,
       borderColor:"#cfcfcf",
       justifyContent:"center",
       alignItems:"center",
    },
  
    innerCircle:{
       height:15,
       width:15,
       borderRadius:7.5,
       borderWidth:1,
       borderColor:"#cfcfcf",
    },
  
    radioText:{
      marginLeft:10,
    },
  
    selectedOuterCircle:{
      borderColor:"orange",
    },
  
    selectedInnerCircle:{
      backgroundColor:"orange",
      borderColor:"orange",
    },
  
  });