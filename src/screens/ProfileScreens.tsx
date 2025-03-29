import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../Types/types.ts';

interface FooterProps {
  style?: object;
  onDisconnect?: () => void;
}
const ProfileScreens: React.FC<FooterProps> = ({
                                          style = {}
                                        }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={[styles.container, style]}>
        <Image source={require('../assets/images/vector/bubbles_profile.png')} style={styles.bubblesContainer}/>
        <View style={styles.headerSection}>
          <View style={styles.profileContainer}>
            <View style={styles.profileImageWrapper}>
              <Image source={require('../assets/images/logo/logo_profile.png')}
                     style={styles.profileImage}/>
            </View>
            <Text style={styles.userName}>Redouan koussy</Text>
            <Text style={styles.userId}>7895412</Text>
          </View>

        </View>
        <View style={styles.menuContainer}>
          <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('CommandeSecteur')} style={styles.menuItem}>
              <Image source={require('../assets/images/logo/logo_profile.png')} style={styles.menuIcon}/>
              <Text style={styles.menuText}>Commande secteur</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ListeDisponible')} style={styles.menuItem}>
              <Image source={require('../assets/images/logo/logo_profile.png')} style={styles.menuIcon}/>
              <Text style={styles.menuText}>Liste disponible</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('InventaireSortie')} style={styles.menuItem}>
              <Image source={require('../assets/images/logo/logo_profile.png')} style={styles.menuIcon}/>
              <Text style={styles.menuText}>Inventaire de sortie</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ClientList')} style={styles.menuItem}>
              <Image source={require('../assets/images/logo/logo_profile.png')} style={styles.menuIcon}/>
              <Text style={styles.menuText}>Nouvelle visite</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Factures')} style={styles.menuItem}>
              <Image source={require('../assets/images/logo/logo_profile.png')} style={styles.menuIcon}/>
              <Text style={styles.menuText}>Factures</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('EtatFinancier')} style={styles.menuItem}>
              <Image source={require('../assets/images/logo/logo_profile.png')} style={styles.menuIcon}/>
              <Text style={styles.menuText}>Etat Financier</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Affectation')} style={styles.menuItem}>
              <Image source={require('../assets/images/logo/logo_profile.png')} style={styles.menuIcon}/>
              <Text style={styles.menuText}>Affectation</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Livraison')} style={styles.menuItem}>
              <Image source={require('../assets/images/logo/logo_profile.png')} style={styles.menuIcon}/>
              <Text style={styles.menuText}>Livraison</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.menuItem}>
              <Image source={require('../assets/images/logo/logo_profile.png')} style={styles.menuIcon}/>
              <Text style={styles.menuText}>Journaux</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.menuItem}>
              <Image source={require('../assets/images/logo/logo_profile.png')} style={styles.menuIcon}/>
              <Text style={styles.menuText}>Entrepots</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.menuItem}>
              <Image source={require('../assets/images/logo/logo_profile.png')} style={styles.menuIcon}/>
              <Text style={styles.menuText}>Mouvements</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {minWidth: 320, minHeight: 600, backgroundColor: '#fff', overflow: 'hidden'},
  bubblesContainer: {position: 'absolute', width: '120%', height: 300},
  headerSection: {paddingTop: 50, alignItems: 'center'},
  profileContainer: {alignItems: 'center'},
  profileImageWrapper: {width: 150, height: 105, justifyContent: 'center', alignItems: 'center'},
  profileImage: {width: 150, height: 150, borderRadius: 45.5},
  userName: {marginTop: 15, fontSize: 21, fontWeight: '700', color: '#202020'},
  userId: {fontSize: 19, color: '#202020'},
  scrollIcon: {position: 'absolute', top: 24, right: 20},
  iconScroll: {width: 33, height: 33},
  menuContainer: {flex: 1, marginTop: 20, paddingHorizontal: 20},
  menuItem: {flexDirection: 'row', alignItems: 'center', paddingVertical: 12},
  menuIcon: {width: 23, height: 23, top: 1, left: 15},
  menuText: {marginLeft: 37, fontSize: 16, color: '#202020'},
  container2: {minWidth: 250, padding: 20, justifyContent: 'center', alignItems: 'center'},
  disconnectButton: {
    width: 198,
    height: 40,
    backgroundColor: '#ff8080',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContent: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10},
  iconContainer: {width: 22, height: 22, justifyContent: 'center', alignItems: 'center'},
  checkIcon: {width: 22, height: 22},
  buttonText: {fontSize: 15, fontWeight: '500', color: '#000', textAlign: 'center'},
});

export default ProfileScreens;
