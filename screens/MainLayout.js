import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming
} from 'react-native-reanimated';
import { connect } from 'react-redux';
import { setSelectedTab } from '../redux/actions/tabAction';


const MainLayout = ({ drawerAnimationStyle }) => {
    return (
        <Animated.View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                ...drawerAnimationStyle
            }}
        >
            {/** Header */}


            {/** Content */}
            <Text>MainLayout</Text>
        </Animated.View>
    )
}

export default MainLayout;