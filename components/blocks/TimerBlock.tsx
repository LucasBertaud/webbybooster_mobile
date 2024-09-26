import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const TimerBlock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const day = time.toLocaleString('en-US', { weekday: 'long' }).toUpperCase();

    return (
        <View style={styles.container}>
            <View style={[styles.card]}>
                <Text style={styles.timeText}>{hours}</Text>
                <View style={styles.horizontalSeparator} />
            </View>
            <View style={[styles.card]}>
                <Text style={styles.timeText}>{minutes < 10 ? `0${minutes}` : minutes}</Text>
                <View style={styles.horizontalSeparator} />
                <Text style={styles.dayText}>{day}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    card: {
        backgroundColor: '#bca28b',
        margin: 5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 140,
        height: 220,
        position: 'relative',
    },
    horizontalSeparator: {
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: 'white',
    },
    timeText: {
        fontSize: 80,
        color: 'white',
        fontFamily: 'Bebas Neue, cursive',
        fontWeight: 'bold',
    },
    dayText: {
        fontSize: 15,
        color: 'white',
        position: 'absolute',
        fontFamily: 'Bebas Neue, cursive',
        fontWeight: 'bold',
        bottom: 10,
        right: 10,
    },
});

export default TimerBlock;