import React from "react";
import { Text, View } from "react-native";
import Timer from "../../components/Timer";
import Shortcuts from "../../components/Shortcuts";

const YourApp = () => {
    return (
        <View>
            <Text style={{fontSize: 24, color: "white"}}>Try editing me! 🎉</Text>
            <Timer />
            <Shortcuts />
        </View>
    ); 
};

export default YourApp;