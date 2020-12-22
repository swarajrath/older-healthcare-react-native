import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = () => {
    <Button title="Skip" color="#000000" />
}

const Next = ({...props}) => {
    <Button title="Next" color="#000000" {...props} />
}

const Done = ({...props}) => {
    <Button title="Done" color="#000000" {...props} />
}

const Dots = ({selected}) => {
    let backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View style={{width: 5, height: 5, marginHorizontal: 3, backgroundColor}} />
    )
}



const OnboardingScreen = ({navigation}) => {
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
                    image: <Image source={require('../assets/onboarding-img1.png')} />,
                    title: 'Onboarding 1',
                    subtitle: 'Hello Old people',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Onboarding 2',
                    subtitle: 'We are here for you',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assets/onboarding-img3.png')} />,
                    title: 'Onboarding 3',
                    subtitle: 'How u doin',
                },
                
  ]}
        />
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
