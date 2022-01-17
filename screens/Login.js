import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {images,COLORS,SIZES,FONTS} from "../constants";
import {CustomButton} from "../components";

const Login = ({ navigation }) => {
    function renderHeader(){
        return (
            <View
                style={{
                    height:SIZES.height > 700 ? "85%" : "80%"
                }}
            >
                <ImageBackground source={images.loginBackground}
                                 style={{
                                     flex: 1,
                                     justifyContent: 'flex-end'
                                 }}
                                 resizeMode="cover"
                >
                    <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 0, y: 1}}
                        colors={[
                            COLORS.transparent,
                            COLORS.darkGreen
                        ]}
                        style={{
                            height: 150,
                            justifyContent: 'flex-end',
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <Text
                            style={{
                                width:"80%",
                                color:COLORS.white,
                                ...FONTS.largeTitle,
                                height:140,
                                lineHeight:40
                            }}
                        >
                            Cook master
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }

    function renderDetail(){
        return(
            <View
                style={{
                    flex:1,
                    paddingHorizontal: SIZES.padding
                }}
                >
                {/*Description*/}
                <Text
                style={{
                    marginTop: -90,
                    width:"80%",
                    color: COLORS.white,
                    ...FONTS.body3
                }}
                >
                    Become a master chef and surprise everyone with your dishes!
                </Text>
                {/*Buttons*/}
                <View
                    style={{
                        flex:1,
                        justifyContent: 'center'
                    }}
                >
                    {/*Start*/}
                    <CustomButton
                        buttonText="Start cooking"
                        buttonContainerStyle={{
                            paddingVertical: 18,
                            borderRadius:20
                        }}
                        colors={[COLORS.darkGreen,COLORS.lime]}
                        onPress={() => navigation.replace("Home")}
                    />
                </View>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.darkGreen
            }}
        >
        <StatusBar barStyle="light-content" />
            {/* Header */}
            {renderHeader()}
            {/*Detail*/}
            {renderDetail()}
        </View>
    )
}

export default Login;
