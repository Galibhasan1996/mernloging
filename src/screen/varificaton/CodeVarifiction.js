import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import CommonInput from '../../../component/CustomInput/CommonInput'
import { Colors_Name } from '../../../util/color/Color'
import CommonButton from '../../../component/CommonButton/CommonButton'
import { signup } from '../../../BackendURL/URL'



const CodeVarifiction = ({ navigation, route }) => {
    const { userdata } = route.params
    const code = userdata[0]?.VarificationCode

    const [password, setpassword] = useState('')

    const [errormsg, seterrormsg] = useState('')

    const [FocusPassword, setFocusPassword] = useState(false)


    const Login_to_by_backend = () => {
        if (password == '') {
            seterrormsg('enter verification code')
            return
        }
        else if (password != code) {
            seterrormsg('your verification code incorrect')
        }


        else {
            const fdata = {
                name: userdata[0]?.name,
                email: userdata[0]?.email,
                dob: userdata[0]?.dob,
                password: userdata[0]?.password,
                confirmpassword: userdata[0]?.confirmpassword,
                address: userdata[0]?.address,
            }
            fetch(signup, {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(fdata)
            })
                .then((response) => { response.json() })
                .then((data) => {
                    if (data.Message == "user saved successfully") {
                        Alert.alert(data.Message)
                        setpassword('')
                        navigation.navigate('Home')
                    }
                })
                .catch((err) => {
                    console.log(err);
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

                <Text style={styles.login_heador}>Verification</Text>
                <Text style={styles.login_bottom_text}>A code has been send on your email</Text>



                <CommonInput
                    placeholder={'Enter your code'}
                    keyboardType={'number-pad'}
                    leftIcon={FocusPassword == true ? require('../../image/passtint.png') : require('../../image/pass.png')}
                    onChangeText={(t) => { setpassword(t) }}
                    onFocus={() => {
                        setFocusPassword(true)
                    }}
                    inputName={'verification code'}
                    value={password}
                    onPressIn={() => {
                        seterrormsg("")
                    }}
                />

                <CommonButton title={'Create Account'}
                    onClick={() => { Login_to_by_backend() }}
                />

            </View>

        </View>
    )
}

export default CodeVarifiction

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

