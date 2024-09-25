import Organization from "@/components/cards/OrganizationCard";
import TaskTracking from "@/components/cards/TaskTrackingCard";
import React from "react";
<<<<<<< HEAD
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
=======
import Timer from "@/components/Timer";
import {Animated} from "react-native";
import ScrollView = Animated.ScrollView;

const image = {uri: "https://blog.openclassrooms.com/wp-content/uploads/2018/05/OC.png"};

const YourApp = () => {
    return (
        <>
            <ScrollView>
                <Organization imageSrc="https://blog.openclassrooms.com/wp-content/uploads/2018/05/OC.png"
                              title="Open Classrooms"></Organization>
                <Organization imageSrc="https://s3-eu-west-1.amazonaws.com/assets.atout-on-line.com/images/ingenieur/Logos_Ecoles/2022_2025/cesi-300.jpg"
                              title="CESI"></Organization>
                <TaskTracking></TaskTracking>
                <Timer/>
            </ScrollView>
        </>
    );
>>>>>>> e497993604ccc349ba046dc846fb6839de5702be
};
export default YourApp;