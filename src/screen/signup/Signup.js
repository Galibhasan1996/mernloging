import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import CommonInput from '../../../component/CustomInput/CommonInput'
import { Colors_Name } from '../../../util/color/Color'
import CommonButton from '../../../component/CommonButton/CommonButton'
import { signup, verify } from '../../../BackendURL/URL'
import CustomModel from '../../../component/modal/CustomModel'



const Signup = ({ navigation }) => {

    const [fdata, setfdata] = useState({
        name: "",
        email: "",
        dob: "",
        password: "",
        confirmpassword: "",
        address: ""
    })

    const [errormsg, seterrormsg] = useState('')
    const [indicator, setindicator] = useState(false)
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
        ) {
            seterrormsg("enter your name")
            return
        } else if (fdata.email === "") {
            seterrormsg("Enter your email")
            return
        }
        else if (fdata.dob === "") {
            seterrormsg("Enter your dob")
            return
        }
        else if (fdata.password === "") {
            seterrormsg("Enter your password")
            return
        }
        else if (fdata.confirmpassword === "") {
            seterrormsg("Enter your confirm password")
            return
        }
        else if (fdata.address === "") {
            seterrormsg("Enter your address")
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
            // console.log(fdata);
            setindicator(true)
            fetch(verify, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(fdata)
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    if (data.error) {
                        seterrormsg(data.error);
                    }
                    else if (data.message == "Verification Code Sent to your Email") {
                        // console.log(data.userdata);
                        Alert.alert(data.message)
                        resetFormData();
                        setindicator(false);
                        navigation.navigate('CodeVarifiction', { userdata: data.userdata })
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }


    const resetFormData = () => {
        setfdata({
            name: "",
            email: "",
            dob: "",
            password: "",
            confirmpassword: "",
            address: ""
        });
    };






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
                        value={fdata.name}
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
                        value={fdata.email}
                    />

                    <CommonInput
                        placeholder={'Enter your date of birth'}
                        keyboardType={'default'}
                        leftIcon={Focusdateofbirth == true ? require('../../image/dobfill.png') : require('../../image/dobb.png')}
                        onChangeText={(t) => { setfdata({ ...fdata, dob: t }) }}
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
                        value={fdata.dob}
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
                        value={fdata.password}
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
                        value={fdata.confirmpassword}
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
                        value={fdata.address}
                    />
                    <CustomModel indicator={indicator} setindicator={setindicator}></CustomModel>

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
    },
    indicator_container: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 200,

    }
})





