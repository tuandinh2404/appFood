import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { View, Text, TouchableHighlight, StatusBar } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useSelector, useDispatch  } from "react-redux"
import Icon from 'react-native-vector-icons/FontAwesome6';
import { LogOut } from "../../UILogInSignUp/DangXuat/signout"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler"


const d1 = [
    {
        khung:'',
        name:'All'
    },
    {
        khung:'',
        name:'Pizza',

    },
    {
        khung:'',
        name:'Burger'
    },
    {
        khung:'',
        name:'Hot Dog'
    }
]
const dataSanPham = [
    {
        id:1,
        name:'Pizza-1',
        type:'pizza',
        price:111
    },
    {
        id:2,
        name:'Pizza-2',
        type:'pizza',
        price:145
    },
    {
        id:3,
        name:'Pizza-3',
        type:'pizza',
        price:141
    },
    {
        id:4,
        name:'Pizza-4',
        type:'pizza',
        price:300
    },
    {
        id:5,
        name:'Burger-haisan',
        type:'burger',
        price:653
    },
    {
        id:6,
        name:'Burger-rau',
        type:'burger',
        price:123
    },
    {
        id:7,
        name:'Burger-thit',
        type:'burger',
        price:543
    },
    {
        id:8,
        name:'Burger-chay',
        type:'burger',
        price:235
    },
    {
        id:9,
        name:'Hotdog-chien',
        type:'hotdog',
        price:999
    },
    {
        id:10,
        name:'Hotdog-xu',
        type:'hotdog',
        price:1000
    },
    {
        id:11,
        name:'Hotdog-ran',
        type:'hotdog',
        price:9999
    },
    {
        id:12,
        name:'Hotdog-bot',
        type:'hotdog',
        price:1823
    },

]
export const Home =(props:any) =>{
    const Gio = () => {
        try {
            const hour = new Date().getHours();
            return hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening" ;
        } catch (error) {
            return "Hello"; // Giá trị mặc định nếu lỗi
        }
    };
    const {navigation} = props
    const [loichao, setLoichao] = useState(Gio())

    const userName = useSelector((state: any) => state.SlideReducer.user)
    useEffect(()=>{
        const test =async()=>{

        const getAccout = await AsyncStorage.getItem('user');

    }
    test()
    }, [])
    useEffect(() =>{
        const capnhat = setInterval (() =>{
            setLoichao(Gio());

        }, 6000)
        return() => clearInterval(capnhat)
    }, [])
    return(
    <SafeAreaView style={{flex:1, backgroundColor:'rgb(251, 251, 251, 0.8)'}}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={{ backgroundColor:'white', height:120, alignItems:'center', width:'100%' }} >
            <View style={{flexDirection:'row', alignItems:'center', gap:200, alignContent:'center', marginTop:20}}>
            
            <View style={{flexDirection:'row', gap:10, marginRight:20,alignItems:'center',}}>
            <TouchableHighlight style={{backgroundColor:'rgba(169, 169, 169, 0.3)', borderRadius:30, width:40,height:40, marginLeft:20, alignContent:'center', justifyContent:'center'}}>
            <Icon name="bars-staggered" size={20} style={{marginLeft:10}}/> 
            </TouchableHighlight>
            <View style={{flexDirection:'column'}}>
                <Text style={{fontSize:10 ,color:'#E9762B',fontWeight:'bold'}}>
                    DELIVAR TO
                </Text>
                <Text>
                    {userName}<Icon name="chevron-down"/>
                </Text>
                
            </View>
            </View>

            <View style={{marginLeft:'auto'}}>
            <TouchableHighlight style={{backgroundColor:'black', width:40,height:40,alignContent:'center', justifyContent:'center', borderRadius:30, marginRight:20 }}>
                <Icon name='bag-shopping' size={20} color="white" style={{ marginLeft:12}}/>
            </TouchableHighlight>
            </View>
            
            </View>

            <View style={{marginRight:'auto'}}>
                <Text style={{fontSize:18, padding:14, marginLeft:10}}>
                    Hey {userName}, {loichao}
                </Text>
            </View>

        </View>
        
        <ScrollView style={{}} >
          <View style={{ justifyContent:'center', alignItems:'center', padding:20}}>
            <TouchableHighlight 
            onPress={() => navigation.navigate('Timkiem')}
            style={{
                width:'90%',
                height:70, 
                justifyContent:'center',
                borderRadius:20,
                backgroundColor:'rgba(169, 169, 169, 0.150)' }}>
                  
                <Text style={{marginLeft:10}}><Icon name="magnifying-glass" size={20} color='rgba(169, 169, 169, 0.8)'/>  Search disher, restaurants</Text>
            </TouchableHighlight>
            </View>
            <View style={{height:140, width:'100%', alignContent:'center', alignItems:'center'}}>
                <View style={{ 
                    flexDirection:'row', 
                    alignItems:'center', 
                    justifyContent:'space-between',
                    width:'95%',
                    alignContent:'center',
                    }}>
                    <Text style={{marginLeft:10, fontSize:20}}>All Categories</Text>
                    <TouchableHighlight style={{}}>
                        <Text style={{fontSize:16}}>See All <Icon name='chevron-right' size={15}/></Text>
                    </TouchableHighlight>
                </View>
                <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()} 
                        data={d1} 
                        renderItem={({item}) => 
                         
                                <TouchableHighlight style={{flexDirection:'row', height:100,padding:15,  }}>
                                    <View style={{
                                        flexDirection:'row',
                                        alignContent:'center',
                                        alignItems:'center',
                                        gap:30
                                    }}>
                                    <View style={{
                                        width:140, 
                                        height:70, 
                                        flexDirection:'row', 
                                        alignContent:'center',
                                        alignItems:'center', 
                                        gap:20,
                                        borderRadius:40,
                                        padding:6,
                                        backgroundColor:'white'
                                        }}>
                                    {item.khung}
                                    <View style={{
                                        borderRadius:25, 
                                        width:40, 
                                        height: 40, 
                                        backgroundColor:'grey', }}></View>
                                    <Text style={{gap:25, fontWeight:'bold', fontSize:15}}>{item.name}</Text>
                                    </View>
                                    
                                    </View>
                                </TouchableHighlight>
                       
                          
                                
                        }    

                />
            </View>
        </ScrollView>

      
            
    </SafeAreaView>
)}


