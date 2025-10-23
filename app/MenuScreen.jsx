import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function MenuScreen() {
    const router = useRouter();
    const coffees = [
        { id: 1, name: "Cappuccino", price: 2, image: require('../assets/coffe1.png') },
        { id: 2, name: "Brew coffee", price: 3, image: require('../assets/noircoffe.png') },
        { id: 3, name: "Coffee Mocha", price: 4, image: require('../assets/glass.png') },
        { id: 4, name: "Frappuccino", price: 4.1, image: require('../assets/icecoffe.png') },
        { id: 5, name: "Macchiato", price: 5, image: require('../assets/cupcoffe.png') },
        { id: 6, name: "Ice latte", price: 5.5, image: require('../assets/caramel.png') },
    ];

    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay} />

            <View style={styles.container}>
                <Text style={styles.title}>
                    A good day starts with a good coffee. Ready to make your perfect cup?
                </Text>

                <FlatList
                    data={coffees}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image source={item.image} style={styles.image} />
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>{item.price.toFixed(2)}$</Text>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Order</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    contentContainerStyle={styles.listContent}
                />
            </View>

            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Text style={styles.backButtonText}>Back to Home</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    row: {
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(248, 243, 239, 0.85)',
    },
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
        color: '#333',
    },
    listContent: {
        paddingBottom: 100,
    },
    card: {
        flex: 1,
        margin: 8,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        maxWidth: '45%'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 8,
        borderRadius: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
        color: '#333',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8B4513',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#8B4513',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
    },
    backButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: '#333',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    backButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});