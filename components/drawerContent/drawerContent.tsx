import {ScrollView, Text, View} from "react-native";
import {DrawerItem} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import TitlePage from "@/components/titles/TitlePage";

// @ts-ignore
export default function DrawerContent({navigation}) {
    const defaultColor = "#ba856f";
    const activeColor = "#4a3228";

    const arrLink = [
        {
            label: "Accueil",
            icon: "home-outline",
        }, {
            label: "Tâches",
            icon: "checkbox-outline",
        }, {
            label: "Interventions",
            icon: "calendar-outline",
        }, {
            label: "Missions & Contrats",
            icon: "document-outline",
        }, {
            label: "Suivi CA",
            icon: "cash-outline",
        }, {
            label: "Facturation",
            icon: "wallet-outline",
        }, {
            label: "BPF",
            icon: "podium-outline",
        }, {
            label: "Organisme de formation",
            icon: "business-outline",
        }, {
            label: "Intermédiaire",
            icon: "paper-plane-outline",
        }, {
            label: "Contacts",
            icon: "people-outline",
        }, {
            label: "Cours en stock",
            icon: "cloud-outline",
        }, {
            label: "Mes documents",
            icon: "documents-outline",
        }, {
            label: "Mes candidatures",
            icon: "briefcase-outline",
        }, {
            label: "Sitemap",
            icon: "map-outline",
        },
    ];

    return (
        <View style={{paddingTop: 32}}>
            <TitlePage title="Menu"/>
            <ScrollView>
                {arrLink.map((link) =>
                    <DrawerItem
                        label={({focused}) =>
                            <Text style={focused ? {color: activeColor} : {color: defaultColor}}>{link.label}</Text>}
                        onPress={() => navigation.navigate(link.label)}
                        icon={({focused, size}) => (
                            <Icon name={link.icon}
                                  color={focused ? activeColor : defaultColor}
                                  size={size}/>
                        )}
                    />,
                )}
            </ScrollView>
        </View>
    );
}