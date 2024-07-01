import { View,Text,StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function Signin({navigation}){
    return(
        <View style={styles.container}>
        
        {/* <LinearGradient style={styles.container} start={{x:1,y:0.8}} end={{x:0.8,y:0}} colors={['#000','#474EFF','#000','#474EFF','#000']}>
                <Text>Hello world</Text>
            </LinearGradient>             */}
            <Text>This is a signin page</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        width:'100%'
    }
})