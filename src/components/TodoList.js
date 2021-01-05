import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';
import Colors from '../../styles/Colors';

export default function TodoList({ list }) {

    const completedCount =  list.todos.filter(todo => todo.completed).length;
    const remainingCount = list.todos.length - completedCount

    return (
        <View style={[styles.listContainer, {backgroundColor: list.color}]}>
            <Text style={styles.listTitle} numberOfLines={1}>{list.name}</Text>

        <View>
            <View style={{alignItems: "center"}}>
                <Text style={styles.completed}>{remainingCount}</Text>
                <Text style={styles.remaining}>Remaining</Text>
            </View>
            <View style={{alignItems: "center"}}>
                <Text style={styles.completed}>{completedCount}</Text>
                <Text style={styles.remaining}>Completed</Text>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "cente",
        width: 200
    },
    listTitle: {
        fontSize: 24,
        fontWeight: 700,
        color: Colors.white,
        marginBottom: 18
    },
    count: {
        fontSize: 48,
        fontWeight: "200",
        color: Colors.white
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "700",
        color: Colors.white
    }
})