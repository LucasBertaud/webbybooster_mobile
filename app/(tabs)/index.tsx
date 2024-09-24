import React from "react";
import { Text, View } from "react-native";
import Timer from "../../components/Timer";

const YourApp = () => {
    return (
        <View>
            <Text style={{fontSize: 24, color: "white"}}>Try editing me! 🎉</Text>
            <Timer />
        </View>
    ); 
};

export default YourApp;