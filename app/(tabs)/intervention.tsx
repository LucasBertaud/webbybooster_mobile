import {View} from "react-native";
import AgendaScreen from "@/components/AgendaScreen";
import FloatingButton from "@/components/button/FloatingButton";
import TitlePage from "@/components/titles/TitlePage";

export default function InterventionPage() {
    return (
        <View style={{flex: 1, width: '100%'}}>
        <TitlePage title="Interventions"/>
            <AgendaScreen/>
            <FloatingButton onPress={() => {console.log('pressed')}}/>
        </View>
    );
}