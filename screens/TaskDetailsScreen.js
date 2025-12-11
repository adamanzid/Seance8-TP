import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskDetailsScreen({ route }) {
  const { taskId, task } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tâche #{taskId}</Text>
      <Text style={styles.subtitle}>{task?.title}</Text>
      <Text style={styles.description}>{task?.description}</Text>
      <Text style={styles.status}>
        Statut : {task?.completed ? 'Terminée' : 'En cours'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 12,
  },
  status: {
    fontSize: 16,
    fontWeight: '600',
  },
});

