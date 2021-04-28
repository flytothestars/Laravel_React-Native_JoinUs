
// Library
import * as React from 'react';
import AppNavContainer from './src/navigations/index'

//Main
const App = () => {
    return (
        <AppNavContainer>
            
        </AppNavContainer>
    );
}
export default App;

{/*
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//Screens
import { SignIn, Splash, SignUp, News, Chat, Location, Profile, Event} from './App/Screens';

//Constant ===============================================
const AuthStack = createStackNavigator();
const TabsStack = createBottomTabNavigator();
const RootStack = createStackNavigator();
//Stack ========================================
//Root Stack
const RootStackScreen = ({userToken}) => (
    <RootStack.Navigator headerMode="none">
        {userToken ? (
            <RootStack.Screen name="App" component={TabsStackScreen} options={{animationEnabled: false}}/>
        ) : (
            <RootStack.Screen name="Auth" component={TabsStackScreen} options={{animationEnabled: false}}/>
        )}
    </RootStack.Navigator>
);
//Tab Stack
const TabsStackScreen = () => (
    <TabsStack.Navigator
    tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'white',
        style: {backgroundColor: "#6DD7C7"}
    }}
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

        if (route.name === 'News') {
            iconName = focused ? 'home-outline' : 'home-outline';
        } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubble-outline' : 'chatbubble-outline';
        } else if (route.name === 'Event') {
            iconName = focused ? 'add-circle-outline' : 'add-circle-outline';
        } else if (route.name === 'Maps') {
            iconName = focused ? 'map-outline' : 'map-outline';
        } else if (route.name === 'Profile') {
            iconName = focused ? 'person-outline' : 'person-outline';
        }
            return <Ionicons name={iconName} size={size} color={color} />;
        },
    })}>
      <TabsStack.Screen name="News" component={News} />
      <TabsStack.Screen name="Chat" component={Chat} />
      <TabsStack.Screen name="Event" component={Event} />
      <TabsStack.Screen name="Maps" component={Location} />
      <TabsStack.Screen name="Profile" component={Profile} />
    </TabsStack.Navigator>
  );
// Auth Stack
const AuthStackScreen = () => (
    <AuthStack.Navigator 
    screenOptions={{
        header: () => null
    }}>
        <AuthStack.Screen name="SignIn" component={SignIn}/>
        <AuthStack.Screen name="SignUp" component={SignUp}/>
    </AuthStack.Navigator>
);
//Main =================================
export default () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    
    if (isLoading) {
        return <Splash />;
    }

    return (
    <NavigationContainer>
        <RootStackScreen usertoken={userToken}/>
    </NavigationContainer>
  );
}

*/}
