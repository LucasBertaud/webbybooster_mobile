import type {PropsWithChildren} from "react";
import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type AccordionItemPros = PropsWithChildren<{
    title: string;
    bgColor: string;
}>;

export default function AccordionItem({children, title, bgColor}: AccordionItemPros): JSX.Element {
    const [expanded, setExpanded] = useState(false);

    function toggleItem() {
        setExpanded(!expanded);
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        accordContainer: {
            paddingBottom: 4,
        },
        accordHeader: {
            padding: 12,
            backgroundColor: bgColor,
            color: "#eee",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        accordTitle: {
            fontSize: 20,
            color: "#fff",
        },
        accordBody: {
            padding: 12,
        },
        textSmall: {
            fontSize: 16,
        },
        seperator: {
            height: 12,
        },
    });

    const body = <View style={styles.accordBody}>{children}</View>;

    return (
        <View style={styles.accordContainer}>
            <TouchableOpacity style={styles.accordHeader}
                              onPress={toggleItem}>
                <Text style={styles.accordTitle}>{title}</Text>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 12}}>
                    <Text style={{fontSize: 16, color: "#fff"}}>1</Text>
                    <Icon name={expanded ? "chevron-up" : "chevron-down"}
                          size={16}
                          color="#fff"/>
                </View>
            </TouchableOpacity>
            {expanded && body}
        </View>
    );
}

