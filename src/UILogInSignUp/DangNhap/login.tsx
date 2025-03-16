import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from 'react';
import { Alert, Pressable, SafeAreaView, StatusBar, Text, TextInput, TouchableHighlight, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useDispatch, useSelector } from 'react-redux';


export const Login = () => {
    const navigation = useNavigation();
    const dispatch=useDispatch()
    const [accout,setAccout] = useState<any>(null);
    const [ gmail, setGmail]= useState('')
    const [ pass, setPass] = useState('')

    const { email, password } = useSelector((state: any) => state.SlideReducer)

    useEffect(()=>{
        const getUser = async() =>{
            try{
                const getAccout = await AsyncStorage.getItem('user');
            
                if(getAccout) {
                    await AsyncStorage.setItem('user', 'true');
                    setAccout(JSON.parse(getAccout));
                }
            } catch(error) {
                Alert.alert('error' + error)
            }
        }
        getUser();
    }, []);
    console.log(accout,'accout>>>>>>>')
    const ChuChot =async ()=> {
        if(gmail === '') {
            Alert.alert('Please Email')
            return;
        }
        if(pass === '') {
            Alert.alert('Please PassWord')
            return;
        }
        const getAccout = await AsyncStorage.getItem('user');
        const user={...getAccout, active:1}
        if(
            accout &&
            accout.email === gmail &&
            accout.password === pass 
        ) {
            Alert.alert('Success')
            AsyncStorage.setItem('user', JSON.stringify(user));
            navigation.navigate('TrangChu')
        } else{
            Alert.alert('saiii')
        }
    }
    
    

    return(
        <SafeAreaView style={{flex:1, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
            <StatusBar barStyle="light-content" />
            <View style={{backgroundColor:"black", width:'100%', height:'50%', bottom:5, justifyContent:"center", }} >
                <Text style={{fontSize:30, fontWeight:'bold',textAlign:'center', color:'white',padding:8, marginTop:90, }}>
                    Log In
                </Text>
                <Text style={{color:'white', textAlign:'center',fontSize:15,fontWeight:200 }}>
                    Please sign in to your existing account
                </Text>
            </View>
            {/* dangnhap */}
            <View style={{ width:'100%',height:'75%' ,backgroundColor:'white',bottom:70, borderTopRightRadius:20, borderTopLeftRadius:20, }}>
                
                <Text style={{marginTop:20,left:10,padding:8 }}>
                    EMAIL
                </Text>
                <View style={{alignItems:'center', }}>
                <TextInput 
                placeholder="example@gmail.com" 
                style={{ borderRadius:10, width:'90%', height:70,backgroundColor:'#EFF3EA'}} 
                value={gmail}
                onChangeText={(text) => setGmail(text)}
                />
                </View>
                <Text style={{marginTop:20,left:10, padding:8}}>
                    PASSWORD
                </Text>
                <View style={{alignItems:'center',flexDirection:'row', }}>
                <TextInput 
                placeholder="đs"  
                style={{ borderRadius:10, width:'90%', height:70,backgroundColor:'#EFF3EA',margin:'auto',  }}
                value={pass}
                onChangeText={(text) => setPass(text)}
                />
                </View>
                <View style={{flexDirection:'row', gap:180, top:15, left:13}}>
                    <Text style={{left:10}}>
                        Remember me
                    </Text>
                    <TouchableHighlight style={{alignContent:'flex-end'}}>
                        <Text style={{color:'#E9762B'}}>
                        Forgot password
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={{alignItems:'center' }}>
                <TouchableHighlight style={{ width:'90%',height:70, borderRadius:15, top:35,backgroundColor:'#E9762B'}} onPress={() => ChuChot()}>
                    <Text style={{textAlign:'center', padding:20, fontSize:20, fontWeight:'bold',color:'white'}}>
                        Log In
                    </Text>
                </TouchableHighlight>
                </View>
                <View style={{alignItems:'center', top:50, alignContent:'center', padding:20}}>
                <Text style={{fontSize:15, fontWeight:200}}>Don't have an account?
                      <Pressable onPress={() => {navigation.navigate('DangKi')}}>
                        <Text style={{color:'#E9762B', fontWeight:800, fontSize:18, top:7, right:9}}>   SIGN UP</Text>
                    </Pressable>
                </Text>
                </View>
                <View style={{alignItems:'center', top:50, alignContent:'center', padding:20}}>
                <Text style={{fontSize:18}}>Or</Text>
                </View>
                <View style={{flexDirection:'row' , alignContent:'center', justifyContent:'center', top:50, gap:20}}>
                    <TouchableHighlight style={{ 
                        borderRadius:50, 
                        width:70,
                        height:70, 
                        backgroundColor:'#4267B2',
                        alignItems: "center",
                        justifyContent: "center" }}>
                    <Icon name='facebook-f' size={25} color='white' style={{margin:20}} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{
                        borderRadius:50, 
                        width:70,
                        height:70, 
                        backgroundColor:'black',
                        alignItems: "center",
                        justifyContent: "center"}}>
                    <Icon name='x-twitter' size={25} color='white' style={{margin:20}}/>
                    </TouchableHighlight>
                    <TouchableHighlight style={{
                        borderRadius:50, 
                        width:70,
                        height:70,
                        backgroundColor:'black', 
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Icon name='apple' size={25} color='white' style={{margin:20}}/>
                    </TouchableHighlight>
                </View>
            </View>
            
        </SafeAreaView> 
    )        
}