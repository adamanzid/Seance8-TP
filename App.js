import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabs from './navigation/AppTabs';
import LoginScreen from './screens/LoginScreen';

const RootStack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userPayload) => {
    setUser(userPayload);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <RootStack.Screen name="MainApp">
            {(props) => (
              <AppTabs
                {...props}
                user={user}
                onLogout={handleLogout}
              />
            )}
          </RootStack.Screen>
        ) : (
          <RootStack.Screen name="Login">
            {(props) => (
              <LoginScreen
                {...props}
                onLogin={handleLogin}
              />
            )}
          </RootStack.Screen>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
