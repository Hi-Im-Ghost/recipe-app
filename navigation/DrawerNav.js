import DrawerNavigator from "@react-navigation/drawer/src/navigators/createDrawerNavigator";
import {createDrawerNavigator} from "@react-navigation/drawer";
import StackNav from "./stackNav";
import {Text, View} from "react-native";
import {Home, Login, Recipe} from "../screens";
import Tabs from "./tabs";

const Drawer = createDrawerNavigator();

function Texts(navigation){
    return(
        <View>
            <Text>HALO</Text>
        </View>
    )
}

function MyDrawer(){
    return(
        <DrawerNavigator>
            <Drawer.Screen name="Home" component={Texts}/>
        </DrawerNavigator>
    );
}

export default MyDrawer;
