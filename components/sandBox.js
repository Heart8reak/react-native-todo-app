import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
 
export default function sandBox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingTop: 200,
        backgroundColor: '#333'
    },
    boxOne: {
        flex: 2,
        backgroundColor: 'violet',
        padding: 25
    },
    boxTwo: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 35
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'coral',
        padding: 45
    },
    boxFour: {
        flex: 3,
        backgroundColor: 'skyblue',
        padding: 55
    },
}) 