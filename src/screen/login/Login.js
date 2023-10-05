import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import CommonInput from '../../../component/CustomInput/CommonInput'
import { Colors_Name } from '../../../util/color/Color'
import CommonButton from '../../../component/CommonButton/CommonButton'

const Login = ({ navigation }) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [FocusEmail, setFocusEmail] = useState(false)
    const [FocusPassword, setFocusPassword] = useState(false)
    const [secureTextEntry, setsecureTextEntry] = useState(true)

    return (
        <View style={styles.container}>
            <View style={styles.inside_container}>
                <Text style={styles.login_heador}>Login</Text>
                <Text style={styles.login_bottom_text}>Sign in to continue</Text>

                <CommonInput
                    placeholder={'Enter your email'}
                    leftIcon={FocusEmail == true ? require('../../image/emailtint.png') : require('../../image/email.png')}
                    onChangeText={(t) => { setemail(t) }}
                    onFocus={() => {
                        setFocusEmail(true);
                        setFocusPassword(false)
                    }}
                    inputName={'Email'}
                />

                <CommonInput
                    placeholder={'Enter your password'}
                    keyboardType={'number-pad'}
                    leftIcon={FocusPassword == true ? require('../../image/passtint.png') : require('../../image/pass.png')}
                    rightIcon={secureTextEntry == true ? require('../../image/show.png') : require('../../image/hide.png')}
                    rightIconClick={() => { setsecureTextEntry(!secureTextEntry) }}
                    onChangeText={(t) => { setpassword(t) }}
                    onFocus={() => {
                        setFocusEmail(false);
                        setFocusPassword(true)
                    }}
                    secureTextEntry={secureTextEntry}
                    inputName={'Password'}
                />
                <TouchableOpacity style={styles.forgot_password_container} onPress={() => {
                    navigation.navigate('Forgot')
                }}>
                    <Text style={styles.forgot_password}>Forgot Password</Text>
                </TouchableOpacity>

                <CommonButton title={'Log in'}
                    onClick={() => { Alert.alert('Clicked') }}
                />

                <View style={styles.new_account_container}>
                    <View>
                        <Text>Don't have an account</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Signup')
                    }}>
                        <Text style={styles.new}>Create a new account</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1
    },
    inside_container: {
        width: '95%',
        height: "80%",
        backgroundColor: Colors_Name.white,
        alignSelf: 'center',
        borderTopLeftRadius: 20,
        bottom: 0,
        borderTopRightRadius: 20,
        position: "absolute",
    },
    login_heador: {
        fontSize: 20,
        alignSelf: 'center',
        color: Colors_Name.black,
        fontWeight: "900",
        marginTop: 20,
    },
    login_bottom_text: {
        alignSelf: 'center',
    },
    forgot_password: {
        color: Colors_Name.red
    }
    , forgot_password_container: {
        // backgroundColor: 'red',
        alignItems: 'flex-end',
        paddingHorizontal: 10
    },
    new_account_container: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 10,
        alignSelf: 'center',
    },
    new: {
        color: Colors_Name.red,
        marginLeft: 10,
    }
})