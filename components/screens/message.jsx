import {View,Text,StyleSheet,ScrollView,Image, Pressable, TextInput,Keyboard} from 'react-native';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient'
export default function Message(){


    let messages = [{
                        id:1,
                        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfPVX8SiUyr3RrqjHs7G1yzeKSYY03D73Jaf5gHD4PnsfpUR-SkzMPIvrvwIVRzxuQks&usqp=CAU",
                        name:"Alexandra",
                        recentmsg:"Hey, Whats Up?",noofnewmsg: 1},
                        {id:2,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfPVX8SiUyr3RrqjHs7G1yzeKSYY03D73Jaf5gHD4PnsfpUR-SkzMPIvrvwIVRzxuQks&usqp=CAU",name:"Harper",recentmsg: "Thats sounds cool, what...",noofnewmsg:4},{id:3,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfPVX8SiUyr3RrqjHs7G1yzeKSYY03D73Jaf5gHD4PnsfpUR-SkzMPIvrvwIVRzxuQks&usqp=CAU",name:"Ethan(group)",recentmsg:"I like to do a lot of different...",noofnewmsg:3}]

    const Status = ({ source, highlight, name }) => (
        <Pressable onPress={() => console.log("I am clicked")}>
        <LinearGradient
          colors={highlight ? ['#f00', '#0f0', '#00f'] : ['#fff', '#fff', '#fff']}
          style={styles.statusBorder}
        >
        <View style={styles.imageWrapper}>
          <Image source={source} style={styles.statusImage} />
        </View>
        <View style={{display:"flex",justifyContent:"center",alignItems:'center'}}>
        <Text style={{color:'white',fontSize:13}}>{name}</Text>
        </View>        
        </LinearGradient>
        </Pressable>
      );

    return(
        <View style={[{},styles.container]}>
        <LinearGradient locations={[0.4,1]} colors={['#000', '#474EFF']} style={{display:'flex',alignItems:'center',height:'100%'}}>
        <View style={{marginTop:50,display:'flex',flexDirection:'row'}}>
        <View style={{width:'50%'}}>
            <Text style={{color:'grey',marginLeft: 30,fontSize: 30}}>Messages</Text>
        </View>
        <View style={{width:'50%',alignItems:"flex-end"}} onPress={() => console.log("I am clicked")}>
            <Pressable onPress={() => console.log("I am pressed")}>
                <MaterialCommunityIcons name='tune-variant' color='grey' size={30} style={{marginRight: 10}}/>
            </Pressable>
        </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',height:120}}>
            <ScrollView horizontal={true}>
                <View style={[styles.statusView,{borderColor: 'purple',marginLeft:20}]}>
                    <View style={{backgroundColor:'orange',width:'100%',height:'100%',borderRadius:36,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Text>+</Text>
                    </View>
                    <View style={{display:"flex",justifyContent:"center",alignItems:'center',width:100}}>
                        <Text style={{color:'white',fontSize:13,marginTop:5}}>Add Streak</Text>
                    </View>
                </View>
                <View style={[styles.statusView,{display:'flex',flexDirection: 'row',width:'100%'}]}>
                {/* This part can be modified based on the incoming statuses. Only one component of the status can be returned inside a loop */}
                <Status name={'pranaw'} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfPVX8SiUyr3RrqjHs7G1yzeKSYY03D73Jaf5gHD4PnsfpUR-SkzMPIvrvwIVRzxuQks&usqp=CAU' }} highlight/>
                    <Status name={'Ayesha'} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfPVX8SiUyr3RrqjHs7G1yzeKSYY03D73Jaf5gHD4PnsfpUR-SkzMPIvrvwIVRzxuQks&usqp=CAU' }} highlight />
                    <Status name={'Rahul'} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfPVX8SiUyr3RrqjHs7G1yzeKSYY03D73Jaf5gHD4PnsfpUR-SkzMPIvrvwIVRzxuQks&usqp=CAU' }} highlight />
                    <Status name={'Neil'} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfPVX8SiUyr3RrqjHs7G1yzeKSYY03D73Jaf5gHD4PnsfpUR-SkzMPIvrvwIVRzxuQks&usqp=CAU' }} highlight />
                    <Status name={'Rocky'} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfPVX8SiUyr3RrqjHs7G1yzeKSYY03D73Jaf5gHD4PnsfpUR-SkzMPIvrvwIVRzxuQks&usqp=CAU' }} highlight />
                </View>
            </ScrollView>
        </View>
            <View style={[styles.searchBar,{height:50}]}>
                    <View style={{width:'80%',borderRadius:36,display:'flex', justifyContent: 'center',marginLeft:0}}>
                            <TextInput placeholder='Search...' placeholderTextColor={'grey'}></TextInput>
                        </View>
                        <View style={{width:'10%',borderRadius:36,display:'flex', justifyContent: 'center',alignItems:'flex-end'}}>
                            <MaterialIcons name='search' color='grey' size={20} style={{marginRight: 0}} />
                        </View>
                
            </View>
            <View style={{width:'100%',marginTop: 50}}>
            <Pressable style={{marginLeft:20,backgroundColor: "purple",height:30,width:100,display:'flex',justifyContent: "center",alignItems:"center",borderRadius:36}}>
              <Text style={{color:"white"}}>Recents</Text>
            </Pressable>
            </View>

            <ScrollView style={{width:'100%'}}>
              {messages.map((e) => {
                console.log("'"+e['img']+"'");
                return(
                    <View style={{width:'100%',display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <Pressable style={{backgroundColor: "#2e2e32",flexDirection:'row',marginBottom:20,marginTop: e['id'] === 1?30:0,height:90,width:'90%',borderRadius:10,alignItems:"center"}}>
                           
                            <View style={{marginLeft:10}}>
                            <Image source={{uri: ""+e['img']+""}} style={{height:50,width:50,borderRadius:36}}/>
                            </View>
                            <View style={{display:"flex",flexDirection:"column",marginLeft:20,width:'60%'}}>
                                <Text style={{color:"white",marginBottom:5}}>{e['name']}</Text>
                                <Text style={{color:"white",fontSize:12}}>{e['recentmsg']}</Text>
                            </View>
                            <View style={{width:'50%',alignItems:'flex-end',width:'17%'}}>
                                <Text style={{color:"white",fontSize:10,marginBottom:5,marginRight:10}}>4 min</Text>
                                <View style={{marginRight:10,backgroundColor:'blue',borderRadius:36,width:'30%',display:"flex",alignItems:"center"}}>
                                <Text style={{color:"white"}}>{e['noofnewmsg']}</Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                )
              })}
            </ScrollView>

           
        </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        height:'100%'
    },
    statusImage: {
        width: '100%',
        height: '100%',
        borderRadius: 35,
      },
    statusView:{
        // backgroundColor: "orange",
        width: 70,
        height: 70,
        // marginLeft:20,
        marginTop:20,
        borderRadius: 35,
        display:"flex",
        // justifyContent:"center",
        alignItems:"center",
        borderWidth: 3,
        // marginHorizontal: 5,
        padding: 3,
        // flexDirection: 'row'

    },
    statusBorder: {
        width: 70,
        height: 70,
        borderRadius: 35,
        padding: 3,
        marginHorizontal: 5,
      },
      imageWrapper: {
        width: '100%',
        height: '100%',
        borderRadius: 35,
        overflow: 'hidden',
        padding: 3, 
        backgroundColor: '#000', 
      },
      searchBar: {
        backgroundColor: '#2e2e32',
        display:'flex',
        justifyContent:'center',
        width:'90%',
        // height:'6%',
        borderRadius:36,
        flexDirection:'row',
      }
})