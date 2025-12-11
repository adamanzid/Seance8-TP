import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert('Erreur', 'Email et mot de passe requis.');
      return;
    }

    // Simulation d'authentification réussie
    onLogin({
      id: 101,
      role: 'Admin',
      email,
      name: 'Admin User',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f9fafb',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

