import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Cart = ({ cartItems }) => {
  const calculateTotal = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const iva = subtotal * 0.12; // IVA del 12%
    const total = subtotal + iva;

    return { subtotal, iva, total };
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
    </View>
  );

  const renderTotal = () => {
    const { subtotal, iva, total } = calculateTotal();

    return (
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Subtotal: ${subtotal.toFixed(2)}</Text>
        <Text style={styles.totalText}>IVA (12%): ${iva.toFixed(2)}</Text>
        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carrito de Compras</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.cartList}
      />
      {cartItems.length > 0 && renderTotal()}
      <TouchableOpacity style={styles.purchaseButton} onPress={() => alert('Compra realizada')}>
        <Text style={styles.buttonText}>Realizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#3498db',
  },
  cartList: {
    marginTop: 16,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    marginTop: 16,
    borderTopWidth: 1,
    paddingTop: 8,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  purchaseButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cart;
