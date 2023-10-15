import React from 'react';
import { Modal, StyleSheet, ActivityIndicator, View, TouchableOpacity } from 'react-native';
import { Colors_Name } from '../../util/color/Color';

const CustomModel = ({ indicator, setindicator }) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={indicator}>

                <View style={styles.centeredView}>
                    <TouchableOpacity style={styles.modalView} onPress={() => {
                        setindicator(!indicator)
                    }}>
                        <ActivityIndicator size={'large'} color={Colors_Name.black}></ActivityIndicator>
                    </TouchableOpacity>
                </View>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: Colors_Name.white,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default CustomModel;