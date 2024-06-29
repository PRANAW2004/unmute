import { View,Text,StyleSheet } from "react-native";

export default function Create(){
    return(
        <View>
            <Text style={styles.textcolor}>This is a create page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textcolor:{
        color:'white',
    }
})