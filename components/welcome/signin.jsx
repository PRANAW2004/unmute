import { View, Text, StyleSheet, Image, TextInput, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { MaterialCommunityIcons, MaterialIcons, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
export default function Signin({ navigation }) {

    const [securetext, setsecuretext] = useState(true);
    const [eye, setEye] = useState('eye');

    function onPress() {
        setsecuretext(securetext ? false : true);
        setEye(securetext ? 'eye-off' : 'eye');
    }

    return (
        <View style={styles.container}>

            <LinearGradient style={[styles.container]} start={{ x: 0.2, y: 0.6 }} end={{ x: 0.5, y: 0.1 }} colors={['#000', '#474EFF', '#000', '#474EFF', '#000']}>
                <View style={{ marginTop: 100, display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Image source={require("../../assets/unmute.png")} style={{ height: 130, width: 130 }} />
                    <View style={{ display: 'flex' }}>
                        <Text style={[styles.textstyle, { fontWeight: 400 }]}>Welcome</Text>
                        <Text style={[styles.textstyle, { fontWeight: 400 }]}>back!</Text>
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 30 }}>
                        <View style={[styles.textinputstyle]}>
                            <View style={{ width: '10%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <FontAwesome6 name='user' style={{ color: 'grey' }} size={15} />
                            </View>
                            <TextInput style={{ height: '100%', width: '90%', color: 'grey' }} placeholder="Username or Email" placeholderTextColor={'grey'}  ></TextInput>
                        </View>
                        <View style={[styles.textinputstyle, { marginTop: 30 }]}>
                            <View style={{ width: '10%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialCommunityIcons name='lock' size={15} color={'grey'} />
                            </View>
                            <TextInput style={{ height: '100%', width: '80%', color: 'grey' }} placeholder='password'
                                textContentType='newPassword'
                                secureTextEntry={securetext}
                                autoCapitalize='none'
                                autoCorrect={false} placeholderTextColor={'grey'}  ></TextInput>
                            <Pressable style={{ display: "flex", justifyContent: "center", alignItems: "center" }} onPress={onPress}>
                                <MaterialCommunityIcons name={eye} size={22} color={'grey'}>
                                </MaterialCommunityIcons>
                            </Pressable>
                        </View>
                        <View style={{ width: '85%', marginTop: 10, alignItems: 'flex-end' }}>
                            <Pressable style={{ width: '40%', maxWidth: 'auto' }} >
                                <Text style={{ color: 'red', width: '100%' }}>Forgot Password?</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={{ width: '85%', flexDirection: 'row', marginTop: 20 }}>
                        <View style={{ width: '50%', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ color: 'white', fontSize: 25 }}>Sign In</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: 'flex-end' }}>
                            <Pressable onPress={() => navigation.navigate("BottomTab")}>
                                <Ionicons name="arrow-forward-circle-sharp" style={{ color: 'white' }} size={50} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30,width:'100%' }}>
                        <Text style={{ color: 'white' }}>Sign in with</Text>
                        <View style={{ width: '100%', flexDirection: 'row', gap: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                            <Pressable style={{ backgroundColor: '#1F1F1F', height: 45, width: 45, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 36, borderColor: 'white', borderWidth: 1 }}>
                                <Image source={require("../../assets/google-logo-9808.png")} style={{ height: 30, width: 30 }} />
                            </Pressable>
                            <Pressable style={{ backgroundColor: '#1F1F1F', height: 45, width: 45, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 36, borderColor: 'white', borderWidth: 1 }}>
                                <Image source={require("../../assets/apple.png")} style={{ height: 30, width: 25 }} />
                            </Pressable>
                        </View>
                        <Pressable style={{marginTop:30}} onPress={() => navigation.navigate("WelcomeLanding")}>
                            <Text style={{color:'white'}}>Back</Text>
                        </Pressable>
                    </View>

                </View>
            </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        // justifyContent:'center',
        alignItems: 'center',
        flex: 1,
        width: '100%'
    },
    textstyle: {
        color: 'white',
        fontSize: 40
    },
    textinputstyle: {
        width: '85%',
        backgroundColor: '#504F50',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'row',
        opacity: 0.8,
        borderRadius: 10,

    }
})