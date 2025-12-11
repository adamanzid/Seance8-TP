import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TasksStack from './TasksStack';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function AppTabs({ user, onLogout }) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="TasksTab"
        options={{ title: 'Tasks' }}
      >
        {(props) => <TasksStack {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{ title: 'Profile' }}
      >
        {(props) => (
          <ProfileScreen
            {...props}
            user={user}
            onLogout={onLogout}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

