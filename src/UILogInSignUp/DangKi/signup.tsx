import { useState } from "react";
import {  Alert, StatusBar, TouchableHighlight, View } from "react-native"
import {  Text, TextInput } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import {saveEmail, savePassword, saveTypepassword, saveUser} from '../../Slices/bonho';
import {useDispatch} from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const Signup= () =>{
    const navigation = useNavigation();
    const [password, setPassword] =useState('');
    const [email, setEmail] =useState('');
    const [user, setUser] =useState('');
    const [typepass, setTypepass] =useState('');
    const dispatch = useDispatch();
    
    
    const ChinhChu =() =>{
        if(user === '') {
            Alert.alert('lỗi')
            return;
        } 
        if(email === '') {
            Alert.alert('lỗi')
            return;
        } 
        if(password === '') {
            Alert.alert('lỗi')
            return;
        } 
        if(typepass === '') {
            Alert.alert('lỗi')
            return;
        }
        if(password !== typepass) {
            Alert.alert('không trùng mật khẩu')
            return;
        }
        const value ={
            name: user,
            email:email,
            password:password,
            active:0
        }
        dispatch(saveUser({saveuser:user}))
        dispatch(saveEmail({ saveemail: email}));
        dispatch(savePassword({savepassword: password}));
        dispatch(saveTypepassword({savetypepassword:typepass}));
        

        try{
            AsyncStorage.setItem('user', JSON.stringify(value));
            Alert.alert('Sign Up Success');
            navigation.navigate('All');
        }   catch(error){
            Alert.alert('Sign Up Failed');
        }

        
    }


    return(
    <SafeAreaView style={{flex:1, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
        <StatusBar barStyle="light-content" />
        <View style={{backgroundColor:"black", width:'100%', height:'50%', bottom:20, justifyContent:"center", }} >
            <Text style={{fontSize:30, fontWeight:'bold',textAlign:'center', color:'white',padding:8, marginTop:90, }}>
                Sign Up
            </Text>
            <Text style={{color:'white', textAlign:'center',fontSize:15,fontWeight:200 }}>
                Please sign up to get started
            </Text>
        </View>
        {/* dangki */}

        <View style={{ width:'100%',height:'80%' ,backgroundColor:'white',bottom:70, borderTopRightRadius:20, borderTopLeftRadius:20, }}>
        {/* khoảng cách */}   
            <Text style={{marginTop:20,left:10,  padding:8}}>
                NAME
            </Text>
            <View style={{alignItems:'center' }}>
            <TextInput placeholder="VD : NGUYEN VAN A" style={{ borderRadius:10, width:'90%', height:70,backgroundColor:'#EFF3EA'}}
            value={user}
            onChangeText={(text) => setUser(text)}
            />
            </View>
        {/* khoảng cách */}
            <Text style={{marginTop:20,left:10,padding:8 }}>
                EMAIL
            </Text>
            <View style={{alignItems:'center', }}>
            <TextInput 
            placeholder="example@gmail.com" 
            style={{ borderRadius:10, width:'90%', height:70,backgroundColor:'#EFF3EA'}} 
            value={email}
            onChangeText= {(text) =>setEmail(text)}
            />
            </View>
        {/* khoảng cách */}
            <Text style={{marginTop:20,left:10, padding:8}}>
                PASSWORD
            </Text>
            <View style={{alignItems:'center',flexDirection:'row', }}>
            <TextInput placeholder="password"  
            style={{ borderRadius:10, width:'90%', height:70,backgroundColor:'#EFF3EA',margin:'auto',  }} 
            value={password}
            onChangeText={(text) => setPassword(text)}
            />    
            </View>
        {/* khoảng cách */}
            <Text style={{marginTop:20,left:10, padding:8}}>
                RE-TYPE PASSWORD
            </Text>
            <View style={{alignItems:'center', }}>
            <TextInput placeholder="re-type password" 
            style={{ borderRadius:10, width:'90%', height:70,backgroundColor:'#EFF3EA'}}
            value={typepass}
            onChangeText={(text) => setTypepass(text)}
            />
            </View>
            <View style={{alignItems:'center' }}>
            <TouchableHighlight style={{ width:'90%',height:70, borderRadius:15, top:35,backgroundColor:'#E9762B'}} onPress={() =>ChinhChu()}>
                <Text style={{textAlign:'center', padding:20, fontSize:20, fontWeight:'bold',color:'white'}}>
                    Sign Up
                </Text>
            </TouchableHighlight>
        </View>

        </View>
        
    </SafeAreaView>    
)}
