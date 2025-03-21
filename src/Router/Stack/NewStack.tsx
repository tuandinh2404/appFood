import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import React from "react";

import { Screens } from "../../Screens/trangModau/chaomung/ChaoMung";
import { Welcome } from "../../Screens/trangModau/Welcome";
import { All } from "../../UILogInSignUp/trangchinh/all";
import { Signup } from "../../UILogInSignUp/DangKi/signup";
import { Login } from "../../UILogInSignUp/DangNhap/login";
import { Home } from "../../Component/home/TrangChu";
import { LogOut } from "../../UILogInSignUp/DangXuat/signout";
import { Search } from "../../Component/search/timkiem";






const Stack = createStackNavigator();
function NewStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false,}}>
                <Stack.Screen name="Home" component={Screens} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="All" component={All}/>
                <Stack.Screen name="DangKi" component={Signup}/>
                <Stack.Screen name='DangNhap' component={Login}/>
                <Stack.Screen name='TrangChu' component={Home} options={{presentation: 'card'}}/>
                <Stack.Screen name='Timkiem' component={Search} options={{presentation: "modal"}} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}
export default NewStack;