import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, {useEffect} from "react";
import "react-native-reanimated";
import {NavigationContainer} from "@react-navigation/native";
import YourApp from "@/app/(tabs)";
import TasksPage from "@/app/(tabs)/tasks";
import {createDrawerNavigator} from "@react-navigation/drawer";
import InterventionPage from "@/app/(tabs)/intervention";
import ContractsPage from "@/app/(tabs)/contracts";
import MonitoringPage from "@/app/(tabs)/monitoring";
import BillingPage from "@/app/(tabs)/billing";
import AssessmentPage from "@/app/(tabs)/assessment";
import OrganizationPage from "@/app/(tabs)/organization";
import IntermediaryPage from "@/app/(tabs)/intermediary";
import ContactPage from "@/app/(tabs)/contact";
import StockPage from "@/app/(tabs)/stock";
import DocumentsPage from "@/app/(tabs)/documents";
import ApplicationPage from "@/app/(tabs)/application";
import SitemapPage from "@/app/(tabs)/sitemap";

const Drawer = createDrawerNavigator();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="Accueil">
                <Drawer.Screen name="Accueil"
                               component={YourApp}/>
                <Drawer.Screen name="Tâches"
                               component={TasksPage}/>
                <Drawer.Screen name="Intervention"
                               component={InterventionPage}/>
                <Drawer.Screen name="Missions & Contrats"
                               component={ContractsPage}/>
                <Drawer.Screen name="Suivi CA"
                               component={MonitoringPage}/>
                <Drawer.Screen name="Facturation"
                               component={BillingPage}/>
                <Drawer.Screen name="BPF"
                               component={AssessmentPage}/>
                <Drawer.Screen name="Organisme de formation"
                               component={OrganizationPage}/>
                <Drawer.Screen name="Intermédiaire"
                               component={IntermediaryPage}/>
                <Drawer.Screen name="Contacts"
                               component={ContactPage}/>
                <Drawer.Screen name="Cours en stock"
                               component={StockPage}/>
                <Drawer.Screen name="Mes documents"
                               component={DocumentsPage}/>
                <Drawer.Screen name="Mes candidatures"
                               component={ApplicationPage}/>
                <Drawer.Screen name="Sitemap"
                               component={SitemapPage}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}