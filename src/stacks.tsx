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
        }}>
        <Tabs.Screen
          name="Onboard"
          component={Onboarding}
          options={{
            tabBarLabel: 'Começo',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen name="Cadastre-se" component={SignUp} />
        <Tabs.Screen name="Entrar" component={SignIn} />
        <Tabs.Screen name="dash" component={Dash} />
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
