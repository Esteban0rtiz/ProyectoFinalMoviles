import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import usuariosData from '../data/usuarios.json';

const AuthScreen = ({ navigation, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = () => {
    const foundUser = usuariosData.usuarios.find(
      (user) => user.mail === email && user.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      Alert.alert('Inicio de Sesión Exitoso', 'Usuario autenticado correctamente.');
    } else {
      Alert.alert('Error', 'Credenciales incorrectas. Intenta de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inicio de Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Iniciar Sesión" onPress={handleAuth} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1', // Fondo de la pantalla
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#3498db',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});

export default AuthScreen;