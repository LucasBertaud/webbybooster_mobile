import { StyleSheet } from "react-native";

export const Drawers = StyleSheet.create({
    hr: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgrey',
        marginVertical: 8,
    },
    h1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 16
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
    },
    row_key: {
        width: 120,
        textAlignVertical: 'top',
        height: '100%',
    },
    row_content: {
        flex: 1,
        textAlign: 'left',
    },
    container: {
        margin: 16,
        overflow: "hidden"
    },
    image: {
        minWidth: 60,
        height: "100%",
        resizeMode: 'contain',
        marginVertical: 16,
    },
    contact: {
        backgroundColor: 'lightblue',
        padding: 4,
        marginRight: 4,
        borderRadius: 4,
    },
  });