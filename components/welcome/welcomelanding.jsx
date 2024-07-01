import { View,Text,StyleSheet,Image,Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function WelcomeLanding({navigation}){
    return(
        <View style={[styles.container]}>
            <LinearGradient start={{x: 0.89, y: 0.55}} end={{x: 0.23, y: 0.13}}  colors={['#000','#474EFF','#000']} style={[styles.container]} >
                <View style={{marginTop:140,width:'100%'}}>
                     <Image source={require("../../assets/unmute.png")} style={{height:100,width:100,marginLeft:60}} ></Image>                 
                </View>
                <View>
                    <Text style={styles.textstyle}>Connect</Text>
                    <Text style={styles.textstyle}>friends</Text>
                    <Text style={styles.textstyle}>easily &</Text>
                    <Text style={styles.textstyle}>quickly</Text>
                </View>
                <View style={{marginTop:30,marginRight:10}}>
                    <Text style={[styles.textstyle1]}>Our chat app is the perfect way to stay</Text>
                    <Text style={[styles.textstyle1]}>connected with friends and family.</Text>
                </View>
                <View style={{width:'100%',flexDirection:'row',gap:20,display:'flex',justifyContent:'center',alignItems:'center',marginTop:30}}>
                    <Pressable style={{backgroundColor:'#1F1F1F',height:45,width:45,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:36,borderColor:'white',borderWidth:1}}>
                        <Image source={require("../../assets/google-logo-9808.png")} style={{height:30,width:30}}/>
                    </Pressable>
                    <Pressable style={{backgroundColor:'#1F1F1F',height:45,width:45,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:36,borderColor:'white',borderWidth:1}}>
                        <Image source={require("../../assets/apple.png")} style={{height:30,width:25}}/>
                    </Pressable>
                </View>
                <View style={{display:'flex',width:'100%',flexDirection:'row',marginTop:20,alignItems:'center',gap:20}}>
                    <View style={{height: 1, backgroundColor: 'grey',width:'43%'}}>
                    </View>
                    <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white'}}>OR</Text>
                    </View>
                    <View style={{height: 1, backgroundColor: 'grey',width:'44%'}}>
                    </View>
                </View>
                <View style={{marginTop:20,display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
                    <Pressable style={{backgroundColor:'white',width:'70%',height:40,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:13}}>
                        <Text style={{color:'black'}}>Sign up with existing account?</Text>
                    </Pressable>
                </View>
                <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
                    <Text style={{color:'#C1CAD0'}}>Existing account?</Text>
                    <Pressable onPress={() => navigation.navigate("Signin")}>
                        <Text style={{color:'white',marginLeft:5}}>Log in</Text>    
                    </Pressable>
                </View>

            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flex:1,
        // justifyContent:"center",
        alignItems:'center',
        height:'100%',
        width:'100%'
    },
    textstyle:{
        color:'white',
        fontSize:55,
        marginRight:60
    },
    textstyle1:{
        color:'#C1CAD0'
    }
})