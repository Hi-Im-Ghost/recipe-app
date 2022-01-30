import Tabs from "./tabs";
import {Profile, Login, Recipe} from "../screens";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Login'}
        >
            <Stack.Screen name="Home" component={Tabs}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Recipe" component={Recipe}/>
        </Stack.Navigator>
    );
}

export default StackNav;
