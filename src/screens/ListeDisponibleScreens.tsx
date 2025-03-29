import React, {useEffect, useMemo, useState} from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Animated, Easing,
} from "react-native";

import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../Types/types.ts';


const ListeDisponibleScreens = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [tableData, setTableData] = useState([
    {
      id: 101,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 1500,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 102,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 103,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 104,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 105,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 106,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 107,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 108,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 109,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 110,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 122,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 111,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 112,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 113,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 114,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 115,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 116,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 117,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 118,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 119,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 120,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },
    {
      id: 121,
      article: 'PRS UP POM1L PRS',
      caisse: 0,
      qty: 0,
      fraction: 0,
      prix: 10,
      total: 0,
      conversion: 35,
      perte: 0
    },

  ]);
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
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../assets/images/logo/logo_app.png')} style={styles.logo}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>LISTE DISPONIBLE</Text>

      </View>
      <View style={styles.headerContainer_f}>

        {/*<TouchableOpacity onPress={sortDataArticle}>*/}
        {/*    <Image source={require('../assets/images/vector/sort.png')} style={styles.icons}/>*/}
        {/*</TouchableOpacity>*/}
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

        <Text style={[styles.headerText_2]}>CAISSE</Text>
        <Text style={[styles.headerText_3]} onPress={sortData}>QTE</Text>

        <Text style={[styles.headerText_4]}>FRACTION</Text>
        <Text style={[styles.headerText_5]}>PERTE</Text>
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
            <Text style={[styles.cell1]}>{item.article}</Text>
            <Text style={[styles.cell2]}>{item.caisse}</Text>
            <Text style={[styles.cell3]}>{item.qty}</Text>
            <Text style={[styles.cell4]}>{item.fraction}</Text>
            <Text style={[styles.cell5]}>{item.perte}</Text>
          </View>
        ))}
      </KeyboardAwareScrollView>

      <Animated.View style={[styles.navbar, {transform: [{translateY: animation}]}]}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
          <View style={{alignItems: 'flex-start', marginBottom: 50, marginLeft: 10}}>

          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.navItem}>
              <Image source={require('../assets/images/vector/printer.png')} style={styles.pdf}/>
            </TouchableOpacity>

          </View>
        </View>
      </Animated.View>
    </KeyboardAvoidingView>


  );
};

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
    marginBottom: 50,
    marginRight: 10
  },


  scrollView: {flexGrow: 1, justifyContent: "center"},
  icons: {
    height: 15, width: 15, marginLeft: 3, marginRight: 30
  },
  bubblesContainer: {position: 'absolute', width: '120%', height: 300},
  container: {flex: 1, backgroundColor: '#fff'},
  header: {flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 5},
  logo: {width: 25, height: 25, resizeMode: 'contain', marginRight: 8},
  save: {width: 25, height: 25, resizeMode: 'contain', margin: 8},
  pdf: {width: 25, height: 25, resizeMode: 'contain', margin: 8},
  headerTitle: {fontFamily: 'Geologica', fontSize: 20, fontWeight: '500', color: '#202020'},
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
  footer: {
    width: 375,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerContainer_f: {
    flexDirection: 'row',
    paddingVertical: 8,
    backgroundColor: '#4A90E2',

    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5
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
    paddingLeft: 40
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
    paddingLeft: 15
  },
  headerText_5: {
    fontSize: 12,
    fontFamily: 'Geologica',
    fontWeight: '500',
    lineHeight: 16,
    color: '#fff',
    textAlign: 'center',
    alignContent: "center",
    paddingLeft: 10
  },
  rowfooter: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginLeft: 15,
    marginRight: 15,
  },
  row: {
    marginLeft: 3,
    paddingTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
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
    marginLeft: 40
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
    marginRight: 20
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

  articleCell: {
    flexWrap: 'wrap',
    flex: 2,
    wordWrap: 'break-word',
    width: '30%'
  },


  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  connectButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 40,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Geologica',
    marginLeft: 10
  },
  connectButtonText: {
    fontSize: 14,
    fontFamily: 'Geologica',
    fontWeight: '400',
    lineHeight: 16,
    color: '#404040',


  },
});

export default ListeDisponibleScreens;

