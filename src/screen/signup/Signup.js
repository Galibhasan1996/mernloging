import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import CommonInput from '../../../component/CustomInput/CommonInput'
import { Colors_Name } from '../../../util/color/Color'
import CommonButton from '../../../component/CommonButton/CommonButton'
import { signup } from '../../../BackendURL/URL'



const Signup = ({ navigation }) => {

    const [fdata, setfdata] = useState({
        name: "",
        email: "",
        dateofbirth: "",
        password: "",
        confirmpassword: "",
        address: ""
    })

    const [errormsg, seterrormsg] = useState('')

    const [Focusname, setFocusname] = useState(false)
    const [FocusEmail, setFocusEmail] = useState(false)
    const [Focusdateofbirth, setFocusdateofbirth] = useState(false)
    const [FocusPassword, setFocusPassword] = useState(false)
    const [FocusconfirmPassword, setFocusconfirmPassword] = useState(false)
    const [Focusaddress, setFocusaddress] = useState(false)

    const [secureTextEntry, setsecureTextEntry] = useState(true)
    const [secureTextEntry1, setsecureTextEntry1] = useState(true)


    const sendToBackend = () => {
        if (
            fdata.name === ""
            && fdata.email === ""
            && fdata.dateofbirth === ""
            && fdata.password === ""
            && fdata.confirmpassword === ""
            && fdata.address === ""
        ) {
            seterrormsg("All fields are required")
            return
        }
        else if (fdata.password !== fdata.confirmpassword) {
            seterrormsg("Password and Confirm Password must be the same")
            return

        }
        else if (fdata.password.length <= 6) {
            seterrormsg("Password must be at least 7")
            return

        }
        else {
            fetch(signup, {
                method: 'POST',
                'content-type': 'application/json',
            })
        }
    }







    return (
        <View style={styles.container}>
            <View style={styles.inside_container}>
                {/* Error message show  */}
                {
                    errormsg === "" ? null
                        :
                        <View style={styles.err_meessage_container}>
                            <Text style={styles.err_message}>{errormsg}</Text>
                        </View>

                }

                <Text style={styles.login_heador}>Create a new Account</Text>

                <View style={{ flexDirection: "row", alignSelf: "center", alignItems: 'center', marginBottom: 5, }}>
                    <View>
                        <Text style={styles.login_bottom_text}>Already Registered</Text>
                    </View>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Login')
                    }}>
                        <Text style={{ marginLeft: 5, color: Colors_Name.red }}>Login here</Text>
                    </TouchableOpacity>
                </View>


                <ScrollView>
                    <CommonInput
                        placeholder={'Enter your name'}
                        leftIcon={Focusname == true ? require('../../image/profilefilltint.png') : require('../../image/profile.png')}
                        onChangeText={(t) => { setfdata({ ...fdata, name: t }) }}
                        onFocus={() => {
                            setFocusname(true)
                            setFocusEmail(false);
                            setFocusdateofbirth(false)
                            setFocusPassword(false)
                            setFocusconfirmPassword(false)
                            setFocusaddress(false)
                            seterrormsg('')

                        }}
                        inputName={'Name'}
                    />

                    <CommonInput
                        placeholder={'Enter your email'}
                        leftIcon={FocusEmail == true ? require('../../image/emailtint.png') : require('../../image/email.png')}
                        onChangeText={(t) => { setfdata({ ...fdata, email: t }) }}
                        onFocus={() => {
                            setFocusname(false)
                            setFocusEmail(true);
                            setFocusdateofbirth(false)
                            setFocusPassword(false)
                            setFocusconfirmPassword(false)
                            setFocusaddress(false)
                            seterrormsg('')

                        }}
                        inputName={'Email'}
                    />

                    <CommonInput
                        placeholder={'Enter your date of birth'}
                        keyboardType={'number-pad'}
                        leftIcon={Focusdateofbirth == true ? require('../../image/dobfill.png') : require('../../image/dobb.png')}
                        onChangeText={(t) => { setfdata({ ...fdata, dateofbirth: t }) }}
                        onFocus={() => {
                            setFocusname(false)
                            setFocusEmail(false);
                            setFocusdateofbirth(true)
                            setFocusPassword(false)
                            setFocusconfirmPassword(false)
                            setFocusaddress(false)
                            seterrormsg('')

                        }}
                        inputName={'DOB'}
                    />

                    <CommonInput
                        placeholder={'Enter your password'}
                        keyboardType={'number-pad'}
                        leftIcon={FocusPassword == true ? require('../../image/passtint.png') : require('../../image/pass.png')}
                        rightIcon={secureTextEntry == true ? require('../../image/openeye.png') : require('../../image/closeeye.png')}
                        rightIconClick={() => { setsecureTextEntry(!secureTextEntry) }}
                        onChangeText={(t) => { setfdata({ ...fdata, password: t }) }}
                        onFocus={() => {
                            setFocusname(false)
                            setFocusEmail(false);
                            setFocusdateofbirth(false)
                            setFocusPassword(true)
                            setFocusconfirmPassword(false)
                            setFocusaddress(false)
                            seterrormsg('')

                        }}
                        secureTextEntry={secureTextEntry}
                        inputName={'Password'}
                    />

                    <CommonInput
                        placeholder={'Enter your confirm password'}
                        keyboardType={'number-pad'}
                        leftIcon={FocusconfirmPassword == true ? require('../../image/passtint.png') : require('../../image/pass.png')}
                        rightIcon={secureTextEntry1 == true ? require('../../image/show.png') : require('../../image/hide.png')}
                        rightIconClick={() => { setsecureTextEntry1(!secureTextEntry1) }}
                        onChangeText={(t) => { setfdata({ ...fdata, confirmpassword: t }) }}
                        onFocus={() => {
                            setFocusname(false)
                            setFocusEmail(false);
                            setFocusdateofbirth(false)
                            setFocusPassword(false)
                            setFocusconfirmPassword(true)
                            setFocusaddress(false)
                            seterrormsg('')

                        }}
                        secureTextEntry={secureTextEntry1}
                        inputName={'Confirm Password'}
                    />

                    <CommonInput
                        placeholder={'Enter your address'}
                        onChangeText={(t) => { setfdata({ ...fdata, address: t }) }}
                        inputName={'Address'}
                        leftIcon={Focusaddress == true ? require('../../image/addressfill.png') : require('../../image/address.png')}
                        onFocus={() => {
                            setFocusname(false)
                            setFocusEmail(false);
                            setFocusdateofbirth(false)
                            setFocusPassword(false)
                            setFocusconfirmPassword(false)
                            setFocusaddress(true)
                            seterrormsg('')

                        }}
                        multiline={true}
                    />


                    <CommonButton title={'Signup'}
                        onClick={() => { sendToBackend() }}
                    />
                </ScrollView>




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
    },
    err_meessage_container: {
        width: '95%',
        backgroundColor: Colors_Name.red,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        elevation: 5,
    },
    err_message: {
        color: Colors_Name.white,
        paddingVertical: 10,
        textTransform: "uppercase",
        fontWeight: "900"
    }
})





