import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList, SafeAreaView, Image
} from 'react-native';

import {FONTS, COLORS, SIZES, icons, images, dummyData} from "../constants";
import {CategoryCard, TrendingCard} from "../components";

const Profile = ({ navigation }) => {

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
                {/*Image*/}

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
                    Your photos of the dishes
                </Text>
            </View>
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
