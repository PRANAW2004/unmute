import { View,Text,Image,StyleSheet, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
export default function Welcome({navigation}){
    return(
        <View style={[styles.container]}>
            <LinearGradient start={{x: 1.3, y: 0.7}} end={{x: 2.4, y: 0}} style={[styles.container]} colors={[ '#000','#474EFF']}>
                <Image source={require("../../assets/unmute.png")} style={{height:200,width:200,marginTop:100}} ></Image>
                <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Text style={[styles.textstyle,{fontWeight:400}]}>Welcome</Text>
                    <Text style={[styles.textstyle,{fontWeight:400}]}>Back!</Text>
                </View>
                <View style={{display:'flex',height:300,justifyContent:'flex-end'}}>
                    <Pressable onPress={() => navigation.navigate("WelcomeLanding")} style={{backgroundColor:'#8000FF',height:35,borderRadius:10,width:160,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                        
                        <View style={{width:'90%'}}>
                         <Text style={{color:'white',fontSize:20,marginLeft:30,fontWeight:500}}>get started</Text>
                        </View>
                        <View style={{width:'10%',alignItems:"flex-end",marginRight:20}}>
                            <MaterialIcons name='keyboard-arrow-right' color='white' size={20}></MaterialIcons> 
                        </View>
                    </Pressable>
                </View>
            </LinearGradient>
            
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        // justifyContent:"center",
        alignItems:'center',
        height:'100%',
        width:'100%'
    },
    textstyle:{
        color:'white',
        fontSize:70,
        // fontWeight:10,
    }
})