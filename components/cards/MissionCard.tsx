import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Card from "./Card";
import {SheetManager} from "react-native-actions-sheet";
import {MissionMock} from "@/mock/mission_mock";
import Mission from "@/entities/mission";

const styles = StyleSheet.create({
    footer: {marginVertical: 8},
    date: {fontSize: 12, color: "grey"},
});

function MissionCard({id}: { id: number }) {
    const mission: Mission | undefined = MissionMock.find((taskTracking: any) => taskTracking.id === id);

    if (!mission) return null;

    return (
        <Card action={() => SheetManager.show("mission-drawer",
            {
                payload: {
                    mission: mission,
                },
            })}>
            <Card.Header title={mission.getTitle()}></Card.Header>
            <Card.Body>
                <View>
                    <Text>{mission.getSchool()}</Text>
                </View>
            </Card.Body>
            <Card.Footer style={styles.footer}>
                <Text style={styles.date}>{mission.getDate()}</Text>
            </Card.Footer>
        </Card>
    );
}

export default MissionCard;