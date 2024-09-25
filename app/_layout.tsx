import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, {useEffect} from "react";
import "react-native-reanimated";
import {NavigationContainer} from "@react-navigation/native";
import YourApp from "@/app/(tabs)";
import TasksPage from "@/app/(tabs)/tasks";
import {createDrawerNavigator} from "@react-navigation/drawer";

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
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home"
                               component={YourApp}/>
                <Drawer.Screen name="Tasks"
                               component={TasksPage}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}