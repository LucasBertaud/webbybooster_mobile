import React, {Component} from "react";
import {Alert, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Agenda, AgendaEntry, AgendaSchedule, DateData} from "react-native-calendars";
import TestIDS from "@/constants/testIDS";

interface State {
    itemsAgenda?: AgendaSchedule;
}

export default class AgendaScreen extends Component<State> {
    state: State = {
        itemsAgenda: undefined,
    };

    render() {
        return (
            <View style={{flex: 1, width: "100%"}}>
                <Agenda
                    testID={TestIDS.agenda.CONTAINER}
                    items={this.state.itemsAgenda}
                    loadItemsForMonth={this.events}
                    selected={new Date().toISOString().split("T")[0]}
                    renderItem={this.renderItem}
                    renderEmptyDate={this.renderEmptyDate}
                    rowHasChanged={this.rowHasChanged}
                    showClosingKnob={true}
                    theme={{
                        dotColor: "#ba856f",
                        agendaDayTextColor: "#ba856f",
                        agendaDayNumColor: "#ba856f",
                        agendaTodayColor: "#ba856f",
                        agendaKnobColor: "#ba856f",
                        selectedDayBackgroundColor: "#ba856f",
                        todayTextColor: "#ba856f",
                    }}
                />
                <TouchableOpacity>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        );
    }

    events = (day: DateData) => {
        const items: AgendaSchedule = {};
        setTimeout(() => {

            items[new Date().toISOString().split("T")[0]] = [
                {
                    name: "Cours avec les M1 - Dev",
                    height: 75,
                    day: new Date().toString().split("GMT")[0].trimEnd().slice(0, -3),
                },
                {
                    name: "Cours avec les M2 - UX/UI",
                    height: 75,
                    day: (new Date().toString().split("GMT")[0]).trimEnd().slice(0, -3),
                },
            ];

            for (let i = -15; i < 85; i++) {

                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);

                if (!items[strTime]) {
                    items[strTime] = [];
                }
            }
            this.setState({itemsAgenda: items});
        }, 1000);
    };

    renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
        const fontSize = isFirst ? 20 : 14;
        const color = isFirst ? "red" : "black";

        return (
            <TouchableOpacity
                testID={TestIDS.agenda.ITEM}
                style={[styles.item, {height: reservation.height}]}
                onPress={() => Alert.alert(reservation.name)}
            >
                <Text style={{fontSize, color, paddingBottom: 5}}>{reservation.name}</Text>
                <Text style={{fontSize: 12, color: "grey", paddingTop: 5}}>{reservation.day}</Text>
            </TouchableOpacity>
        );
    };

    renderEmptyDate = () => {
        return (
            <View style={styles.emptyDate}>
                <Text>This is empty date!</Text>
            </View>
        );
    };

    rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
        return r1.name !== r2.name;
    };

    timeToString(time: number) {
        const date = new Date(time);
        return date.toISOString().split("T")[0];
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "white",
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30,
    },
});