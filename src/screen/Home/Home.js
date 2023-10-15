import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import CommonButton from '../../../component/CommonButton/CommonButton'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CommonButton
                title={'Log Out'}
                onClick={() => {
                    navigation.navigate("Login")
                }}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    }
})