import React from 'react';

import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import store from './store';

import Onboarding from './screens/onboarding';
import SignIn from './screens/signin';
import SignUp from './screens/signup';
import Dash from './screens/dash';

const Tabs = createBottomTabNavigator();

const BottomNavigation: React.FC = () => {
  return (
    <Provider store={store}>
      <Tabs.Navigator
        initialRouteName="Onboard"
        screenOptions={{
          tabBarActiveTintColor: '#FF0055EA',
          tabBarInactiveTintColor: '#212121EA',
          headerShown: false,
        }}>
        <Tabs.Screen
          name="Onboard"
          component={Onboarding}
          options={{
            tabBarLabel: 'Começo',
            tabBarTestID: 'comeco-test',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="Cadastre-se"
          component={SignUp}
          options={{
            tabBarLabel: 'Cadastrar',
            tabBarTestID: 'cadastrar-test',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Entrar"
          component={SignIn}
          options={{
            tabBarLabel: 'Entrar',
            tabBarTestID: 'entrar-test',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account-multiple"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="dash"
          component={Dash}
          options={{
            tabBarLabel: 'Conta',
            tabBarTestID: 'entrar-test',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account-edit"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </Provider>
  );
};

const Stack: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default Stack;
