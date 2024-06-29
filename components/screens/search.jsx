import { View,Text,StyleSheet } from "react-native";

export default function Search(){
    return(
        <View>
            <Text style={styles.textcolor}>This is a search page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textcolor:{
        color:'white',
    }
})