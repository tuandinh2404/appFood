import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native"


export const LogOut =async (navigation) => {
        await AsyncStorage.removeItem('user');
        navigation.navigate('Welcome')
 
}
