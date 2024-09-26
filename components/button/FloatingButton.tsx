import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const FloatingButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ba856f',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 30,
        right: 30,
        elevation: 8, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
    },
});

export default FloatingButton;