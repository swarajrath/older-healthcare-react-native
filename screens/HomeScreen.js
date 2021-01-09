import React, { useContext } from 'react';
import { AuthContext } from '../navigation/AuthProvider'
import { View, Text, StyleSheet, Image } from 'react-native';
//import FormButton from '../src/components/FormButton';
import { Container } from '../styles/HomeStyles';
import Home from './Home';
import Mission from '../src/components/HealthUI/mission'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();

// const { user, logout } = useContext(AuthContext)
export default class HomeScreen extends React.Component {


    static contextType = AuthContext
    render() {  
        const { user, logout } = this.context
        
        return (
            
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} userId={user.uid} options={{
                        headerTransparent: true,
                        headerLeft: () => (
                            <Image source={require('../assets/drawericon.png')} style={{}} />
                        ),
                        title: '',
                        headerRight: () => (
                            <Image source={require('../assets/user.png')} style={{ marginHorizontal: 20, marginTop: 40 }} />
                        )
                    }} />
                    <Stack.Screen name="Mission" component={Mission} options={{
                        headerTransparent: true,
                        headerLeft: () => (
                            <Image source={require('../assets/blackmenu.png')} style={{ marginHorizontal: 20, marginTop: 40 }} />
                        ),
                        title: '',
                        headerRight: () => (
                            <Image source={require('../assets/user.png')} style={{ marginHorizontal: 35, marginTop: 45 }} />
                        )
                    }} />
                </Stack.Navigator>
           

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
