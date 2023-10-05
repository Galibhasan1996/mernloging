import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import CommonInput from '../../../component/CustomInput/CommonInput'
import { Colors_Name } from '../../../util/color/Color'
import CommonButton from '../../../component/CommonButton/CommonButton'

const Signup = ({ navigation }) => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [dateofbirth, setdateofbirth] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')

    const [Focusname, setFocusname] = useState(false)
    const [FocusEmail, setFocusEmail] = useState(false)
    const [Focusdateofbirth, setFocusdateofbirth] = useState(false)
    const [FocusPassword, setFocusPassword] = useState(false)
    const [FocusconfirmPassword, setFocusconfirmPassword] = useState(false)
    const [secureTextEntry, setsecureTextEntry] = useState(true)
    const [secureTextEntry1, setsecureTextEntry1] = useState(true)

    return (
        <View style={styles.container}>
            <View style={styles.inside_container}>
                <Text style={styles.login_heador}>Create a new Account</Text>

                <View style={{ flexDirection: "row", alignSelf: "center", alignItems: 'center', }}>
                    <View>
                        <Text style={styles.login_bottom_text}>Already Registered</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Login')
                    }}>
                        <Text style={{ marginLeft: 5, color: Colors_Name.red }}>Login here</Text>
                    </TouchableOpacity>
                </View>



                <CommonInput
                    placeholder={'Enter your name'}
                    leftIcon={Focusname == true ? require('../../image/profilefilltint.png') : require('../../image/profile.png')}
                    onChangeText={(t) => { setname(t) }}
                    onFocus={() => {
                        setFocusname(true)
                        setFocusEmail(false);
                        setFocusdateofbirth(false)
                        setFocusPassword(false)
                        setFocusconfirmPassword(false)
                    }}
                    inputName={'Name'}
                />

                <CommonInput
                    placeholder={'Enter your email'}
                    leftIcon={FocusEmail == true ? require('../../image/emailtint.png') : require('../../image/email.png')}
                    onChangeText={(t) => { setemail(t) }}
                    onFocus={() => {
                        setFocusname(false)
                        setFocusEmail(true);
                        setFocusdateofbirth(false)
                        setFocusPassword(false)
                        setFocusconfirmPassword(false)
                    }}
                    inputName={'Email'}
                />

                <CommonInput
                    placeholder={'Enter your date of birth'}
                    keyboardType={'number-pad'}
                    leftIcon={Focusdateofbirth == true ? require('../../image/dobfill.png') : require('../../image/dobb.png')}
                    onChangeText={(t) => { setdateofbirth(t) }}
                    onFocus={() => {
                        setFocusname(false)
                        setFocusEmail(false);
                        setFocusdateofbirth(true)
                        setFocusPassword(false)
                        setFocusconfirmPassword(false)
                    }}
                    inputName={'DOB'}
                />

                <CommonInput
                    placeholder={'Enter your password'}
                    keyboardType={'number-pad'}
                    leftIcon={FocusPassword == true ? require('../../image/passtint.png') : require('../../image/pass.png')}
                    rightIcon={secureTextEntry == true ? require('../../image/show.png') : require('../../image/hide.png')}
                    rightIconClick={() => { setsecureTextEntry(!secureTextEntry) }}
                    onChangeText={(t) => { setpassword(t) }}
                    onFocus={() => {
                        setFocusname(false)
                        setFocusEmail(false);
                        setFocusdateofbirth(false)
                        setFocusPassword(true)
                        setFocusconfirmPassword(false)
                    }}
                    secureTextEntry={secureTextEntry}
                    inputName={'Password'}
                />

                <CommonInput
                    placeholder={'Enter your password'}
                    keyboardType={'number-pad'}
                    leftIcon={FocusconfirmPassword == true ? require('../../image/passtint.png') : require('../../image/pass.png')}
                    rightIcon={secureTextEntry1 == true ? require('../../image/show.png') : require('../../image/hide.png')}
                    rightIconClick={() => { setsecureTextEntry1(!secureTextEntry1) }}
                    onChangeText={(t) => { setconfirmpassword(t) }}
                    onFocus={() => {
                        setFocusname(false)
                        setFocusEmail(false);
                        setFocusdateofbirth(false)
                        setFocusPassword(false)
                        setFocusconfirmPassword(true)
                    }}
                    secureTextEntry={secureTextEntry1}
                    inputName={'Confirm Password'}
                />


                <CommonButton title={'Signup'}
                    onClick={() => { Alert.alert('Clicked') }}
                />


            </View>

        </View>
    )
}

export default Signup

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





