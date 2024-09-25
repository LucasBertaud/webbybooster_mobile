import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const WhoAmI = () => {
    const openLink = (url: string) => {
        Linking.openURL(url);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Qui suis-je</Text>
            <Image
                source={{ uri: 'https://img.freepik.com/photos-gratuite/portrait-personne-noire-americaine-bouleversee_23-2148749581.jpg' }}
                style={styles.photo}
            />
            <Text style={styles.name}>Your Name</Text>
            <Text style={styles.profession}>Your Profession</Text>
            <TouchableOpacity onPress={() => openLink('https://yourwebsite.com')}>
                <Text style={styles.link}>https://yourwebsite.com</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('mailto:your-email@example.com')}>
                <Text style={styles.link}>your-email@example.com</Text>
            </TouchableOpacity>
            <View style={styles.socialMediaContainer}>
                <TouchableOpacity onPress={() => openLink('https://facebook.com/yourprofile')}>
                    <Icon name="logo-facebook" size={24} color="#4a3228" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openLink('https://twitter.com/yourprofile')}>
                    <Icon name="logo-twitter" size={24} color="#4a3228" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openLink('https://linkedin.com/in/yourprofile')}>
                    <Icon name="logo-linkedin" size={24} color="#4a3228" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ba856f',
        backgroundColor: '#4a3228',
        padding: 10,
        textAlign: 'center',
        borderRadius: 5,
        marginBottom: 20,
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    profession: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 20,
    },
    link: {
        fontSize: 16,
        color: '#ba856f',
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
    socialMediaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
        marginTop: 20,
    },
});

export default WhoAmI;