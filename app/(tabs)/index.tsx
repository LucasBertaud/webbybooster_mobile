import Organization from "@/components/cards/OrganizationCard";
import TaskTracking from "@/components/cards/TaskTrackingCard";
import React from "react";
<<<<<<< HEAD

const image = {uri: 'https://blog.openclassrooms.com/wp-content/uploads/2018/05/OC.png'};

const YourApp = () => {
    return (
      <>
        <Organization imageSrc="https://blog.openclassrooms.com/wp-content/uploads/2018/05/OC.png" title="Open Classrooms"></Organization>
        <Organization imageSrc="https://s3-eu-west-1.amazonaws.com/assets.atout-on-line.com/images/ingenieur/Logos_Ecoles/2022_2025/cesi-300.jpg" title="CESI"></Organization>
        <TaskTracking></TaskTracking>
      </>
=======
import { Text, View } from "react-native";
import Timer from "../../components/Timer";

const YourApp = () => {
    return (
        <View>
            <Text style={{fontSize: 24, color: "white"}}>Try editing me! 🎉</Text>
            <Timer />
        </View>
>>>>>>> a889b4c82bedccc0627e54838bf5c32dc8526335
    ); 
};

export default YourApp;