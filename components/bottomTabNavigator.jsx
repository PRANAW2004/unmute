import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {View} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Image } from "react-native";
import Home from "./screens/home";
import Search from "./screens/search";
import Create from "./screens/create";
import Message from "./screens/message";
import Profile from "./screens/profile";
export default function BottomTabs(){

    let homename='Home';
    let searchname = 'Search';
    let createname = 'Create';
    let messagename = 'Message';
    let profilename = 'Profile';

    const Tab = createBottomTabNavigator();

    return(
        // <LinearGradient locations={[0.4,1]} colors={['#000', '#474EFF']}>
        <View style={{display:"flex",flex:1,backgroundColor: "#474EFF"}}>

        <Tab.Navigator
            initialRouteName={messagename}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused,color,size}) => {
                        let iconColor;
                        let rn = route.name;
                        iconColor = focused?"white":"grey";
                        if(rn === homename){
                             return <Image source={require('../assets/Home.png')} style={{height:20,width:20}} color={iconColor} />
                        }else if(rn === searchname){
                            return <Image source={require('../assets/search.png')} style={{height:20,width:20}} color={iconColor} />
                        }else if(rn === createname){
                            return <Image source={require('../assets/create.png')} style={{height:40,width:40}} color={iconColor} />                        
                        }else if(rn === messagename){
                            return <Image source={require('../assets/messages.png')} style={{height:20,width:20}} color={iconColor} />                    
                        }
                        else{
                            return <Image source={require('../assets/profile.png')} style={{height:20,width:20}} color={iconColor} />
                        }
                        // return <Image source={require('../assets/'+iconName+'')} style={{height:30,width:30}} color={iconColor} />
                    },
                    tabBarStyle: {
                        backgroundColor: "#212529",
                        paddingBottom: 10,
                        paddingTop: 10,
                        height: 100,
                        borderTopLeftRadius: 36,
                        borderTopRightRadius: 36, 
                        width: '100%', 
                           
                    },
                    tabBarActiveTintColor: "white",
                    tabBarLabelStyle: {
                        fontSize: 13
                    },
                    tabBarHideOnKeyboard: true,
                    
         })}
        >
            <Tab.Screen name={homename} component={Home} options={{headerShown: false}} />
            <Tab.Screen name={searchname} component={Search} options={{headerShown: false}} />
            <Tab.Screen name={createname} component={Create} options={{headerShown: false,tabBarStyle:{display:"none"}}} />
            <Tab.Screen name={messagename} component={Message} options={{headerShown: false}} />
            <Tab.Screen name={profilename} component={Profile} options={{headerShown: false}} />
        </Tab.Navigator>
        </View>

    )
}