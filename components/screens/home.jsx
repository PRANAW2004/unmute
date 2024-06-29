import { View,Text,StyleSheet } from "react-native";

export default function Home(){
    return(
        <View>
            <Text style={styles.textcolor}>This is a home page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textcolor:{
        color:'white',
    }
})