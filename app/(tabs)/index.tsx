import Organization from "@/components/cards/OrganizationCard";
import TaskTracking from "@/components/cards/TaskTrackingCard";
import React from "react";
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
};
export default YourApp;