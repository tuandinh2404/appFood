import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { View, Text, TouchableHighlight, StatusBar } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useSelector, useDispatch  } from "react-redux"
import Icon from 'react-native-vector-icons/FontAwesome6';
import { LogOut } from "../../UILogInSignUp/DangXuat/signout"

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
    },[])
    useEffect(() =>{
        const capnhat = setInterval (() =>{
            setLoichao(Gio());

        }, 6000)
        return() => clearInterval(capnhat)
    }, [])
    return(
    <SafeAreaView style={{flex:1}}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={{ backgroundColor:'#f001', height:120, alignItems:'center', width:'100%' }} >
            <View style={{flexDirection:'row', alignItems:'center', gap:200, alignContent:'center', marginTop:20}}>
            
            <View style={{flexDirection:'row', gap:10, marginRight:20,alignItems:'center',}}>
            <TouchableHighlight style={{backgroundColor:'grey', borderRadius:30, width:40,height:40, marginLeft:20, alignContent:'center', justifyContent:'center'}}>
            <Icon name="bars-staggered" size={20} style={{marginLeft:10}}/> 
            </TouchableHighlight>
            <View style={{flexDirection:'column'}}>
                <Text style={{fontSize:10 ,color:'#E9762B',fontWeight:'bold'}}>
                    DELIVAR TO
                </Text>
                <Text>
                    {userName}
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
                <Text style={{fontSize:18}}>
                    Hey {userName}, {loichao}
                </Text>
            </View>

        </View>

        <TouchableHighlight onPress={()=>LogOut(navigation)}>
                <Text>dd</Text>
            </TouchableHighlight>
            
    </SafeAreaView>
)}


