import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-vector-icons/Icon';

import { colors } from '~/lib/theme/colors';

import HomeScreen from '../../screens/Map/MapScreen';

import LoginNavigator from './LoginNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primaryGreen,
        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Map"
        component={HomeScreen}
        options={{
          tabBarIcon: tabBarIcon(FontAwesome, 'map-marker'),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginNavigator}
        options={{
          tabBarIcon: tabBarIcon(FontAwesome, 'user'),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const tabBarIcon = (FontIcon: typeof Icon, name: string) =>
  function tabIcon({ color }: { color: string }) {
    return <FontIcon name={name} size={24} color={color} />;
  };
