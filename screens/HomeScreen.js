import React, { useContext } from 'react';
import { AuthContext } from '../navigation/AuthProvider'
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../src/components/FormButton';

const HomeScreen = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <View>
            <Text>Hello {user.uid}</Text>
            <FormButton buttonTitle="Logout" onPress={() => logout()} />
        </View>
    )
}

export default HomeScreen
