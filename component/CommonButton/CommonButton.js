import { StyleSheet, Text, TouchableOpacity, } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Colors_Name } from '../../util/color/Color'



const CommonButton = ({ title, onClick }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            onClick()
        }}>
            <Text style={styles.login_Button}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CommonButton

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: Colors_Name.red,
    },
    login_Button: {
        color: Colors_Name.white,
        fontWeight: '900',
        fontSize: 20
    }
})