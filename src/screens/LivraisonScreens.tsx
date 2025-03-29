import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  AppState,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Modal,
  TextInput,
  Image, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Types/types.ts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const LivraisonScreens = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


  const [animation] = useState(new Animated.Value(100));
  const [active, setActive] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: active ? 0 : 100,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [active, animation]);


  const searchQueryValue =  "";
  const [searchQuery, setSearchQuery] = useState(searchQueryValue);
  const [cameraActif, setcameraActif] = useState(false);
  const [showPopupOK, setShowPopupOK] = useState(false);


  const [tableData, setTableData] = useState([
    {clientName: 'BIM AGADIR', total: '5', matricule: '5050429', tournee: 'true', facture: ''},
    {clientName: 'MARJANE INZEGANE', total: '5', matricule: '5050429', tournee: 'true', facture: ''},
    {clientName: 'EL MOURADI MED', total: '5', matricule: '5050429', tournee: 'false', facture: 'déjà livré'},
    {clientName: 'BOUSABOUN MEHDI', total: '5', matricule: '5050429', tournee: 'false', facture: 'déjà livré'},
  ]);

  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        qrLock.current = false;
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription?.remove?.();
    };
  }, []);

  const handleBarcodeScanned = ({data}: { data: string }) => {
    if (data && !qrLock.current) {
      qrLock.current = true;
      setSearchQuery(data)
      console.log("QR Code détecté :", data);

      setTimeout(() => {
        qrLock.current = false;
      }, 50);

      setcameraActif(false);
    }
  };

  function getFilteredData(tableData: any[], searchQuery: string | string[]) {

    return tableData.filter(item =>
      item.clientName.toLowerCase().includes(typeof searchQuery === "string" ? searchQuery?.toLowerCase() :
        "")
    );

  }

  const filteredData = useMemo(() => getFilteredData(tableData, searchQuery), [tableData, searchQuery]);

  const ClientListItem: React.FC<{
    clientName?: string;
    total?: string;
    tournee?: string;
    facture?: string;
    matricule?: string
  }> = ({clientName = 'Green Bank', total = '$800', matricule = 'Withdraw', tournee = 'true', facture = 'true'}) => (

    <View style={[styles.containerCard]}>
      <View style={[styles.cardHeader, {backgroundColor: tournee === 'false' ? '#ffdada' : '#d9e4ff'}]}>
        <TouchableOpacity style={styles.clientName}
                          onPress={() => navigation.navigate('LivraisonDT', { matricule, clientName })}
                          activeOpacity={0.7}>
          <Text style={styles.clientName}>{clientName}</Text>
        </TouchableOpacity>
        <Text style={styles.clientMatricule}>{matricule}</Text>

      </View>


      <View style={[styles.cardBody, {borderColor: tournee === 'false' ? '#ffdada' : '#d9e4ff'}]}>
        <View>
          <View style={[styles.cardBodyCol2]}>
            <Text style={{fontSize: 12, fontWeight: '300', color: '#6b6b6b', fontFamily: 'Geologica'}}>Numero de bon commande
              : </Text>
            <Text style={{
              fontSize: 12,
              fontWeight: 'bold',
              fontFamily: 'Geologica',
              color: '#000000',
              flex: 2,
              paddingTop: 2,
            }}>BC1547845</Text>
            <Text style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#000000',
              fontFamily: 'Geologica',
              textAlign: 'right',
              flex: 2
            }}>{facture}</Text>
          </View>

          <View style={[styles.cardBodyCol2,]}>
            <Text style={{fontSize: 12, fontWeight: '300', color: '#6b6b6b', fontFamily: 'Geologica'}}>Numero de bon livraison: </Text>
            <Text style={{
              paddingTop: 2,
              fontSize: 12,
              fontWeight: 'bold',
              fontFamily: 'Geologica',
              color: '#000000',

            }}>BL1548745</Text>
          </View>

        </View>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >

      <View style={styles.container}>
        <Image source={require('../assets/images/vector/bubbles.png')} style={styles.bubblesContainer}/>
        <View style={styles.header}>
          <TouchableOpacity      onPress={() => navigation.navigate('Profile')}>
            <Image source={require('../assets/images/logo/logo_app.png')} style={styles.logo}/>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>CMDS A LIVRER</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Nom/Code/Matricule "
            placeholderTextColor="#d2d2d2"
          />
          {/*<TouchableOpacity*/}
          {/*  onPress={async () => {*/}
          {/*    if (!isPermissionGranted) {*/}
          {/*      const newPermission = await requestPermission();*/}
          {/*      if (!newPermission.granted) return; // On arrête si l'utilisateur refuse*/}
          {/*    }*/}
          {/*    setcameraActif(true);*/}
          {/*  }}*/}
          {/*>*/}


          {/*  <Image*/}
          {/*    source={require('../assets/images/vector/camera.png')}  // Image de la caméra*/}
          {/*    style={[styles.camera, {opacity: !isPermissionGranted ? 0.5 : 1}]}*/}
          {/*  />*/}


          {/*</TouchableOpacity>*/}
        </View>
        <KeyboardAwareScrollView
          extraScrollHeight={10} // Ajuste pour mieux voir les inputs
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="none" // Essaye "none" au lieu de "on-drag"
          contentContainerStyle={{flexGrow: 1}}
        >

          {filteredData.map((client, index) => (
            <ClientListItem
              key={index}
              clientName={client.clientName}
              total={client.total}
              matricule={client.matricule}
              facture={client.facture}
              tournee={client.tournee}
            />
          ))}
        </KeyboardAwareScrollView>
        <Animated.View style={[styles.navbar, {transform: [{translateY: animation}]}]}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}>
            <View style={{ alignItems: 'flex-start', marginBottom: 50,marginLeft:10 }}>
              <Text style={styles.connectButtonText}>
                Nombre des commande : <Text style={[styles.rowfooter, { fontWeight: 'bold' }]}>4</Text>
              </Text>
              <Text style={styles.connectButtonText}>
                Nombre des commande livré : <Text style={[styles.rowfooter, { fontWeight: 'bold' }]}>2</Text>
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              {/*<TouchableOpacity style={styles.navItem}>*/}
              {/*    <Image source={require('../assets/images/vector/printer.png')} style={styles.pdf}/>*/}
              {/*</TouchableOpacity>*/}
              {/*<TouchableOpacity style={styles.navItem}>*/}
              {/*    <Image source={require('../assets/images/vector/valid.png')} style={styles.pdf}/>*/}
              {/*</TouchableOpacity>*/}
            </View>
          </View>
        </Animated.View>
      </View>

      {/*{cameraActif && (<SafeAreaView style={StyleSheet.absoluteFillObject}>*/}
      {/*  <Stack.Screen*/}
      {/*    options={{*/}
      {/*      title: "Overview",*/}
      {/*      headerShown: false,*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  {Platform.OS === "android" ? <StatusBar hidden/> : null}*/}


      {/*  <CameraView*/}
      {/*    style={StyleSheet.absoluteFillObject}*/}
      {/*    facing="back"*/}
      {/*    onBarcodeScanned={handleBarcodeScanned}*/}
      {/*  />*/}
      {/*</SafeAreaView>)}*/}
      <Modal visible={showPopupOK} transparent animationType="fade"
             onRequestClose={() => setShowPopupOK(false)}>
        <View style={styles.containerpopup}>
          <View style={styles.modal}>
            <Text style={styles.title}>
              You are going to delete your account
            </Text>

            <Text style={styles.subtitlepoup}>
              You won't be able to restore your data
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowPopupOK(false)}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => setShowPopupOK(false)}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>


  );
};

const styles = StyleSheet.create({
  pdf: {width: 25, height: 25, resizeMode: 'contain', margin: 8},
  connectButtonText: {
    fontSize: 12,
    fontFamily: 'Geologica',
    fontWeight: '400',
    lineHeight: 16,
    color: '#ffffff',
  },
  rowfooter: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
    backgroundColor: '#4A90E2',
  },
  navbar: {
    marginTop:-50,
    bottom: 50,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  navItem: {
    alignItems: 'center',
    marginBottom: 50,
    marginRight: 10
  },
  container: {flex: 1, backgroundColor: '#fff'},
  bubblesContainer: {position: 'absolute', width: '120%', height: 300},
  header: {flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 5},
  logo: {width: 25, height: 25, resizeMode: 'contain', marginRight: 8},
  headerTitle: {fontSize: 20, fontWeight: '600', color: '#202020', marginLeft: 5},
  subtitle: {fontSize: 16, fontWeight: '400', color: '#202020', marginLeft: 5},
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#004bfe',
    height: 35,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  searchInput: {flex: 1, color: '#fff', fontSize: 14, fontWeight: '400'},
  cameraIcon: {width: 25, height: 25, resizeMode: 'contain'},
  containerCard: {padding: 5, marginBottom: 0},

  camera: {
    width: 25,
    height: 25,
    resizeMode: 'contain',  // S'assure que l'image ne se déforme pas
  },
  cardBody: {
    backgroundColor: 'white',
    padding: 5,
    borderWidth: 2,
    paddingHorizontal: 15,
  },
  cardDescription: {
    flexDirection: 'row',
    marginLeft: '25%',
    marginBottom: 10
  },

  cardBodyCol2: {
    flex: 2,
    flexDirection: 'row',

  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  clientName: {
    fontSize: 14,
    fontWeight: '300',
    color: '#000',
    flex: 5
  },
  clientMatricule: {
    fontSize: 13,
    fontWeight: '300',
    color: '#000000',
    alignItems: 'flex-end'
  },
  container_button: {
    flex: 0.1,
    alignItems: 'flex-end'
  },
  circleContainer: {width: 10, height: 10, marginBottom: 15, alignItems: 'center', justifyContent: 'center'},
  circle: {width: 30, height: 10, alignItems: 'center', justifyContent: 'center', position: 'relative'},
  group13: {width: 23, height: 23, position: 'absolute', top: 2.5, left: 2.5, zIndex: 1},
  containerpopup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    width: 347,
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#707070',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 19,
    fontWeight: '700',
    color: '#202020',
    textAlign: 'center',
    lineHeight: 27,
    letterSpacing: -0.19,
    marginBottom: 10,
  },
  subtitlepoup: {
    fontFamily: 'Geologica',
    fontSize: 13,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  cancelButton: {
    width: 128,
    height: 40,
    backgroundColor: '#202020',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#707070',
  },
  deleteButton: {
    width: 128,
    height: 40,
    backgroundColor: '#D97474',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#707070',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#F3F3F3',
    lineHeight: 25,
  },
});
export default LivraisonScreens;
