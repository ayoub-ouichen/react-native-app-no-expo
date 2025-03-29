
import React, {useEffect} from 'react';
import { StyleSheet } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Fav from './src/screens/FavScreens.tsx';
import Card from './src/screens/CardScreens.tsx';
import TabNavigator from './src/navigators/TabNavigator.tsx';
import {initDatabase} from './src/database/database.ts';
import ProfileScreens from './src/screens/ProfileScreens.tsx';
import CommandeSecteurScreens from './src/screens/CommandeSecteurScreens.tsx';
import ListeDisponibleScreens from './src/screens/ListeDisponibleScreens.tsx';
import InventaireSortieScreens from './src/screens/InventaireSortieScreens.tsx';
import AffectationScreen from './src/screens/AffectationScreens.tsx';
import LivraisonScreens from './src/screens/LivraisonScreens.tsx';
import LivraisonDTScreens from './src/screens/LivraisonDTScreens.tsx';
import EtatFinancierScreens from './src/screens/EtatFinancierScreens.tsx';
import FacturesScreens from './src/screens/FacturesScreens.tsx';
import VisiteScreens from './src/screens/VisiteScreens.tsx';
import CheckoutScreens from './src/screens/CheckoutScreens.tsx';
import HomeScreens from './src/screens/HomeScreens.tsx';
import ClientListScreens from './src/screens/ClientListScreens.tsx';

const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    initDatabase(); // Initialize DB

  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreens} />
        <Stack.Screen name="Affectation" component={AffectationScreen} />
        <Stack.Screen name="Livraison" component={LivraisonScreens} />
        <Stack.Screen name="Visite" component={VisiteScreens} />
        <Stack.Screen name="LivraisonDT" component={LivraisonDTScreens} />
        <Stack.Screen name="Checkout" component={CheckoutScreens} />
        <Stack.Screen name="EtatFinancier" component={EtatFinancierScreens} />
        <Stack.Screen name="Factures" component={FacturesScreens} />
        <Stack.Screen name="InventaireSortie" component={InventaireSortieScreens} />
        <Stack.Screen name="ListeDisponible" component={ListeDisponibleScreens} />
        <Stack.Screen name="CommandeSecteur" component={CommandeSecteurScreens} />
        <Stack.Screen name="Profile" component={ProfileScreens} />
        <Stack.Screen name="ClientList" component={ClientListScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
