import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Colors_Name } from '../../util/color/Color'



const CommonInput = ({ placeholder, keyboardType, leftIcon, rightIcon, rightIconClick, onChangeText, onFocus, secureTextEntry, inputName, multiline, value, onPressIn }) => {
    return (

        <View>
            <View>
                <Text style={styles.input_name}>{inputName}</Text>
            </View>
            <View style={styles.container}>

                <View style={styles.image_contianer}>
                    <View>
                        {
                            leftIcon && <Image source={leftIcon} style={styles.pass_image} />
                        }
                    </View>

                    <TextInput placeholder={placeholder}
                        style={styles.main_input}
                        keyboardType={keyboardType}
                        onChangeText={onChangeText}
                        onFocus={onFocus}
                        secureTextEntry={secureTextEntry}
                        multiline={multiline}
                        value={value}
                        onPressIn={onPressIn}
                    />
                    {
                        rightIcon &&
                        <TouchableOpacity onPress={() => {
                            rightIconClick()
                        }}>
                            <Image source={rightIcon} style={styles.right_image} />
                        </TouchableOpacity>
                    }
                </View>

            </View>
        </View>

    )
}

export default CommonInput

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        marginTop: 5,
        backgroundColor: Colors_Name.lightred
    },
    main_input: {
        width: '78%',
        // backgroundColor: "red",
        paddingHorizontal: 15
    },
    image_contianer: {
        flexDirection: "row",
        alignItems: 'center',
    },
    pass_image: {
        width: 24,
        height: 24,
        marginLeft: 10,
    },
    right_image: {
        width: 24,
        height: 24,
    },
    input_name: {
        color: Colors_Name.black,
        marginLeft: 10,
    }
})