import { StyleSheet, View } from "react-native"
import React from "react"

export const Bars = ({data}:any) => {
    return(
        <View>
            {data.map(({_, index}: any) => {
            return <View key={index.toString()}
            style={styles.bar}
            /> 
 } )}
        </View>
    )
}
const styles = StyleSheet.create({

    bar: {
        width: 10,
        height: 10,
        backgroundColor: 'gray',
        borderRadius: 5,
        margin: 5
    }
})