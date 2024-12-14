import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Started = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/bg.jpeg')} // Ganti dengan path gambar yang sesuai
                style={styles.backgroundImage}
            />
            <View style={styles.textContainer}>
                <Text style={styles.greetingText}>Welcome to Snappmeal</Text>
                <Text style={styles.subText}>We have the best food for you</Text>
                <Text style={styles.subText}>Let's explore and order</Text>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Gaya untuk komponen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: 'cover', // Mengubah menjadi 'cover' agar gambar memenuhi layar
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Memastikan teks dan tombol berada di bawah
        alignItems: 'center',
        marginBottom: 50, // Memberikan jarak dari bawah
    },
    greetingText: {
        color: '#FFFFFF',
        fontSize: 26,
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginBottom: 0, // Mengurangi jarak bawah untuk mendekatkan dua paragraf
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#EEAB81', // Warna tombol
        padding: 8,
        borderRadius: 5,
        marginTop: 35,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Started;
