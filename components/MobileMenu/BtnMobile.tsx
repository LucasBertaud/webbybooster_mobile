import {TouchableWithoutFeedback, View} from "react-native";
import React from "react";

export default function BtnMobile({isActive, setIsActive}: {
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const styleHamburgerDefault = {
        width: 32,
        height: 4,
        borderRadius: 12,
        backgroundColor: "black",
    };

    const styleHamburgerActive = {
        width: 32,
        height: 4,
        borderRadius: 12,
        backgroundColor: "black",
    };


    return (
        <TouchableWithoutFeedback onPress={() => setIsActive(!isActive)}>
            <View>
                {isActive &&
                    <>
                        <View style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                            height: 32,
                        }}>
                            <View style={styleHamburgerDefault}></View>
                            <View style={styleHamburgerDefault}></View>
                            <View style={styleHamburgerDefault}></View>
                        </View>
                    </>
                }
                {!isActive &&
                    <>
                        <View style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                            height: 32,
                        }}>
                            <View style={styleHamburgerActive}></View>
                            <View style={styleHamburgerActive}></View>
                        </View>
                    </>
                }
            </View>
        </TouchableWithoutFeedback>
    );
}