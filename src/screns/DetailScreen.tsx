import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, Text, Image, StyleSheet, ScrollView, View, TouchableOpacity, Alert } from 'react-native';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../cart/CartContext';

export default function DetailScreen({ route, navigation }) {
  const { category, images } = route.params;
  const { addToCart } = useContext(CartContext);

  const categoryPrices = {
    "Seafood": "$25.99",
    "Vegetarian": "$15.99",
    "Dessert": "$12.99",
    "Beef": "$30.99",
    "Chicken": "$20.99",
    "Pasta": "$18.99",
    "Pork": "$29.99",
    "Breakfast": "$10.99"
  };

  const filteredMeals = images.filter(meal => meal.strCategory === category);

  const handleOrderPress = (meal) => {
    const mealWithPrice = {
      ...meal,
      price: categoryPrices[category] || "$13.99"
    };
    addToCart(mealWithPrice);
    Alert.alert('Item has been added to the cart');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="chevron-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail</Text>
      </View>

      <ScrollView>
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal, index) => (
            <View key={index} style={styles.mealCard}>
              <Image source={{ uri: meal.strCategoryThumb }} style={styles.mealImage} />
              <Text style={styles.mealCategory}>{meal.strCategory}</Text>
              <View style={styles.ratingContainer}>
                <Rating
                  type='star'
                  ratingCount={1}
                  startingValue={1}
                  imageSize={20}
                  style={{ marginRight: 5 }}
                />
                <Text style={styles.ratingCount}>(5.0)</Text>
              </View>

              <Text style={styles.descriptionTitle}>Description:</Text>
              <Text style={styles.mealDescription}>{meal.strCategoryDescription}</Text>

              <View style={styles.priceAndButtonContainer}>
                <View style={styles.hargaContainer}>
                  <Text style={styles.priceText}>{categoryPrices[category] || "$13.99"}</Text>
                </View>
                <TouchableOpacity style={styles.orderButton} onPress={() => handleOrderPress(meal)}>
                  <Text style={styles.orderButtonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noMealsText}>Tidak ada makanan ditemukan dalam kategori ini.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEEEE5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mealCard: {
    marginBottom: 20,
  },
  mealImage: {
    width: 300,
    height: 200,
    borderRadius: 8,
    alignSelf: 'center',
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  mealCategory: {
    fontSize: 24,
    color: '#000',
    marginTop: 5,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingCount: {
    fontSize: 14,
    color: '#555',
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  mealDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  priceAndButtonContainer: {
    flexDirection: 'row', // Mengatur elemen dalam baris
    justifyContent: 'space-between', // Memberikan jarak antara total dan tombol
    alignItems: 'center', // Memastikan elemen berada di tengah secara vertikal
    marginTop: 20,
  },
  hargaContainer: {
    flex: 1, 
    alignItems: 'center', 
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  orderButton: {
    backgroundColor: '#EEAB81',
    padding: 15,
    borderRadius: 5,
    marginLeft: 10, // Memberikan jarak antara total dan tombol checkout
    width: '40%',
  },
  orderButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noMealsText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
});
