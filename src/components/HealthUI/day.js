import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const day = (props) => {
    return (
        <View style={styles.box1}>
                <View style={{borderRadius:10,padding:5,backgroundColor: props.active}}>
                    <Text style={{color:'#fff'}}>{props.dayname}</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    box1 : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }
})

export default day
