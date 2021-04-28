
//Library ========================================

import React from "react";
import {StyleSheet, TextInput, Text, View, Dimensions, TouchableOpacity, Image, Platform, Button} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

//Style ==============================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#40B3A2"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 90,
    alignItems: 'center',
    backgroundColor: "#40B3A2",
  },
  content:{
    marginLeft: 50,
    alignItems: 'center',
    marginRight: 50
  },
  buttonSignIn:{
    backgroundColor: "#E27D5F",
    width: 250,
    height: 45,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },
  buttonTextSignIn:{
    color: 'white',
    fontSize: 18,
  },
  buttonSocial:{
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  textSignIn:{
    color: 'white',
    fontSize: 36,
    fontFamily: 'Roboto'
  },
  text:{
    color: 'white'
  },
  action:{
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    width: 260,
    color: '#05375a',
  }
  
});
// Constant ============================================
const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

// Screen ==============================================
// Sign In
export const SignIn = ({ navigation }) => {    
  return (
    <View style={style.container}>
    <View style={style.content}>
      <Text style={style.textSignIn}>SIGN IN</Text>
      <View style={style.body}>
        <Text style={style.text}>Email</Text>
        <View style={style.action}>
          <FontAwesome 
            name="user-o" 
            color="#e7e7e7" 
            size={20}/>
          <TextInput
            placeholder="Login"
            style={style.textInput}
            autoCapitalize="none"
          />
          <Feather
            style={style.styleFeather}
            name="check-circle"
            color="red"
            size={20}
          />
        </View>
        <Text style={style.text}>Password</Text>
        <View style={style.action}>
          <FontAwesome 
            style={{marginLeft: 5}}
            name="lock" 
            color="#e7e7e7" 
            size={20}/>
          <TextInput
            placeholder="Password"
            style={style.textInput}
            secureTextEntry={false}
            autoCapitalize="none"
          />
          <Feather
            style={style.styleFeather}
            name="eye-off"
            color="grey"
            size={20}
          />
        </View>
      </View>
                
      <View style={{flexDirection: 'row', width: 300, justifyContent: 'flex-end', marginBottom: 30}}>
        <TouchableOpacity>
          <Text style={{color: 'white', fontSize: 14, textDecorationLine: 'underline'}}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={style.buttonSignIn}>
        <Text style={style.buttonTextSignIn}>SIGN IN</Text>
      </TouchableOpacity>
      
      <View style={{flexDirection: 'row', marginBottom: 30}}>
        <Text style={{color: "#83CDCC", fontSize: 14}}>Don't have an account?  </Text>
        <TouchableOpacity>
          <Text style={{color: "#83CDCC", fontSize: 14}}>Sign Up</Text>
        </TouchableOpacity>
        <Button title="Button"></Button>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center', color: 'white'}}>or</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
      </View>

      <View style={{flexDirection: 'row', width: 300, justifyContent:'space-around', marginTop: 40}}>
        <TouchableOpacity style={style.buttonSocial}>
          <Image source={require('../assets/icons/google_48px.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonSocial}>
          <Image source={require('../assets/icons/facebook_48px.png')}/>
        </TouchableOpacity>
      </View>

      <Text style={{marginTop: 60, color: "#83CDCC", fontSize: 14}}>By using our services, you agree to the Terms of Service and privacy statement.</Text>
    </View>
  </View>

  );
};
// Sign Up
export const SignUp = () => {  
  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};
// Splash
export const Splash = () => {
  return (
    <ScreenContainer>
      <Text>Loading...</Text>
    </ScreenContainer>
  );
};
// Forgot password
export const ForgotPassword = () => {
  return (
    <ScreenContainer>
      <Text>Forgot password...</Text>
    </ScreenContainer>
  );
};
// News
export const News = () => {
  return (
    <ScreenContainer>
      <Text>News...</Text>
    </ScreenContainer>
  );
};
// Chat
export const Chat = () => {
  return (
    <ScreenContainer>
      <Text>Chat...</Text>
    </ScreenContainer>
  );
};
// Event
export const Event = () => {
  return (
    <ScreenContainer>
      <Text>Event...</Text>
    </ScreenContainer>
  );
};
// Location
export const Location = () => {
  return (
    <ScreenContainer>
      <Text>Location...</Text>
    </ScreenContainer>
  );
};
// Profile
export const Profile = () => {
  return (
    <ScreenContainer>
      <Text>Profile...</Text>
    </ScreenContainer>
  );
};