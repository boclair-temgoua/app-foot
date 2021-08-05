import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView
} from '@react-navigation/drawer'

import { MainLayout } from '../screens'
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../constants';
import Animated from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTab } from '../redux/actions/tabAction';

const Drawer = createDrawerNavigator()

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 40,
                marginBottom: SIZES.base,
                alignItems: 'center',
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: isFocused ? COLORS.transparentBlack1 : null

            }}
            onPress={onPress}
        >
            <Image
                source={icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.white
                }}
            />
            <Text
                style={{
                    marginLeft: 15,
                    color: COLORS.white,
                    ...FONTS.h3
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}
const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => {
    const dispasth = useDispatch()
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1 }}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.radius
                }}
            >
                {/* close */}
                <View
                    style={{
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Image source={icons.cross}
                            style={{
                                height: 35,
                                width: 35,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/** Profile */}
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        alignItems: 'center'
                    }}
                    onPress={() => console.log('Profile')}
                >
                    <Image
                        source={dummyData.myProfile?.profile_image}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: SIZES.radius
                        }}
                    />
                    <View
                        style={{
                            marginLeft: SIZES.radius
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{dummyData.myProfile?.name}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>View your profile</Text>
                    </View>
                </TouchableOpacity>

                {/** Drawe Items */}
                <View
                    style={{
                        flex: 1,
                        marginTop: SIZES.padding
                    }}
                >
                    <CustomDrawerItem
                        label={constants.screens.home}
                        icon={icons.home}
                        isFocused={selectedTab === constants.screens.home}
                        onPress={() => {
                            dispasth(setSelectedTab(constants.screens.home))
                            navigation.navigate("MainLayout")
                        }}
                    />
                    {/** Wallet */}
                    <CustomDrawerItem
                        label={constants.screens.my_wallet}
                        icon={icons.wallet}
                        isFocused={selectedTab === constants.screens.my_wallet}
                        onPress={() => {
                            dispasth(setSelectedTab(constants.screens.my_wallet))
                            navigation.navigate("MainLayout")
                        }}
                    />
                    {/** Notification */}
                    <CustomDrawerItem
                        label={constants.screens.notification}
                        icon={icons.notification}
                        isFocused={selectedTab === constants.screens.notification}
                        onPress={() => {
                            dispasth(setSelectedTab(constants.screens.notification))
                            navigation.navigate("MainLayout")
                        }}
                    />
                    {/** Favorite */}
                    <CustomDrawerItem
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                        isFocused={selectedTab === constants.screens.favourite}
                        onPress={() => {
                            dispasth(setSelectedTab(constants.screens.favourite))
                            navigation.navigate("MainLayout")
                        }}
                    />
                    {/** Line Divider */}
                    <View
                        style={{
                            height: 1,
                            marginVertical: SIZES.radius,
                            marginLeft: SIZES.radius,
                            backgroundColor: COLORS.lightGray1
                        }}
                    />
                    {/** Track */}
                    <CustomDrawerItem
                        label={"Track Your Order"}
                        icon={icons.location}
                    />
                    {/** Coupn */}
                    <CustomDrawerItem
                        label={"Coupons"}
                        icon={icons.coupon}
                    />
                    {/** Setting */}
                    <CustomDrawerItem
                        label={"Setting"}
                        icon={icons.setting}
                    />

                    {/** Invite */}
                    <CustomDrawerItem
                        label={"Invite a Friend"}
                        icon={icons.profile}
                    />

                    {/** Help */}
                    <CustomDrawerItem
                        label={"Help Center"}
                        icon={icons.help}
                    />
                </View>

                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    {/** Logout */}
                    <CustomDrawerItem
                        label={"Logut"}
                        icon={icons.logout}
                    />
                </View>
            </View>

        </DrawerContentScrollView>
    )
}

const CustomDrawer = () => {
    const [progress, setProgress] = useState(new Animated.Value(0))
    const selectedTab = useSelector(state => state.tabReducer.selectedTab)

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    })

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26]
    })

    const AnimatedStyle = { borderRadius, transform: [{ scale }] }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.primary
            }}
        >
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{
                    flex: 1,
                    width: '65%',
                    paddingRight: 20,
                    backgroundColor: "transparent"
                }}
                sceneContainerStyle={{
                    backgroundColor: "transparent"
                }}
                initialRouteName="MainLayout"
                drawerContent={props => {
                    setTimeout(() => {
                        setProgress(props.progress)
                    }, 0)
                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                        />
                    )
                }}
            >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props}
                        drawerAnimationStyle={AnimatedStyle} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}
export default CustomDrawer