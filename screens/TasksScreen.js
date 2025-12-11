import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import TaskCard from '../components/TaskCard';
import TaskItem from '../components/TaskItem';

const initialTasks = [
  { id: 1, title: 'Préparer la réunion', description: 'Rassembler les notes et slides.', completed: false },
  { id: 2, title: 'Envoyer le rapport', description: 'Partager le rapport hebdomadaire.', completed: true },
  { id: 3, title: 'Planifier le sprint', description: 'Définir les stories et priorités.', completed: false },
];

export default function TasksScreen({ navigation }) {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Aperçu rapide</Text>
      <View style={styles.section}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            completed={task.completed}
            onToggle={() => toggleTask(task.id)}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Toutes les tâches</Text>
      <View style={styles.section}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            onPress={() =>
              navigation.navigate('TaskDetails', {
                taskId: task.id,
                task,
              })
            }
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f3f4f6',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
});

