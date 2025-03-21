import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect } from "react"
import { Image, StatusBar, Text, View } from "react-native"


export const Screens = ({navigation} :any) => {
  
  
  const dichuyen = async() => {
    const user = await AsyncStorage.getItem('user');
    if(user ==='true') {
      const timer = setTimeout(() => {
        navigation.navigate('TrangChu')
      }, 3000 )
      return() => clearTimeout(timer)
    }
    else{
      const time = setTimeout(() => {
        navigation.navigate('Welcome')
       }, 3000)
         return () => clearTimeout(time)
    }
    }
    useEffect(() => {
      dichuyen()
    }, [])

    return (
        
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#FFA725'}} >
            <StatusBar barStyle='dark-content' />

        {/* Animation của trang */}
            <View style={{backgroundColor: 'white', width:300, height: 300, justifyContent: 'center', alignItems: 'center', borderRadius:150}}>
              <View>
                <Image source={require('../Image/1.png')}
                style={{width:250, height:250}}  />
              </View>
            </View>
        </View>
   
    )
}


