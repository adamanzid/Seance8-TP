import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function UserProfile({ id, name, email, role, avatarUrl }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: avatarUrl }}
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.meta}>ID utilisateur : {id}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.role}>Rôle: {role}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
    backgroundColor: '#e5e7eb',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  meta: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    color: '#6b7280',
  },
});

