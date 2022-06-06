import { StatusBar } from 'expo-status-bar';
import { 
  Text, 
  View, 
  StyleSheet, 
} from 'react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Main/Home/Home';
import Edit from './src/screens/Main/Edit/Edit';
import Create from './src/screens/Main/Create/Create';
import SignIn from './src/screens/Auth/SignIn/SignIn';
import SignUp from './src/screens/Auth/SignUp/SignUp';
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsqCiBdwOVhY8fPlTMY3UOhzSlr56hbvo",
  authDomain: "note-app-e856c.firebaseapp.com",
  projectId: "note-app-e856c",
  storageBucket: "note-app-e856c.appspot.com",
  messagingSenderId: "137092985164",
  appId: "1:137092985164:web:20abcb1c84c5d284955fe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


const AppTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"#fff",
  }
}

const Stack = createNativeStackNavigator();
export default function App() {
  const user =false //not authenticated

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {
          user ? (
            <>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Edit' component={Edit} />
            <Stack.Screen name='Create' component={Create} />
            </>
          ) : (
            <>
            <Stack.Screen name='SignIn'  component={SignIn} options={{headerShown:false}} />
            <Stack.Screen name='SignUp' component={SignUp} />
            </>
          )
        }
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
