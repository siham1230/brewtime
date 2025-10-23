import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useFonts, Kalam_400Regular } from '@expo-google-fonts/kalam';
import { Agbalumo_400Regular } from '@expo-google-fonts/agbalumo';

export default function Index() {

  const [message, setMessage] = useState('');
  const router = useRouter();


  const [fontsLoaded] = useFonts({
    Kalam_400Regular,
    Agbalumo_400Regular
  });



  useEffect(() => {
    const messages = [
      'find your favorite coffee ☕',
      'Découvrez nos délicieux cafés ☕🍪',
      'Profitez d’un moment de détente 🌿',
      'Touchez “Voir le menu” pour commencer 📖',
    ];
    let i = 0;

    const interval = setInterval(() => {
      i = (i + 1) % messages.length;
      setMessage(messages[i]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!fontsLoaded) return null;


  return (
    <ImageBackground
      source={require("../assets/brown.jpeg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/cup-coffee.png")}
          style={styles.cup}
        />

        <Text style={[styles.text, { fontFamily: 'Kalam_400Regular' }]}>
          Welcome to BrewTime!
        </Text>
        <Text style={[styles.message, { fontFamily: 'Agbalumo_400Regular' }]}>
          {message}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/test")}
        >
          <Text style={styles.buttonText}> Coffes Menu ☕</Text>
        </TouchableOpacity>
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
    padding: 20,
  },
  cup: {
    width: 120,
    height: 120,
    marginBottom: 10,
    marginTop: -420,
  },
  text: {
    color: "white",
    fontSize: 24,
    marginBottom: 30,
    bottom: 440,
    position: "absolute",
    alignSelf: "center",
  },
  message: {
    color: "orange",
    fontSize: 16,
    position: "absolute",
    bottom: 400,
    alignSelf: "center",
    fontFamily: 'Agbalumo_400Regular',
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    position: "absolute",
    bottom: 70,
    alignSelf: "center",
    borderWidth: 3,
    borderColor: "#000000ff",
  },
  buttonText: {
    color: "#000000ff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
