import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Message from './components/screens/message.jsxsage.jsx'
import BottomTabs from './components/bottomTabNavigator.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './components/welcome/welcome.jsx';
import WelcomeLanding from './components/welcome/welcomelanding.jsx';
import Signin from './components/welcome/signin.jsx';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    // <View>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown:false}}
        ></Stack.Screen>
        <Stack.Screen 
          name="WelcomeLanding"
          component={WelcomeLanding}
          options={{headerShown:false,
          animation:"slide_from_right",
          }}
        />
        <Stack.Screen 
          name="Signin"
          component={Signin}
          options={{headerShown:false,
          animation:"slide_from_right",
          }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTabs}
          options={{headerShown:false}}
        >
        </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    // {/* </View> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    // backgroundColor: '#474EFF',
    backgroundImage: 'linear-gradient(to bottom,#000,#474EFF)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
