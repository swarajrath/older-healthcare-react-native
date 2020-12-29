import React, { useContext } from 'react';
import { AuthContext } from '../navigation/AuthProvider'
import { View, Text, StyleSheet } from 'react-native';
//import FormButton from '../src/components/FormButton';
import { Container } from '../styles/HomeStyles';

const HomeScreen = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <Container>
            <Text>Welcome</Text>
        </Container>
    )
}

export default HomeScreen
