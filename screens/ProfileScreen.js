import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import UserProfile from '../components/UserProfile';

export default function ProfileScreen({ user, onLogout }) {
  const avatarUrl = 'https://avatars.githubusercontent.com/u/9919?s=200&v=4';

  return (
    <View style={styles.container}>
      <UserProfile
        id={user?.id}
        name={user?.name}
        email={user?.email}
        role={user?.role}
        avatarUrl={avatarUrl}
      />
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={onLogout}
      >
        <Text style={styles.logoutText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3f4f6',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#ef4444',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

