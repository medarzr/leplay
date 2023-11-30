import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false,
        // tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          // fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Map"
        component={HomeScreen}
        options={{
          tabBarIcon: tabBarIcon(FontAwesome, 'map-marker'),
          // tabBarLabel: i18n.t('sections.catalog'),
        }}
      />
      <Tab.Screen name="Settings2" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const tabBarIcon = (Icon, name: string) =>
  function tabIcon({ color }: { color: string }) {
    return <Icon name={name} size={24} color={color} />;
  };
