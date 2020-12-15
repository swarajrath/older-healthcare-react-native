import { View, Text, Style, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

export default class Screens extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <TouchableOpacity style={{ alignItems: "flex-end", margin: 16 }}
                        onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 name="bars" size="24" color="#161924" />
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text style={StyleSheet.text}>{this.props.name} Screen</Text>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fffff"
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    }
})