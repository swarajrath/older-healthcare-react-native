import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Dimensions } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

const Skip = () => {
    return (
        <Button title="Skip" color="#000000" />
    )
}

const Next = ({ ...props }) => {
    return (
        <Button title="Next" color="#000000" {...props} />
    )
}

const Done = ({ ...props }) => {
    return (

        <Button title="Done" color="#000000" {...props} />
    )
}

const Dots = ({ selected }) => {
    let backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View style={{ width: 5, height: 5, marginHorizontal: 3, backgroundColor }} />
    )
}



const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}  //Later provide here also 
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image resizeMode = 'contain' style={styles.onBoardingImage1} source={require('../assets/onboarding-img1.png')} />,
                    title: 'Record health information',
                    subtitle: 'Keep track of your Blood Pressure, Blood Glucose Level, Body Temperature at a glance',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image resizeMode = 'contain' style={styles.onBoardingImage2} source={require('../assets/onboarding-img2.png')} />,
                    title: 'Control with Voice Command',
                    subtitle: 'Enjoy voice command feature for easier experience',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image resizeMode = 'contain' style={styles.onBoardingImage3} source={require('../assets/onboarding-img3.png')} />,
                    title: 'Track your fitness',
                    subtitle: 'Track how much distance you have travelled using your phone',
                },

            ]}
        />
    )
}

export default OnboardingScreen;

var {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    onBoardingImage1: {
        width: width * 0.5,
        overflow: 'visible',
        height: height * 0.5
    },
    onBoardingImage2: {
        width: width * 0.8,
        overflow: 'visible',
        height: height * 0.5
    },
    onBoardingImage3: {
        width: width * 0.8,
        overflow: 'visible',
        height: height * 0.5
    }
})
