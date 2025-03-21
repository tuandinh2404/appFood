import React from "react"
import {  View,TextInput, TouchableHighlight, Text  } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Icon from 'react-native-vector-icons/FontAwesome6';



export const Search = (props:any) => {
    const {navigation} = props
    return(
    <SafeAreaView style={{flex:1}}>
        <View style={{flexDirection:'row',gap:20,  marginRight:20,alignItems:'center',width:'100%'}}>
                    <TouchableHighlight 
                    onPress={() => navigation.navigate('TrangChu')}
                    style={{
                        backgroundColor:'rgba(169, 169, 169, 0.3)', 
                        borderRadius:30, 
                        width:40,height:40, 
                        marginLeft:20, 
                        alignContent:'center', 
                        justifyContent:'center'}}>
                    <Icon name="chevron-left" size={20} style={{marginLeft:13}}/> 
                    </TouchableHighlight>
                    <Text style={{fontSize:30}}>Search</Text>
        </View>
        <View style={{justifyContent:'center', alignItems:'center', alignContent:'center', padding:20}}>
        <View style={{borderWidth:1, width:'85%',borderRadius:20, height:60, justifyContent:'center', }}>
            <TextInput placeholder="Search" style={{marginLeft:15}}/>
        </View>
        </View>
    </SafeAreaView>
    )
}