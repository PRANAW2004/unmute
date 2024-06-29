import { View,Text,StyleSheet } from "react-native";

export default function Profile(){
    return(
        <View>
            <Text style={styles.textcolor}>This is a profile page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textcolor:{
        color:'white',
    }
})