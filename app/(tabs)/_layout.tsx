import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useCartStore } from '@/store/cartStore';
import { Ionicons } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { items } = useCartStore();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerStyle: {
          backgroundColor:'#1C3782'
        },
        headerTintColor:'#fff',
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <TouchableOpacity style={{marginRight: 20}}>
                <Text style={{fontSize:16, fontWeight:'bold', color:'#fff'}}>{items}</Text>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          title: 'Favourite',
          tabBarIcon: ({ color }) => <Ionicons name="heart-outline" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <TouchableOpacity style={{marginRight: 20}}>
                <Text style={{fontSize:16, fontWeight:'bold', color:'#fff'}}>{items}</Text>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
