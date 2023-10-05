import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Colors_Name } from '../../../util/color/Color'

const Splass = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors_Name.black} barStyle={"light-content"}></StatusBar>
            <Text style={styles.logo}>Welcome To App</Text>
            <View style={styles.button_container}>
                <TouchableOpacity style={styles.button_main_container} onPress={() => {
                    navigation.navigate('Login')
                }}>
                    <Text style={{ color: Colors_Name.white, fontWeight: "900" }}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_main_container} onPress={() => {
                    navigation.navigate('Signup')
                }}>
                    <Text style={{ color: Colors_Name.white, fontWeight: "900" }}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Splass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors_Name.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        color: Colors_Name.white,
        fontSize: 30,
        fontWeight: "900"
    },
    button_container: {
        flexDirection: "row",
        alignItems: 'center',
        width: '100%',
        // backgroundColor: Colors_Name.white,
        justifyContent: 'space-around',
        marginTop: 10,

    },
    button_main_container: {
        width: 120,
        height: 40,
        backgroundColor: "red",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 20,
    }
})