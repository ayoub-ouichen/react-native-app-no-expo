import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback, TouchableOpacity,
  Modal, Easing, Animated ,Image
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../Types/types.ts';

const AffectationScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const chaufeur = [
    {label: "mohamed", value: "apple"},
    {label: "kamal", value: "banana"},
  ];
  const [filteredchaufeur, setFilteredchaufeur] = useState(chaufeur);
  const [Chauffeur, setChauffeur] = useState("");
  const [Vendeur, setVendeur] = useState("");
  const [AideVendeur1, setAideVendeur1] = useState("");
  const [AideVendeur2, setAideVendeur2] = useState("");
  const [Camion, setCamion] = useState("");
  const [visibleChauffeur, setVisibleChauffeur] = useState(false);
  const [visibleVendeur, setVisibleVendeur] = useState(false);
  const [visibleAideVendeur1, setVisibleAideVendeur1] = useState(false);
  const [visibleideVendeur2, setVisibleAideVendeur2] = useState(false);
  const [visibleCamion, setVisibleCamion] = useState(false);
  const chaufeurSearch = (text: any) => {

    setFilteredchaufeur(chaufeur.filter((item) => item.label.toLowerCase().includes(text.toLowerCase())));
  };

  function onClose() {
    setVisibleChauffeur(false)
    setVisibleVendeur(false)
    setVisibleAideVendeur1(false)
    setVisibleAideVendeur2(false)
    setVisibleCamion(false)
  }




  const [animation] = useState(new Animated.Value(100));
  const [active] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: active ? 0 : 100,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [active, animation]);








  function onSelectChaufeur(item: any) {
    console.log(item)
    setChauffeur(item.label);
  }

  function onSelectVendeur(item: any) {
    console.log(item)
    setVendeur(item.label);
  }

  function onSelectAideVendeur1(item: any) {
    console.log(item)
    setAideVendeur1(item.label);
  }

  function onSelectAideVendeur2(item: any) {
    console.log(item)
    setAideVendeur2(item.label);
  }

  function onSelectCamion(item: any) {
    console.log(item)
    setCamion(item.label);
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image source={require('../assets/images/vector/bubbles.png')} style={styles.bubblesContainer}/>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image source={require('../assets/images/logo/logo_copag.png')} style={styles.logo}/>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>AFFECTATION</Text>
          </View>
          <View style={styles.containerButton}>
            <View style={styles.labelContainer}>
              <Image source={require('../assets/images/vector/user.png')} style={styles.inputlogo} />

              <Text style={styles.label}>Chauffeur</Text>
            </View>
            <TouchableOpacity style={styles.walletText} onPress={() => setVisibleChauffeur(true)}>
              <Text>{Chauffeur}</Text>
            </TouchableOpacity>
            <Modal
              visible={visibleChauffeur}
              transparent
              animationType="fade"
              onRequestClose={onClose}
            >
              <View style={styles.modalOverlay}>
                <Animated.View style={styles.modalContainer}>
                  {/* Header */}
                  <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Select Chauffeur</Text>
                    <TouchableOpacity onPress={() => setVisibleChauffeur(false)}>
                      <Text style={styles.closeButton}>✕</Text>
                    </TouchableOpacity>
                  </View>

                  <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="#888"
                    value={Chauffeur}
                    onChangeText={chaufeurSearch}
                  />

                  <KeyboardAwareScrollView
                    extraScrollHeight={1} // Ajuste pour mieux voir les inputs
                    enableOnAndroid={true}
                    keyboardShouldPersistTaps="handled"
                    keyboardDismissMode="none" // Essaye "none" au lieu de "on-drag"
                    contentContainerStyle={{flexGrow: 1}}
                  >

                    {filteredchaufeur.map((item) => (
                      <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => {
                          onSelectChaufeur(item);
                          setVisibleChauffeur(false);
                        }}
                      >
                        <Text style={styles.itemText}>{item.label}</Text>
                      </TouchableOpacity>
                    ))}
                  </KeyboardAwareScrollView>
                </Animated.View>
              </View>
            </Modal>
          </View>
          <View style={styles.containerButton}>
            <View style={styles.labelContainer}>
              <Image source={require('../assets/images/vector/user.png')} style={styles.inputlogo} />

              <Text style={styles.label}>Vendeur</Text>
            </View>
            <TouchableOpacity style={styles.walletText} onPress={() => setVisibleVendeur(true)}>
              <Text>{Vendeur}</Text>
            </TouchableOpacity>
            <Modal
              visible={visibleVendeur}
              transparent
              animationType="fade"
              onRequestClose={onClose}
            >
              <View style={styles.modalOverlay}>
                <Animated.View style={styles.modalContainer}>
                  {/* Header */}
                  <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Select Chauffeur</Text>
                    <TouchableOpacity onPress={() => setVisibleVendeur(false)}>
                      <Text style={styles.closeButton}>✕</Text>
                    </TouchableOpacity>
                  </View>

                  <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="#888"
                    value={Vendeur}
                    onChangeText={chaufeurSearch}
                  />

                  <KeyboardAwareScrollView
                    extraScrollHeight={1} // Ajuste pour mieux voir les inputs
                    enableOnAndroid={true}
                    keyboardShouldPersistTaps="handled"
                    keyboardDismissMode="none" // Essaye "none" au lieu de "on-drag"
                    contentContainerStyle={{flexGrow: 1}}
                  >

                    {filteredchaufeur.map((item) => (
                      <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => {
                          onSelectVendeur(item);
                          setVisibleVendeur(false);
                        }}
                      >
                        <Text style={styles.itemText}>{item.label}</Text>
                      </TouchableOpacity>
                    ))}
                  </KeyboardAwareScrollView>
                </Animated.View>
              </View>
            </Modal>
          </View>
          <View style={styles.containerButton}>
            <View style={styles.labelContainer}>
              <Image source={require('../assets/images/vector/user.png')} style={styles.inputlogo} />

              <Text style={styles.label}>Aide vendeur 1</Text>
            </View>
            <TouchableOpacity style={styles.walletText} onPress={() => setVisibleAideVendeur1(true)}>
              <Text>{AideVendeur1}</Text>
            </TouchableOpacity>
            <Modal
              visible={visibleAideVendeur1}
              transparent
              animationType="fade"
              onRequestClose={onClose}
            >
              <View style={styles.modalOverlay}>
                <Animated.View style={styles.modalContainer}>
                  {/* Header */}
                  <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Select Chauffeur</Text>
                    <TouchableOpacity onPress={() => setVisibleAideVendeur1(false)}>
                      <Text style={styles.closeButton}>✕</Text>
                    </TouchableOpacity>
                  </View>

                  <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="#888"
                    value={AideVendeur1}
                    onChangeText={chaufeurSearch}
                  />

                  <KeyboardAwareScrollView
                    extraScrollHeight={1} // Ajuste pour mieux voir les inputs
                    enableOnAndroid={true}
                    keyboardShouldPersistTaps="handled"
                    keyboardDismissMode="none" // Essaye "none" au lieu de "on-drag"
                    contentContainerStyle={{flexGrow: 1}}
                  >

                    {filteredchaufeur.map((item) => (
                      <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => {
                          onSelectAideVendeur1(item);
                          setVisibleAideVendeur1(false);
                        }}
                      >
                        <Text style={styles.itemText}>{item.label}</Text>
                      </TouchableOpacity>
                    ))}
                  </KeyboardAwareScrollView>
                </Animated.View>
              </View>
            </Modal>
          </View>
          <View style={styles.containerButton}>
            <View style={styles.labelContainer}>
              <Image source={require('../assets/images/vector/user.png')} style={styles.inputlogo} />

              <Text style={styles.label}>Aide vendeur 2</Text>
            </View>
            <TouchableOpacity style={styles.walletText} onPress={() => setVisibleAideVendeur2(true)}>
              <Text>{AideVendeur2}</Text>
            </TouchableOpacity>
            <Modal
              visible={visibleideVendeur2}
              transparent
              animationType="fade"
              onRequestClose={onClose}
            >
              <View style={styles.modalOverlay}>
                <Animated.View style={styles.modalContainer}>
                  {/* Header */}
                  <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Select Chauffeur</Text>
                    <TouchableOpacity onPress={() => setVisibleAideVendeur2(false)}>
                      <Text style={styles.closeButton}>✕</Text>
                    </TouchableOpacity>
                  </View>

                  <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="#888"
                    value={AideVendeur2}
                    onChangeText={chaufeurSearch}
                  />

                  <KeyboardAwareScrollView
                    extraScrollHeight={1} // Ajuste pour mieux voir les inputs
                    enableOnAndroid={true}
                    keyboardShouldPersistTaps="handled"
                    keyboardDismissMode="none" // Essaye "none" au lieu de "on-drag"
                    contentContainerStyle={{flexGrow: 1}}
                  >

                    {filteredchaufeur.map((item) => (
                      <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => {
                          onSelectAideVendeur2(item);
                          setVisibleAideVendeur2(false);
                        }}
                      >
                        <Text style={styles.itemText}>{item.label}</Text>
                      </TouchableOpacity>
                    ))}
                  </KeyboardAwareScrollView>
                </Animated.View>
              </View>
            </Modal>
          </View>
          <View style={styles.containerButton}>
            <View style={styles.labelContainer}>
              <Image source={require('../assets/images/vector/user.png')} style={styles.inputlogo} />

              <Text style={styles.label}>Vehicule</Text>
            </View>
            <TouchableOpacity style={styles.walletText} onPress={() => setVisibleCamion(true)}>
              <Text>{Camion}</Text>
            </TouchableOpacity>
            <Modal
              visible={visibleCamion}
              transparent
              animationType="fade"
              onRequestClose={onClose}
            >
              <View style={styles.modalOverlay}>
                <Animated.View style={styles.modalContainer}>
                  {/* Header */}
                  <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Select Chauffeur</Text>
                    <TouchableOpacity onPress={() => setVisibleCamion(false)}>
                      <Text style={styles.closeButton}>✕</Text>
                    </TouchableOpacity>
                  </View>

                  <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="#888"
                    value={Camion}
                    onChangeText={chaufeurSearch}
                  />

                  <KeyboardAwareScrollView
                    extraScrollHeight={1} // Ajuste pour mieux voir les inputs
                    enableOnAndroid={true}
                    keyboardShouldPersistTaps="handled"
                    keyboardDismissMode="none" // Essaye "none" au lieu de "on-drag"
                    contentContainerStyle={{flexGrow: 1}}
                  >

                    {filteredchaufeur.map((item) => (
                      <TouchableOpacity
                        style={styles.listItem}
                        onPress={() => {
                          onSelectCamion(item);
                          setVisibleCamion(false);
                        }}
                      >
                        <Text style={styles.itemText}>{item.label}</Text>
                      </TouchableOpacity>
                    ))}
                  </KeyboardAwareScrollView>
                </Animated.View>
              </View>
            </Modal>
          </View>


        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.navbar, {transform: [{translateY: animation}]}]}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
          <View style={{ alignItems: 'flex-start', marginBottom: 50,marginLeft:10 }}>
            {/*<Text style={styles.connectButtonText}>*/}
            {/*    Nombre des factures : <Text style={[styles.rowfooter, { fontWeight: 'bold' }]}>15</Text>*/}
            {/*</Text>*/}
            {/*<Text style={styles.connectButtonText}>*/}
            {/*    Nombre des factures supprime : <Text style={[styles.rowfooter, { fontWeight: 'bold' }]}>5</Text>*/}
            {/*</Text>*/}
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.navItem}>
                <Image source={require('../assets/images/vector/printer.png')} style={styles.pdf}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
              <Image source={require('../assets/images/vector/valid.png')} style={styles.pdf}/>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </KeyboardAvoidingView>

  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical:150,
  },
  modalContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#aaa',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  listItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
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
  containerButton: {
    width: 319,
    height: 45,
    borderWidth: 1,
    borderColor: '#363062',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 15,
    position: 'relative',
    marginTop: 30,
    marginLeft:15
  },
  labelContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: -11,
    left: 15,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  label: {
    color: '#363062',
    fontFamily: 'Geologica',
    fontSize: 14,
    lineHeight: 22,
  },
  walletText: {
    color: '#000000',
    fontFamily: 'Geologica',
    fontSize: 14,
    marginTop: 11,
    marginLeft: 40,
  },
  dropdown: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  modal: {
    backgroundColor: '#4A90E2',
    marginTop: 130,
    marginLeft:20,
    marginRight:30,
    height:300,
  },
  modal2: {
    backgroundColor: "white",
    marginTop: 207,
    marginLeft:20,
    marginRight:30,
    borderRadius: 10,
    height:200,
  },
  modal3: {
    backgroundColor: "white",
    marginTop: 280,
    marginLeft:20,
    marginRight:30,
    borderRadius: 10,
    height:200,
  },
  modal4: {
    backgroundColor: "white",
    marginTop: 358,
    marginLeft:20,
    marginRight:30,
    borderRadius: 10,
    height:200,
  },
  modal5: {
    backgroundColor: "white",
    marginTop: 430,
    marginLeft:20,
    marginRight:30,
    borderRadius: 10,
    height:200,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  bubblesContainer: {position: 'absolute', width: '120%', height: 300},
  container: { flex: 1, backgroundColor: '#fff'},
  header: { flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft:10 },
  logo: { width: 25, height: 25, resizeMode: 'contain', marginRight: 8 },
  inputlogo: { width: 25, height: 25, resizeMode: 'contain', marginRight: 8 },
  headerTitle: {fontFamily: 'Geologica',fontSize: 20, fontWeight: '600', color: '#202020', marginBottom: 10, marginTop: 10},
  subtitle: { fontSize: 14, color: '#202020', marginTop: 5 },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#004bfe',
    borderRadius: 45,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10
  },
  connectButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  titre: {
    width: 335,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default AffectationScreen;
