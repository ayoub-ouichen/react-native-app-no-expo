import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
  Image, TextInput, KeyboardAvoidingView, Platform, Modal,
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../Types/types.ts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const CheckoutScreens = ({ route }: { route: any }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { matricule, clientName } = route.params; // Accessing the passed parameters
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
  const [showPopupOK, setShowPopupOK] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<any[]>([]);

  const tableData = [
    {id: '1', typePaiement: 'Cash', total: '+00DH', matricule: ''},
    {id: '2', typePaiement: 'Credit', total: '500DH', matricule: 'Autorisation Vendeur'},
    {id: '3', typePaiement: 'Autorisation', total: '1000DH', matricule: 'Superviseur'},
    {id: '4', typePaiement: 'Autorisation', total: '550DH', matricule: 'Chef agence'},
    {id: '5', typePaiement: 'Cheque', total: '0DH', matricule: ''},
    {id: '6', typePaiement: 'Remise', total: '150DH', matricule: ''},
  ];

  function ajouteTypePaiement(type: { typePaiement: string; id: string }) {
    setPaymentMethods(prevMethods => {
      const exists = prevMethods.some(
        (data) => data.typePaiement === type.typePaiement && data.id === type.id
      );
      return exists ? prevMethods : [...prevMethods, type];
    });
  }


  const TypePaiemenet: React.FC<{
    clientName?: string;
    total?: string;
    matricule?: string;
    id?: string;
    typePaiement?: string;
  }> = ({typePaiement = '', total = '', matricule = '', id = ''}) => (
    <TouchableOpacity onPress={() => ajouteTypePaiement({typePaiement, id})} style={styles.clientItem}
                      activeOpacity={0.7}>
      <View style={styles.clientContent}>
        <View>
          <View style={{flexDirection:'row'}}>
            <View style={{marginRight:5}}>
              <Image source={getImageSource(typePaiement)} style={styles.giftIcon1}/>
            </View>
            <Text style={styles.clientBank}>{typePaiement}</Text>

          </View>
          <Text style={styles.clientTransaction}>{matricule}</Text>
        </View>

        <Text style={styles.clientAmount}>{total}</Text>
      </View>
    </TouchableOpacity>


  );

  function onApply(obj: { id: string }) {
    setPaymentMethods(prevMethods => prevMethods.filter(item => item.id !== obj.id));
  }


  const getImageSource = (iconName: string) => {
    switch (iconName) {
      case 'Credit':
        return require('../assets/images/vector/credit.png');
      case 'Cash':
        return require('../assets/images/vector/cash.png');
      case 'Autorisation':
        return require('../assets/images/vector/credit.png');
      case 'Cheque':
        return require('../assets/images/vector/cheque.png');
      case 'Remise':
        return require('../assets/images/vector/remise.png');
    }
  };

  const Paiement: React.FC<{
    id?: string;
    typePaiement?: string;
    giftTitle?: string;
    total?: string;
    icon?: string;
  }> = ({typePaiement = '', total = '', id = ''}) => (
    <View style={{marginBottom: 10}}>
      <View style={styles.cardHeader}>
        <View style={{flex: 0.1}}>
          <Image
            source={getImageSource(typePaiement)}
            style={styles.giftIcon1}
          />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.creditText1}>{typePaiement}</Text>
        </View>

        <TouchableOpacity
          onPress={() => onApply({id})}
          activeOpacity={0.7}
          style={styles.container_button}>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Image
                source={require('../assets/images/vector/delete.png')}
                style={styles.group13}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.cardBody}>
        <View style={[styles.cardBodyCol2]}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '300',
              color: '#6b6b6b',
              fontFamily: 'Geologica',
              marginRight: 50,
            }}>
            Montant:{' '}
          </Text>
          <TextInput
            style={styles.input1}
            placeholder="Enter montant"
            keyboardType="numeric"
            onChangeText={text => console.log('Total entered:', text)} // Handle input
          />
        </View>
        <View style={styles.cardBodyCol2}>
          {typePaiement !== 'Cheque' && (
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: '#000000',
                fontFamily: 'Geologica',
              }}>
              {typePaiement === 'Cash'
                ? `Timbre : ${(1000 * 0.25) / 100} MAD`
                : typePaiement === 'Credit' || typePaiement === 'Autorisation'
                ? `Solde Autorisé : ${total} MAD`
                : typePaiement === 'Remise'
                ? `Solde Remise : ${total} MAD`
                : ''}
            </Text>
          )}
          {typePaiement === 'Cheque' && (
            <View style={[styles.cardBodyCol2]}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '300',
                  color: '#6b6b6b',
                  fontFamily: 'Geologica',
                  marginRight: 50,
                }}>
                Numero de cheque:{' '}
              </Text>
              <TextInput
                style={styles.input1}
                placeholder="Numero de cheque"
                keyboardType="numeric"
                onChangeText={text => console.log('Total entered:', text)} // Handle input
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1}}
    >
      <Image source={require('../assets/images/vector/bubbles.png')} style={styles.bubblesContainer}/>
      <View style={styles.header}>
        <TouchableOpacity           onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../assets/images/logo/logo_copag.png')} style={styles.logo}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>PAIMENET</Text>
      </View>

      <KeyboardAwareScrollView
        extraScrollHeight={10} // Ajuste pour mieux voir les inputs
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="none" // Essaye "none" au lieu de "on-drag"
        contentContainerStyle={{flexGrow: 1}}
      >
        {paymentMethods.map((method, index) => (
          <Paiement key={index} {...method}/>
        ))}
      </KeyboardAwareScrollView>


      {showPopupOK && (
        <Modal visible={showPopupOK} transparent animationType="fade">
          <View style={styles.containerpopup}>
            <View style={styles.popup}>
              {tableData.map((client, index) => (
                <TypePaiemenet
                  key={index}
                  typePaiement={client.typePaiement}
                  total={client.total}
                  matricule={client.matricule}
                  id={client.id}
                />
              ))}
              <TouchableOpacity style={styles.buttonpopup} onPress={() => setShowPopupOK(false)}>
                <Text style={styles.buttonTextpopup}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
      <Animated.View style={[styles.navbar, { transform: [{ translateY: animation }] }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <View style={{ alignItems: 'flex-start', marginBottom: 50,marginLeft:10 }}>
            <Text style={styles.connectButtonText}>
              Montant payé : <Text style={[styles.rowfooter, {fontWeight: 'bold'}]}>{15.25}</Text> MAD
            </Text>
            <Text style={styles.connectButtonText}>
              Montant Timbre : <Text
              style={[styles.rowfooter, {fontWeight: 'bold'}]}>{(15.25 * 0.0025).toFixed(2)}</Text> MAD
            </Text>
            <Text style={styles.connectButtonText}>
              Montant promotion : <Text
              style={[styles.rowfooter, {fontWeight: 'bold'}]}>{(15.25 * 0.30).toFixed(2)}</Text> MAD
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity  onPress={() => navigation.navigate('Profile')} style={styles.navItem}>
              <Image source={require('../assets/images/vector/printer.png')} style={styles.pdf} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => setShowPopupOK(true)}>
              <Image source={require('../assets/images/vector/plus.png')} style={styles.pdf} />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('Profile')} style={styles.navItem}>
              <Image source={require('../assets/images/vector/valid.png')} style={styles.pdf} />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>

      {/*<View style={styles.rowfooter}>*/}
      {/*    <View>*/}
      {/*        <Text style={styles.connectButtonText}>*/}
      {/*            Montant payé : <Text style={[styles.rowfooter, {fontWeight: 'bold'}]}>{15.25}</Text> MAD*/}
      {/*        </Text>*/}
      {/*        <Text style={styles.connectButtonText}>*/}
      {/*            Montant Timbre : <Text*/}
      {/*            style={[styles.rowfooter, {fontWeight: 'bold'}]}>{(15.25 * 0.0025).toFixed(2)}</Text> MAD*/}
      {/*        </Text>*/}
      {/*        <Text style={styles.connectButtonText}>*/}
      {/*            Montant promotion : <Text*/}
      {/*            style={[styles.rowfooter, {fontWeight: 'bold'}]}>{(15.25 * 0.30).toFixed(2)}</Text> MAD*/}
      {/*        </Text>*/}
      {/*    </View>*/}
      {/*    <View style={[styles.rowfooter, {alignSelf: 'flex-end'}]}>*/}
      {/*        <TouchableOpacity style={styles.connectButton} onPress={() => router.push('/checkout')}>*/}
      {/*            <Image source={require('../assets/images/vector/save.png')} style={styles.save}/>*/}
      {/*        </TouchableOpacity>*/}
      {/*        <TouchableOpacity style={styles.connectButton} onPress={() => setShowPopupOK(true)}>*/}
      {/*            <Text style={styles.addButtonText}>+</Text>*/}
      {/*        </TouchableOpacity>*/}
      {/*    </View>*/}
      {/*</View>*/}
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
    marginRight: 3
  },

  cardBodyCol2: {
    flex: 2,
    flexDirection: 'row',
  },
  cardHeader: {
    marginHorizontal:5,
    backgroundColor: '#70B821',
    paddingHorizontal: 5,
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
  container_button: {
    flex: 0.1,
    alignItems: 'flex-end'
  },
  clientMatricule: {
    fontSize: 13,
    fontWeight: '300',
    color: '#000000',
    flex: 1.600
  },
  save: {width: 25, height: 25, resizeMode: 'contain', margin: 8},

  cardBody: {
    marginHorizontal:5,
    backgroundColor: 'white',
    padding: 5,
    borderWidth: 2,
    borderColor: '#70B821',
    paddingHorizontal: 15,
  },
  group13: {width: 23, height: 23, position: 'absolute', left: 2.5, zIndex: 1},
  circleContainer: {width: 40, height: 40, alignItems: 'center', justifyContent: 'center'},
  circle: {width: 30, height: 30, alignItems: 'center', justifyContent: 'center', position: 'relative'},
  containerpopup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    width: 347,
    backgroundColor: '#FFFFFF',
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#707070',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },

  titlepopup: {
    fontFamily: 'Geologica',
    fontWeight: 'bold',
    fontSize: 19,
    color: '#202020',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitlepopup: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000000',
    marginTop: 12,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonpopup: {
    width: 163,
    height: 40,
    backgroundColor: '#E7E8EB',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextpopup: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Geologica',
  },
  buttonContainer: {
    flexDirection: 'row',  // Align items horizontally
    alignItems: 'center',  // Center items vertically
    // Add margin to avoid screen edges
  },
  bubblesContainer: {position: 'absolute', width: '120%', height: 300},
  header: {fontFamily: 'Roboto', flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 5},
  logo: {width: 25, height: 25, resizeMode: 'contain', marginRight: 8},
  headerTitle: {
    fontFamily: 'Geologica',
    fontSize: 20,
    fontWeight: '600',
    color: '#202020',
    marginBottom: 10,
    marginTop: 10
  },
  subtitle: {fontSize: 14, color: '#202020'},
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
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Geologica',
    marginLeft: 10,
  },
  connectAdd: {
    backgroundColor: '#4A90E2',
    borderRadius: 40,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  addButtonText: {color: '#fff', fontSize: 25, fontFamily: 'Roboto', fontWeight: 'bold'},
  connectButtonTextPromo: {color: '#fba3a3', fontSize: 16, fontFamily: 'Roboto'},
  creditText: {
    fontFamily: 'Geologica',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: -0.18,
    color: '#004CFF',
  },
  validContainer: {
    backgroundColor: '#FFD2D2',
    borderRadius: 4,
    borderColor: '#004CFF',
    borderWidth: 1,
    padding: 2,
    width: 100,
    height: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  validText: {
    fontFamily: 'Geologica',
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: -0.11,
    color: '#000000',
  },
  divider: {
    height: 1,
    backgroundColor: '#004CFF',
    marginHorizontal: 10,
    marginTop: 2,
  },
  content: {
    paddingHorizontal: 29,
    marginTop: 4,
  },
  giftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },

  input1: {
    fontSize: 14,
    flex: 2,
    padding: 0
  },

  header1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    borderBottomWidth: 0.5,
    marginTop: 10,
    marginLeft: 20,
    fontFamily: 'Geologica',

  },
  logo1: {
    width: 80,
    height: 40,
    resizeMode: 'contain'
  },
  headerTitle1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004CFF',
    fontFamily: 'Geologica',

  },
  subtitle1: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Geologica',

  },
  creditText1: {
    marginTop: 3,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Geologica',

  },
  validContainer1: {
    backgroundColor: '#FFD2D2',
    borderRadius: 4,
    borderColor: '#004CFF',
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 10
  },
  validText1: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000'
  },
  content1: {
    width: '90%',
    marginTop: 12,
    marginLeft: 30
  },
  giftSection1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 5,
  },
  giftIcon1: {
    width: 17,
    height: 17,
  },
  giftTitle1: {
    fontFamily: 'Geologica',
    fontSize: 14,
    fontWeight: '300',
    color: '#202020',
    flex: 2
  },
  bottomSection1: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  discountText1: {
    fontSize: 14,
    fontFamily: 'Geologica',
    color: '#000'
  },
  applyButton1: {
    backgroundColor: '#ff0000',
    borderRadius: 6,
    paddingVertical: 3,
    paddingHorizontal: 20,
    marginRight: 10
  },
  applyText1: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF'
  },
  clientContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14
  },
  clientBank: {fontSize: 14, fontWeight: 'bold', color: '#000000',fontFamily: 'Geologica',},
  clientTransaction: {fontSize: 14, fontWeight: '400', color: '#6b6b6b', marginTop: 4,fontFamily: 'Geologica',},
  clientAmount: {fontSize: 14, fontWeight: '400', color: '#363062',fontFamily: 'Geologica',},
  clientItem: {
    width: '100%',
    backgroundColor: '#d9e4ff',

    marginBottom: 8
  },
  containerClinet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },

});

export default CheckoutScreens;
