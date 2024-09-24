import Organization from "@/components/cards/OrganizationCard";
import TaskTracking from "@/components/cards/TaskTrackingCard";
import React from "react";

const image = {uri: 'https://blog.openclassrooms.com/wp-content/uploads/2018/05/OC.png'};

const YourApp = () => {
    return (
      <>
        <Organization imageSrc="https://blog.openclassrooms.com/wp-content/uploads/2018/05/OC.png" title="Open Classrooms"></Organization>
        <Organization imageSrc="https://s3-eu-west-1.amazonaws.com/assets.atout-on-line.com/images/ingenieur/Logos_Ecoles/2022_2025/cesi-300.jpg" title="CESI"></Organization>
        <TaskTracking></TaskTracking>
      </>
    ); 
};

export default YourApp;