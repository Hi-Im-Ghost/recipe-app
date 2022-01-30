import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList, SafeAreaView, Image
} from 'react-native';

import { Ionicons } from "@expo/vector-icons"
import {Button, Box, Center, NativeBaseProvider, Icon} from "native-base";
import {FONTS, COLORS, SIZES, icons, images, dummyData} from "../constants";
import {CategoryCard, TrendingCard} from "../components";
import ImagePicker from 'react-native-image-crop-picker';

const Profile = ({ navigation }) => {

    useEffect(() => {
        setImage(image);
    }, [image]);

    const [image, setImage] = useState(image);

    const takePhotoFromCamera = () => {

        ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true,
            compressImageQuality: 0.9
        }).then(image => {
            console.log(image);
            setImage(image.path);
        });
    }

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImage(image.path);
        });
    }


    function renderHeader(){
        return(
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    alignItems: 'center',
                    height: 50,
                    marginTop:15
                }}
            >
                {/*Text*/}
                <View
                    style={{
                        flex:1,
                    }}
                >
                    <Text
                        style={{
                            color:COLORS.darkGreen,
                            ...FONTS.h2
                        }}
                    >
                        Hello Master,
                    </Text>
                    <Text
                        style={{
                            marginTop:3,
                            color: COLORS.gray,
                            ...FONTS.body3
                        }}
                    >
                        this is your profile
                    </Text>
                </View>

            </View>
        )
    }

    function renderProfile() {
        return(
            <View
                style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    paddingHorizontal:10,
                    paddingTop:10,
                    backgroundColor: COLORS.lime,
                }}
            >
                {/*Back Button */}
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 35,
                        width: 35,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: COLORS.lightGray,
                        backgroundColor: COLORS.transparentBlack5
                    }}
                    onPress={()=>navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        style={{
                            width: 15,
                            height:15,
                            tintColor: COLORS.lightGray
                        }}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        alignItems: 'center',
                        backgroundColor: COLORS.lime,
                    }}
                >
                    {/*Image*/}
                    <Image
                        source={images.master}
                        resizeMode="cover"
                        style={{
                            flex: 1,
                            width: 400,
                            height: 200,
                            resizeMode: 'contain'
                        }}
                    />
                </View>


            </View>
        )
    }

    function renderFavorite() {
        return(
            <View
                style={{
                    marginTop:SIZES.padding,
                }}
            >
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        ...FONTS.h2
                    }}
                >
                    Your favorite recipes
                </Text>
                <FlatList
                    data={dummyData.trendingRecipes}
                    horizontal showsHorizontalScrollIndicator={false}
                    keyExtractor={item=> `${item.id}`}
                    renderItem={({item, index}) => {
                        return(
                            <TrendingCard
                                containerStyle={{
                                    marginLeft: index == 0?SIZES.padding:0,
                                    flex: 1,
                                    height: 200,
                                    resizeMode: 'contain'
                                }}
                                recipeItem={item}
                                onPress={()=>navigation.navigate("Recipe",{recipe: item})}
                            />
                        )
                    }}
                />
            </View>
        )
    }


    function renderPhoto() {
        return(
            <NativeBaseProvider>
                <View
                    style={{
                        marginTop:SIZES.padding,
                    }}
                >
                    <Text
                        style={{
                            marginHorizontal: SIZES.padding,
                            ...FONTS.h2
                        }}
                    >
                        Your last photo of the dish
                    </Text>
                    <View style={{
                        padding: 20,
                        backgroundColor: '#FFFFFF',
                        paddingTop: 20,
                    }}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            {/*Image*/}
                            <Image
                                source={{
                                    uri:image,
                                }}
                                style={{
                                    flex: 1,
                                    width: 400,
                                    height: 200,
                                    resizeMode: 'contain'
                                }}>
                            </Image>
                        </View>

                        <View
                            style={{
                                alignItems: 'center',
                                marginTop:SIZES.padding
                            }}>
                            <Text style={{
                                marginHorizontal: SIZES.padding,
                                ...FONTS.h2
                            }}>
                                Upload Photo
                            </Text>
                            <Text mt="3"  style={{
                                color: COLORS.gray,
                                ...FONTS.body3
                            }}>
                                Choose or take a picture of your dish
                            </Text>
                        </View>

                        <Box alignItems="center">
                            <Button py="5" px="20" m="5" bg="#2AD699" leftIcon={<Icon as={Ionicons} name="camera" size="sm" />} onPress={takePhotoFromCamera}>Take photo</Button>
                        </Box>
                        <Box alignItems="center">
                            <Button py="5" px="20" mb="5" bg="#2AD699" leftIcon={<Icon as={Ionicons} name="folder" size="sm" />} onPress={choosePhotoFromLibrary}>Choose From Library</Button>
                        </Box>

                    </View>
                </View>
            </NativeBaseProvider>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor:COLORS.white
            }}
        >
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/*Profile*/}
                        {renderProfile()}
                        {/*Header*/}
                        {renderHeader()}
                        {/*My favorite*/}
                        {renderFavorite()}
                        {/*My photo album*/}
                        {renderPhoto()}
                    </View>
                }
                ListFooterComponent={
                    <View
                        style={{
                            marginBottom:100
                        }}

                    />
                }
            />
        </SafeAreaView>
    )
}

export default Profile;
