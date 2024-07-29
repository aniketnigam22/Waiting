import { StyleSheet } from "react-native";

export const Mystyle = StyleSheet.create({
    placeHolder_text: {
        fontSize: 14,
        fontWeight: "500",
        color: 'grey',
        paddingVertical: 2,
    },
    select_box: {
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: "#B8B8D2",
        borderRadius: 10,
        width: null,
    },
    row: {
        flex: 1,
        flexDirection: "row",
    },
    header: {
        flex: 1,
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },

})