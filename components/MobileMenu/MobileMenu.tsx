import BtnMobile from "@/components/MobileMenu/BtnMobile";
import {View} from "react-native";
import {useState} from "react";

export default function MobileMenu() {
    const [isActive, setIsActive] = useState(true);

    return (
        <View style={{
            paddingTop: 80,
            paddingBottom: 12,
            paddingEnd: 24,
            display: "flex",
            alignItems: "flex-end",
        }}>
            <BtnMobile isActive={isActive}
                       setIsActive={setIsActive}/>
        </View>
    );
}