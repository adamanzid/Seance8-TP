import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksScreen from '../screens/TasksScreen';
import TaskDetailsScreen from '../screens/TaskDetailsScreen';

const Stack = createNativeStackNavigator();

export default function TasksStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TasksList"
        component={TasksScreen}
        options={{ title: 'Tasks' }}
      />
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetailsScreen}
        options={{ title: 'Task Details' }}
      />
    </Stack.Navigator>
  );
}

