import React, { useContext } from 'react';
import { AuthContext } from '../navigation/AuthProvider'
import { View, Text, StyleSheet } from 'react-native';
//import FormButton from '../src/components/FormButton';
import { Container } from '../styles/HomeStyles';
import Home from './Home'




export default class HomeScreen extends Component {
    render() {
        return (
            <NavigationContainer>
                <StatusBar bg={'#313131'} />
                <Sidebar menu={<Menu />}>
                    <Content />
                </Sidebar>

                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{
                        headerTransparent: true,
                        headerLeft: () => (
                            <Image source={require('./assets/drawericon.png')} style={{}} />
                        ),
                        title: '',
                        headerRight: () => (
                            <Image source={require('./assets/user.png')} style={{ marginHorizontal: 20, marginTop: 40 }} />
                        )
                    }} />
                    <Stack.Screen name="Mission" component={Mission} options={{
                        headerTransparent: true,
                        headerLeft: () => (
                            <Image source={require('./assets/blackmenu.png')} style={{ marginHorizontal: 20, marginTop: 40 }} />
                        ),
                        title: '',
                        headerRight: () => (
                            <Image source={require('./assets/user.png')} style={{ marginHorizontal: 35, marginTop: 45 }} />
                        )
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}


// const HomeScreen = () => {
//     const { user, logout } = useContext(AuthContext)
//     return (
//         <Container>
//             <Text>Welcome</Text>
//         </Container>
//     )
// }

// export default HomeScreen
