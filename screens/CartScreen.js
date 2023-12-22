import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';

const CartScreen = ({ route, navigation }) => {
  const { cart, setCart } = route.params;

  const calculateTotals = () => {
    const subtotalAmount = cart.reduce((acc, product) => acc + product.precio, 0);
    const ivaRate = 0.12;
    const ivaAmount = subtotalAmount * ivaRate;
    const totalAmount = subtotalAmount + ivaAmount;

    return { subtotal: subtotalAmount, iva: ivaAmount, total: totalAmount };
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  const handleCompra = () => {
    // Lógica de compra aquí (puedes enviar la información a un servidor, etc.)
    // ...

    // Limpiar el carrito después de la compra
    setCart([]);
    Alert.alert('Compra Realizada', '¡Gracias por tu compra!');
    navigation.goBack(); // O navegar a la pantalla principal, ajusta según tus necesidades
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.precio.toFixed(2)}</Text>
      <Button title="Eliminar" onPress={() => removeFromCart(item.id)} color="#e74c3c" />
    </View>
  );

  const { subtotal, iva, total } = calculateTotals();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carrito de Compras</Text>
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.totalsContainer}>
        <Text style={styles.totalsText}>Subtotal: ${subtotal.toFixed(2)}</Text>
        <Text style={styles.totalsText}>IVA: ${iva.toFixed(2)}</Text>
        <Text style={styles.totalsText}>Total: ${total.toFixed(2)}</Text>
      </View>
      <Button title="Realizar Compra" onPress={handleCompra} color="#2ecc71" />
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
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 10,
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
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalsContainer: {
    marginTop: 16,
  },
  totalsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
});

export default CartScreen;
