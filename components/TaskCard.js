import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskCard({ title, description, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Voir détails</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f9fb',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 10,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#2563eb',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

