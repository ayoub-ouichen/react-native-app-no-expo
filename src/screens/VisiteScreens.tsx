import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  View, Image,
  Animated, Easing, TextInput, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Types/types.ts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const VisiteScreens= ({ route }: { route: any }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { matricule, clientName } = route.params; // Accessing the passed parameters

  const [printing, setPrinting] = useState(false);

  const printFacture = async () => {
    setPrinting(true);
    // const service = new ImpressionService();
    // try {
    //     await service.imprimerFacture(
    //         { ID_FACTURE: 123, total: 50 },
    //         [{ nom: 'Produit A', prix: 20 }, { nom: 'Produit B', prix: 30 }],
    //         { nom: 'John Doe' }
    //     );
    // } catch (error) {
    // }
    setPrinting(false);
  };

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

  const toggleNavbar = () => {
    setActive(!active);
  };

  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [total, setTotal] = useState(0);
  const [totalPromo, setTotalPromo] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [tableData, setTableData] = useState([
    {
      id: 100,
      article: 'JUTOS ORG 150',
      disponible: 150,
      qty: 0,
      perte: 0,
      prix: 15.5,
      promo: 30,
      total: 0,
      totalpromo: 0
    },
    {
      id: 101,
      article: 'JUTOS MANG 150 ',
      disponible: 150,
      qty: 0,
      perte: 0,
      prix: 10.7,
      promo: 30,
      total: 0,
      totalpromo: 0
    },
    {
      id: 102,
      article: 'JUTOS MANG 150 ',
      disponible: 150,
      qty: 0,
      perte: 0,
      prix: 10.7,
      promo: 0,
      total: 0,
      totalpromo: 0
    },
    {
      id: 103,
      article: 'JUTOS MANG 150 ',
      disponible: 150,
      qty: 0,
      perte: 0,
      prix: 10.7,
      promo: 30,
      total: 0,
      totalpromo: 0
    },
    {
      id: 104,
      article: 'JUTOS MANG 150 ',
      disponible: 150,
      qty: 0,
      perte: 0,
      prix: 10.7,
      promo: 30,
      total: 0,
      totalpromo: 0
    },
    {
      id: 105,
      article: 'JUTOS MANG 150 ',
      disponible: 150,
      qty: 0,
      perte: 0,
      prix: 10.7,
      promo: 0,
      total: 0,
      totalpromo: 0
    },
    {
      id: 106,
      article: 'JUTOS MANG 150 ',
      disponible: 150,
      qty: 0,
      perte: 0,
      prix: 10.7,
      promo: 30,
      total: 0,
      totalpromo: 0
    },
    {
      id: 107,
      article: 'JUTOS MANG 150 ',
      disponible: 150,
      qty: 0,
      perte: 0,
      prix: 10.7,
      promo: 30,
      total: 0,
      totalpromo: 0
    },
    {
      id: 108,
      article: 'JUTOS MANG 150 ',
      disponible: 150,
      qty: 0,
      perte: 0,
      prix: 10.7,
      promo: 0,
      total: 0,
      totalpromo: 0
    },
    {
      id: 109,
      article: 'JUTOS MANG 150 ',
      disponible: 150,
      qty: 0,
      perte: 0,
      prix: 10.7,
      promo: 30,
      total: 0,
      totalpromo: 0
    },
    {
      id: 110,
      article: 'JUTOS MANG 150 ',
      disponible: 150,
      qty: 0,
      perte: 0,
      prix: 10.7,
      promo: 30,
      total: 0,
      totalpromo: 0
    },
    {
      id: 111,
      article: 'JUTOS MANG 150 ',
      disponible: 150,
      qty: 0,
      perte: 0,
      prix: 10.7,
      promo: 30,
      total: 0,
      totalpromo: 0
    },
    {
      id: 112,
      article: 'JUTOS MANG 150 ',
      disponible: 150,
      qty: 0,
      perte: 0,
      prix: 10.7,
      promo: 30,
      total: 0,
      totalpromo: 0
    },
    {
      id: 113,
      article: 'JUTOS MANG 150 ',
      disponible: 150,
      qty: 0,
      perte: 0,
      prix: 10.7,
      promo: 30,
      total: 0,
      totalpromo: 0
    },
    {
      id: 114,
      article: 'JUTOS MANG 150 ',
      disponible: 150,
      qty: 0,
      perte: 0,
      prix: 10.7,
      promo: 30,
      total: 0,
      totalpromo: 0
    },
    {
      id: 115,
      article: 'JUTOS MANG 150 ',
      disponible: 150,
      qty: 0,
      perte: 0,
      prix: 10.7,
      promo: 30,
      total: 0,
      totalpromo: 0
    },

  ]);

  const [focusedItemId, setFocusedItemId] = useState<number | null>(null);
  const filteredData = useMemo(() => {
    return tableData.filter(item =>
      item.article.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, tableData]);


  const sortData = () => {
    const sortedData = [...tableData].sort((a, b) => {
      const order = sortOrder === 'asc' ? 1 : -1;
      return (Number(a.qty) - Number(b.qty)) * order;
    });
    setTableData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const inputRefsPerte = useRef<Record<number, TextInput | null>>({});
  const inputRefsQty = useRef<Record<number, TextInput | null>>({});

  const handleSubmitEditingPerte = (index: number) => {
    if (inputRefsPerte.current[index + 1]) {
      inputRefsPerte.current[index + 1]?.focus();
    }

    setTableData(prevData => {
      const newData = prevData.map(item =>
        item.id === index
          ? {
            ...item,
            total: (item.qty - item.perte) * item.prix - (item.qty - item.perte) * item.prix * (item.promo / 100),
            totalpromo: (item.qty - item.perte) * item.prix * (item.promo / 100),
          }
          : item
      );

      const totalSum = newData.reduce((acc, item) => acc + (item.total || 0), 0);
      const totalPromo = newData.reduce((acc, item) => acc + (item.totalpromo || 0), 0);
      setTotal(totalSum);
      setTotalPromo(totalPromo);

      return newData;
    });
  };


  const handleSubmitEditingQty = (index: number) => {
    if (inputRefsQty.current[index + 1]) {
      inputRefsQty.current[index + 1]?.focus();
    }

    setTableData(prevData => {
      const newData = prevData.map(item =>
        item.id === index
          ? {
            ...item,
            total: (item.qty - item.perte) * item.prix - (item.qty - item.perte) * item.prix * (item.promo / 100),
            totalpromo: (item.qty - item.perte) * item.prix * (item.promo / 100),
          }
          : item
      );

      const totalSum = newData.reduce((acc, item) => acc + (item.total || 0), 0);
      const totalPromo = newData.reduce((acc, item) => acc + (item.totalpromo || 0), 0);
      setTotal(totalSum);
      setTotalPromo(totalPromo);

      return newData;
    });
  };

  const sortDataArticle = () => {
    const sortedData = [...tableData].sort((a, b) => {
      const order = sortOrder === 'asc' ? 1 : -1;
      return a.article.localeCompare(b.article) * order;
    });

    setTableData(sortedData);
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image source={require('../assets/images/vector/bubbles.png')} style={styles.bubblesContainer}/>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
          <Image source={require('../assets/images/logo/logo_copag.png')} style={styles.logo}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{clientName}</Text>

      </View>
      <View style={styles.headerContainer_f}>
        <Text onPress={sortDataArticle} style={styles.headerText_1}>ARTICLE</Text>
        <TouchableOpacity onPress={() => setIsSearching(true)}>
          {!isSearching ? (
            <Image source={require('../assets/images/vector/search.png')} style={styles.icons}/>
          ) : (
            <TextInput
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Nom de l'article"
              placeholderTextColor="#d2d2d2"
              autoFocus
              onBlur={() => setIsSearching(false)}
            />
          )}
        </TouchableOpacity>

        <Text style={[styles.headerText_2]}>DISPO</Text>
        <Text style={[styles.headerText_3]} onPress={sortData}>QTY</Text>
        <Text style={[styles.headerText_4]}>PERTE</Text>
        <Text style={[styles.headerText_5]}>PRIX</Text>
      </View>
      <KeyboardAwareScrollView
        extraScrollHeight={10} // Ajuste pour mieux voir les inputs
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="none" // Essaye "none" au lieu de "on-drag"
        contentContainerStyle={{flexGrow: 1}}
      >
        {filteredData.map((item) => (
          <View key={item.id} style={styles.row}>
            <Text
              style={[
                styles.cell1,
                item.promo > 0 ? {color: 'red'} : {}
              ]}
            >
              {item.article}
            </Text>
            <Text style={[styles.cell2]}>{item.disponible}</Text>

            <TextInput
              style={[styles.cell3]}
              value={item.qty.toString()}
              key={"QTY" + item.id.toString()}
              keyboardType="numeric"
              onSubmitEditing={() => handleSubmitEditingQty(item.id)} // Move to the next input field
              // ref={(el) => (inputRefsQty.current[item.id] = el)}
              onChangeText={(text) => {
                setTableData(prevData =>
                  prevData.map(data =>
                    data.id === item.id
                      ? {...data, qty: Number(text) || 0} // Convertir text en number
                      : data
                  )
                );
              }}
              onFocus={() => setFocusedItemId(item.id)} // Store focused item ID
              onBlur={() => setFocusedItemId(null)} // Clear when unfocused
              blurOnSubmit={false}
              selectTextOnFocus={true}
            />
            <TextInput
              style={[styles.cell4]}
              value={item.perte.toString()}
              keyboardType="numeric"
              key={"PERTE" + item.id.toString()}
              onSubmitEditing={() => handleSubmitEditingPerte(item.id)} // Move to the next input field
              // ref={(el) => (inputRefsPerte.current[item.id] = el)}
              onChangeText={(text) => {
                setTableData(prevData =>
                  prevData.map(data =>
                    data.id === item.id
                      ? {...data, perte: Number(text) || 0} // Convertir text en number
                      : data
                  )
                );
              }}

              onFocus={() => setFocusedItemId(item.id)} // Store focused item ID
              onBlur={() => setFocusedItemId(null)} // Clear when unfocused
              blurOnSubmit={false}
              selectTextOnFocus={true} // Select all text when entering the cell
            />
            <Text style={[styles.cell5]}>{item.prix}</Text>
          </View>
        ))}
      </KeyboardAwareScrollView>
      <Animated.View style={[styles.navbar, { transform: [{ translateY: animation }] }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <View style={{ alignItems: 'flex-start', marginBottom: 50,marginLeft:10 }}>
            <Text style={styles.connectButtonText}>
              Montant payé : <Text style={[styles.rowfooter, { fontWeight: 'bold' }]}>{total.toFixed(2)}</Text> MAD
            </Text>
            <Text style={styles.connectButtonText}>
              Montant Timbre : <Text style={[styles.rowfooter, { fontWeight: 'bold' }]}>{(total * 0.0025).toFixed(2)}</Text> MAD
            </Text>
            <Text style={styles.connectButtonText}>
              Montant promotion : <Text style={[styles.rowfooter, { fontWeight: 'bold' }]}>{totalPromo.toFixed(2)}</Text> MAD
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={printFacture} style={styles.navItem}>
              <Image source={require('../assets/images/vector/printer.png')} style={styles.pdf} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Checkout', { matricule, clientName })} style={styles.navItem}>
              <Image source={require('../assets/images/vector/valid.png')} style={styles.pdf} />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>

    </KeyboardAvoidingView>


  );


};

export default VisiteScreens;


const styles = StyleSheet.create({
  navbar: {
    marginTop:-50,        bottom: 50,
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
    marginBottom: 20,
    marginRight:10
  },



  scrollView: {flexGrow: 1, justifyContent: "center"},
  icons: {
    height: 15, width: 15, marginLeft: 3, marginRight: 30
  },
  bubblesContainer: {position: 'absolute', width: '120%', height: 300},
  container: {flex: 1, backgroundColor: '#fff'},
  header: {flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 5},
  logo: {width: 25, height: 25, resizeMode: 'contain', marginRight: 8},

  pdf: {width: 25, height: 25, resizeMode: 'contain', marginBottom: 30},
  headerTitle: {
    fontFamily: 'Geologica',
    fontSize: 20,
    fontWeight: '600',
    color: '#202020',
    marginBottom: 10,
    marginTop: 10
  },
  subtitle: {fontSize: 14, color: '#202020', marginTop: 5},
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#004bfe',
    borderRadius: 45,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  searchInput: {
    height: 20,
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    textAlignVertical: 'center',
    lineHeight: 15,
  },
  // footer: {
  //     width: 375,
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     alignItems: 'center',
  //     backgroundColor: '#f9f9f9',
  //     paddingHorizontal: 20,
  //     paddingVertical: 10,
  // },
  headerContainer_f: {
    flexDirection: 'row',
    paddingVertical: 8,
    backgroundColor: '#4A90E2',

    alignItems: 'center',
    justifyContent: 'space-between',

  },
  headerText_1: {
    fontSize: 12,
    fontFamily: 'Geologica',
    fontWeight: 'bold',
    lineHeight: 16,
    color: '#fff',
    textAlign: 'center',
    alignContent: "center",
    paddingLeft: 10
  },
  headerText_2: {
    fontSize: 12,
    fontFamily: 'Geologica',
    fontWeight: '500',
    lineHeight: 16,
    color: '#fff',
    textAlign: 'center',
    alignContent: "center",
    paddingLeft: 0
  },
  headerText_3: {
    fontSize: 12,
    fontFamily: 'Geologica',
    fontWeight: 'bold',
    lineHeight: 16,
    color: '#fff',
    textAlign: 'center',
    alignContent: "center",
    paddingLeft: 15
  },
  headerText_4: {
    fontSize: 12,
    fontFamily: 'Geologica',
    fontWeight: '500',
    lineHeight: 16,
    color: '#fff',
    textAlign: 'center',
    alignContent: "center",
    paddingLeft: 15, paddingRight: 10
  },
  headerText_5: {
    fontSize: 12,
    fontFamily: 'Geologica',
    fontWeight: '500',
    lineHeight: 16,
    color: '#fff',
    textAlign: 'center',
    alignContent: "center",
    paddingRight: 10
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
  row: {
    marginLeft: 3,
    marginTop: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  cell1: {
    alignItems: "center", alignContent: "center"
    , textAlign: 'left',
    fontSize: 12,
    fontFamily: 'Geologica',
    fontWeight: '400',
    lineHeight: 16,
    color: '#404040',
    marginTop: -10,
    marginLeft: 10,
    flex: 3, // Augmenter ce nombre pour plus d'espace
  },
  cell2: {
    alignItems: "center", alignContent: "center"
    , textAlign: 'left',
    flex: 1,
    fontSize: 12,
    fontFamily: 'Geologica',
    fontWeight: 'bold',
    lineHeight: 16,
    color: '#404040',
    marginTop: -10,
    marginLeft: 0
  }, cell3: {
    alignItems: "center", alignContent: "center"
    , textAlign: 'left',
    flex: 1,
    fontSize: 12,
    fontFamily: 'Geologica',
    fontWeight: 'bold',
    lineHeight: 16,
    color: '#404040',
    marginTop: -10,
    marginRight: 0,
    marginLeft: 10
  }, cell4: {
    alignItems: "center"
    , alignContent: "center",
    flex: 1,
    fontSize: 12,
    fontFamily: 'Geologica',
    fontWeight: '400',
    lineHeight: 16,
    color: '#404040',
    marginTop: -10,
  },
  cell5: {
    alignItems: "center"
    , alignContent: "center",
    flex: 1,
    fontSize: 12,
    fontFamily: 'Geologica',
    fontWeight: '400',
    lineHeight: 16,
    color: '#404040',
    marginTop: -10,
  },


  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  connectButton: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Geologica',
  },
  connectButtonText: {
    fontSize: 12,
    fontFamily: 'Geologica',
    fontWeight: '400',
    lineHeight: 16,
    color: '#ffffff',
  },
});
