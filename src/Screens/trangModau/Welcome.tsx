import React, { useRef } from "react";
import { FlatList, Image, Pressable, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer, useNavigation } from "@react-navigation/native";




const imageMode = [
  {
    image: require('./Image/4.png'),
    h1: 'All Your Favorites',
    p: 'Get all your laved foods in one once place,',
    p2:'your just place the orer we do the rest'
  },
  {
    image: require('./Image/1.png'),
    h1: 'All Your Favorites',
    p: 'Get all your laved foods in one once place,',
    p2:'your just place the orer we do the rest'
  },
  {
    image: require('./Image/2.png'),
    h1: 'Order from choosen chef',
    p: 'Get all your laved foods in one once place, ',
    p2:'your just place the orer we do the rest'
  },
  {
    image: require('./Image/3.png'),
    h1: 'Free delivery offers',
    p: 'Get all your laved foods in one once place, ',
    p2:'your just place the orer we do the rest'
  }
];

export const Welcome = () => {
  const navigation = useNavigation();


  const nutLuot =() => {
    return imageMode.map((dot,index) =>{
      return(
        <View
        key={index}
        style={{
          backgroundColor:'red',
          height:10,
          width:10,
          borderRadius:5,
        }}>

        </View>
      )
    })
  }
  
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center', alignContent:'center', alignItems:'center'}} >
      <View style={{ height:700, bottom:70}}>
      <FlatList
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      data={imageMode} 
      renderItem={({item, index}) => (
      <View style={{flex:1, justifyContent:'center', alignContent:'center', alignItems:'center',}}>
        <Image source={item.image} style={{width:400, height:400, justifyContent:'center', alignContent:"center", top:20}} />
        <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', top:40,}}>{item.h1}</Text>
        <Text style={{textAlign:'center', fontSize:15, color:'gray', top:60}}>{item.p}{'\n'}{item.p2}</Text>
      </View>
    )}  
      />
      <View style={{flexDirection:'row', gap:15, justifyContent:'center', alignItems:'center',}}>
          {nutLuot()}
          </View>
      </View>
      
      <View style={{justifyContent:'center', alignItems:'center', bottom:40}}>
        <Pressable style={{backgroundColor:'#FFB433', width:350, height:60, borderRadius:20 }} onPress={() => {navigation.navigate('All')}}>
          <Text style={{textAlign:'center', margin:'auto', color:'white', fontWeight:'bold', fontSize:20}}>NEXT</Text>
        </Pressable>
        <Pressable style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
          <Text style={{fontWeight:100, fontSize:17}}>Skip</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
