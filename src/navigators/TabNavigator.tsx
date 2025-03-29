import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/theme';
import Home from '../screens/HomeScreens.tsx';
import Fav from '../screens/FavScreens.tsx';
import Card from '../screens/CardScreens.tsx';
import ImpressionScreen from '../screens/ImpressionScreens.tsx';
import AffectationScreens from '../screens/AffectationScreens.tsx';
import ClientListScreens from '../screens/ClientListScreens.tsx';
import ProfileScreens from '../screens/ProfileScreens.tsx';
import CommandeSecteurScreens from '../screens/CommandeSecteurScreens.tsx';
import ListeDisponibleScreens from '../screens/ListeDisponibleScreens.tsx';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
      ></Tab.Screen>
      <Tab.Screen
        name="Fav"
        component={Fav}
      ></Tab.Screen>
      <Tab.Screen
        name="Card"
        component={Card}
      ></Tab.Screen>
      <Tab.Screen
        name="Imression"
        component={ImpressionScreen}
      ></Tab.Screen>
      <Tab.Screen
        name="affectation"
        component={AffectationScreens}
      ></Tab.Screen>
      <Tab.Screen
        name="clientList"
        component={ClientListScreens}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreens}
      ></Tab.Screen>
      <Tab.Screen
        name="CommandeSecteur"
        component={CommandeSecteurScreens}
      ></Tab.Screen>
      <Tab.Screen
        name="ListeDisponible"
        component={ListeDisponibleScreens}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigator;
