import {Alert, TouchableWithoutFeedback, View} from "react-native";

export default function BtnMobile() {
    const style = {
        width: 32,
        height: 4,
        borderRadius: 12,
        backgroundColor: "black",
    };

    const handleClick = () => {
        Alert.alert("View clicked!");
    };

    return (
        <>
            <TouchableWithoutFeedback onPress={handleClick}>
                <View style={{display: "flex", flexDirection: "column", gap: 6}}>
                    <View style={style}></View>
                    <View style={style}></View>
                    <View style={style}></View>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
} 