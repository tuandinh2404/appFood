import { Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"


const DetailProduct=({navigation}:any)=>{
    
    const {sanpham}=useSelector((state:any)=>state.ProductReducer)
    console.log(sanpham,'sanpham')
    return(
        <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}} onPress={()=>{
            navigation.navigate('Giohang')
        }}>
            <Text>1231</Text>
        </TouchableOpacity>
    )
}
export default DetailProduct