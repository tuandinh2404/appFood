import React from "react"
import { View,Text, TouchableHighlight, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useDispatch, useSelector } from "react-redux";
import { saveProduct } from "../../Slices/Product";



export const Giohang = (props:any) => {
    const {navigation,route} = props
    const dispatch=useDispatch()
    const {sanpham}=useSelector((state:any)=>state.ProductReducer)
    console.log(sanpham,'sanpham>>>')
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{backgroundColor:'grey', height:50, flexDirection:'row', alignItems:'center', gap:20}}>
                <TouchableHighlight
                underlayColor="transparent"
                style={{marginLeft:20}} onPress={() => navigation.goBack()}>
                <Icon name='chevron-left' size={20} />
                </TouchableHighlight>
                <Text>CART</Text>
                <Text>EDIT ITEM</Text>
            </View>
            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}
            
            
            onPress={()=>{
                dispatch(saveProduct({luusanpham:{}}))
                    }}>
                        <Text>1231</Text>
                    </TouchableOpacity>

        </SafeAreaView>
    )
}