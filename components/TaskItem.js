import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function TaskItem({ title, completed, onToggle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Switch
        value={completed}
        onValueChange={onToggle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});

