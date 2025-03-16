import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableHighlight, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export const All = () => {
    const navigation = useNavigation();
    return(
        <SafeAreaView style={{backgroundColor:'#E9762B', height:'100%'}}>
            <View style={{ justifyContent:'center', alignItems:'center', flex:1}}>
                <View style={{backgroundColor:'white', borderRadius:200, width:400, height:400, marginRight:40 }}>
                <Image source={require('../anhh/carsmaket.png')} style={{width:300, height:300, resizeMode:"contain", margin:'auto', marginRight:40}} />
                </View>
            </View>
            <View style={{justifyContent:'flex-end', alignItems:'center',flex:1, top:-40}}>
                <TouchableHighlight onPress ={()=> navigation.navigate('DangNhap')} style={{backgroundColor:'orange', borderRadius:30, width:'90%', height:55}}>
                    <Text style={{textAlign:'center', padding:15, fontSize:20, fontWeight:'bold'}}>
                    Log In
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('DangKi')} style={{borderRadius:30, width:'90%', height:55, backgroundColor:'orange', marginTop:20}}>
                    <Text style={{textAlign:'center', padding:15, fontSize:20, fontWeight:'bold'}}>
                    Sign Up
                    </Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}