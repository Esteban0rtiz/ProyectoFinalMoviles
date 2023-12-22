import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button, Alert } from 'react-native';
import productsData from '../data/products.json';

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, id: cart.length + 1 }]);
    Alert.alert('Añadido al carrito', `${product.name} se ha añadido al carrito.`);
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.precio.toFixed(2)}</Text>
      <Button
        title="Agregar al carrito"
        onPress={() => addToCart(item)}
        color="#3498db"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Descubre Nuestros Productos</Text>
      <FlatList
        data={productsData.products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
      <Button
        title="Ir al carrito"
        onPress={() => navigation.navigate('Cart', { cart, setCart })}
        color="#2ecc71"
        style={styles.cartButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ecf0f1', // Fondo de la pantalla
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#3498db',
  },
  productList: {
    paddingBottom: 24,
  },
  productItem: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
    borderRadius: 8,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  productPrice: {
    fontSize: 18,
    color: '#777',
    marginBottom: 8,
  },
  cartButton: {
    marginTop: 24,
    backgroundColor: '#2ecc71',
    borderRadius: 8,
  },
});

export default HomeScreen;
