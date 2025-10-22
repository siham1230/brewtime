import { Text, View, ImageBackground, StyleSheet } from "react-native";
export default function Index() {
    return (
        <ImageBackground
            source={require("../assets/brown.jpeg")}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.text}>Welcome abdelmajid and siham to BrewTime!</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
});