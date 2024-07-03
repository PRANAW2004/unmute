import { View, Text, StyleSheet, ImageBackground, TextInput, Pressable, Image, ScrollView } from "react-native";
import { MaterialIcons,MaterialCommunityIcons } from "@expo/vector-icons";
import LinearGradient from 'react-native-linear-gradient';
import { useState } from "react";
export default function Create() {

    const [duration, setDuration] = useState(0);
    const [play,setplay] = useState(true)

    function record(){
        setplay(play===true?false:true);   
    }

    if(play === false){
        setTimeout(() => {
            setplay(true);
        },30000)
    }

    return (
        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", width: '100%' }}>
            <LinearGradient
                locations={[0, 1]}
                colors={[ '#000','#474EFF']} style={{ display: 'flex', alignItems: 'center', height: '100%', width: '100%' }}
            >

                <View style={[styles.searchBar, { height: 50 }]}>
                    <View style={{ width: '80%', borderRadius: 36, display: 'flex', justifyContent: 'center', marginLeft: 0 }}>
                        <TextInput placeholder='Search filters' placeholderTextColor={'grey'}></TextInput>
                    </View>
                    <View style={{ width: '10%', borderRadius: 36, display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                        <MaterialIcons name='search' color='grey' size={20} style={{ marginRight: 0 }} />
                    </View>
                </View>
                <View style={{height:'30%',  marginTop: 75}}>
                <ScrollView>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Pressable>
                            <Image source={require("../../assets/Rectangle 1162.png")} style={{ height: 60, width: 60, marginRight: 30 }}></Image>
                        </Pressable>
                        <Pressable style={[styles.audiogif, { marginRight: 30 }]}>
                            <Text>Action</Text>
                        </Pressable>
                        <Pressable style={[styles.audiogif]}>
                            <Text>Action</Text>
                        </Pressable>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                        <Pressable style={[styles.audiogif, { marginRight: 30 }]}>
                            <Text>Action</Text>
                        </Pressable>
                        <Pressable style={[styles.audiogif, { marginRight: 30 }]}>
                            <Text>Action</Text>
                        </Pressable>
                        <Pressable style={[styles.audiogif]}>
                            <Text>Action</Text>
                        </Pressable>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                        <Pressable style={[styles.audiogif, { marginRight: 30 }]}>
                            <Text>Action</Text>
                        </Pressable>
                        <Pressable style={[styles.audiogif, { marginRight: 30 }]}>
                            <Text>Action</Text>
                        </Pressable>
                        <Pressable style={[styles.audiogif]}>
                            <Text>Action</Text>
                        </Pressable>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                        <Pressable style={[styles.audiogif, { marginRight: 30 }]}>
                            <Text>Action</Text>
                        </Pressable>
                        <Pressable style={[styles.audiogif, { marginRight: 30 }]}>
                            <Text>Action</Text>
                        </Pressable>
                        <Pressable style={[styles.audiogif]}>
                            <Text>Action</Text>
                        </Pressable>
                    </View>
                </ScrollView>
                </View>


                <View style={{width:'100%',marginTop:30,display:"flex",alignItems:"center"}}>
                    <View style={{width:'90%',marginBottom:10}}>
                        <Text style={{color:"white"}}>Your Audio</Text>
                    </View>
                    <View style={{gap:10,backgroundColor:"white",borderRadius: 15,height:60,width:'90%',display:"flex",justifyContent:"center",alignItems:'center',flexDirection:'row'}}>
                        <Pressable onPress={record}>
                            <MaterialCommunityIcons name={play===true?"play":"pause"} color="blue" size={35}/>
                        </Pressable>
                        <View>
                            <Image source={play===true?require("../../assets/Group 1926.png"):require("../../assets/gifmaker_me.gif")} style={{height:20,width:250}} ></Image>
                        </View>
                        <View style={styles.timeContainer}>
                            {/* <Text>{formatTime(currentPosition)}</Text> */}
                            <Text>{duration}</Text>
                        </View>
                    </View>
                </View>

                <ImageBackground
                source={require("../../assets/VUI.gif")}
                style={{height:200,width:'100%',marginTop:100,gap:15,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}
              >
                <Pressable>
                    <Image source={require("../../assets/receive-square.png")} style={{height:40,width:40,marginTop:50}} />
                </Pressable>
                <Pressable>
                    <Image source={require("../../assets/gallery-edit.png")} style={{height:40,width:40,marginTop:50}} />
                </Pressable>
                <Pressable>
                    <Image source={require("../../assets/Group 1907.png")} style={{height:60,width:60,marginTop:50}} />
                </Pressable>
                <Pressable>
                    <Image source={require("../../assets/music-library-2.png")} style={{height:40,width:40,marginTop:50}} />
                </Pressable>
                <Pressable>
                    <Image source={require("../../assets/arrow-circle-right.png")} style={{height:40,width:40,marginTop:50}} />
                </Pressable>
              </ImageBackground>  
            </LinearGradient>
        </View>
    )
}

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

const styles = StyleSheet.create({
    textcolor: {
        color: 'white',
    },
    searchBar: {
        backgroundColor: '#2e2e32',
        display: 'flex',
        justifyContent: 'center',
        width: '90%',
        // height:'6%',
        borderRadius: 36,
        flexDirection: 'row',
        marginTop: 80,
    },
    audiogif: {
        backgroundColor: "white", borderRadius: 10, height: 60, width: 60, justifyContent: "flex-end", alignItems: "center",
    },
    timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: 60,
  },
})