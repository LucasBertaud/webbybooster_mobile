import BtnMobile from "@/components/MobileMenu/BtnMobile";
import {View} from "react-native";

export default function MobileMenu() {
    return (
        <View style={{
            paddingTop: 80,
            paddingBottom: 12,
            paddingEnd: 24,
            display: "flex",
            alignItems: "flex-end",
        }}>
            <BtnMobile/>
        </View>
    );
}