// ProductList.js
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const ProductList = ({ products, addToCart }) => {
  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.nombre}</Text>
      <Text style={styles.productPrice}>${item.precio.toFixed(2)}</Text>
      <Button
        title="Agregar al Carrito"
        onPress={() => addToCart(item)}
        color="#3498db" // Cambia el color del botón según tu preferencia
      />
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderProductItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProductList;
