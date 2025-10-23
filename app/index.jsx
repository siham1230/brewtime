// import { router } from "expo-router";
import { useRouter } from "expo-router";
import { Text, View, ImageBackground, StyleSheet, Pressable } from "react-native";
export default function Index() {
    const router = useRouter();
    return (


        <ImageBackground
            source={require("../assets/brown.jpeg")}
            style={styles.background}
        >
            <View style={styles.container}>

                <Pressable
                    onPress={() => router.push("/MenuScreen")}
                    style={styles.button} >
                    <Text style={styles.text}>Welcome abdelmajid and siham to BrewTime!</Text>
                </Pressable>

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