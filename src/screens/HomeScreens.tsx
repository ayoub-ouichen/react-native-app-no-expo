import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../Types/types.ts';


export const Home = () => {


  const [matricule, setMatricule] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.flexContainer}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Background & Logo */}
            <Image source={require('../assets/images/vector/bubble.png')} style={styles.bubbles} />
            <Image source={require('../assets/images/logo/logo_app.png')} style={styles.appLogo} />

            {/* Login Form */}
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                placeholder="Matricule"
                placeholderTextColor="#d2d2d2"
                value={matricule}
                onChangeText={setMatricule}
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#d2d2d2"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />

              <TouchableOpacity style={styles.connectButton} onPress={() => navigation.navigate('ClientList')}>
                <Text style={styles.connectButtonText}>Connect</Text>
              </TouchableOpacity>
            </View>

            <Image source={require('../assets/images/vector/bar_line.png')} style={styles.bottomBar} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flexContainer: { flex: 1 },
  scrollContainer: { flexGrow: 1, justifyContent: 'center' },
  container: { flex: 1, backgroundColor: '#ffffff', alignItems: 'center' },
  bubbles: { position: 'absolute', width: 822, height: 1121, top: -180, left: -199 },
  appLogo: { width: 225, height: 225, marginVertical: 50, resizeMode: 'contain' },
  formContainer: { width: '85%', marginTop: 40 },
  input: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 16,
    fontSize: 14,
    color: '#000',
  },
  connectButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  connectButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  bottomBar: { width: 134, height: 5, marginTop: 20 },
});
