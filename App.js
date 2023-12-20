import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppContacts from './src/Pages/AppContacts';
import Contacts from './src/Pages/Contacts';
import Information from './src/Pages/Information';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// ...

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AppContactsTab" component={AppContacts}></Tab.Screen>
      <Tab.Screen name="ContactsTab" component={Contacts}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Information" component={Information} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

