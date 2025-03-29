import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, NativeEventEmitter, NativeModules, PermissionsAndroid, Platform } from 'react-native';
import BleManager, { Peripheral } from 'react-native-ble-manager';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const ImpressionScreen = () => {
  const [devices, setDevices] = useState<Peripheral[]>([]);
  const [connectedDevice, setConnectedDevice] = useState<Peripheral | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    BleManager.start({ showAlert: false })
      .then(() => console.log("BLE Manager started"))
      .catch(err => console.log("BLE Error:", err));

    // Request Bluetooth permissions on Android
    requestPermissions();

    getBondedDevices();

    return () => {
      bleManagerEmitter.removeAllListeners('BleManagerDiscoverPeripheral');
      bleManagerEmitter.removeAllListeners('BleManagerStopScan');
    };
  }, []);

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      ]);
    }
  };

  const getBondedDevices = async () => {
    try {
      const bondedDevices: Peripheral[] = await BleManager.getBondedPeripherals();
      console.log(bondedDevices);
      setDevices(bondedDevices);
    } catch (error) {
      console.error("Error fetching bonded devices:", error);
    }
  };

  const connectToDevice = async (device: Peripheral) => {
    try {
      await BleManager.connect(device.id);
      await BleManager.retrieveServices(device.id); // Retrieve services and characteristics

      setConnectedDevice(device);
      setIsConnected(true);
      console.log(`Connected to ${device.name}`);
    } catch (error) {
      console.error("Connection failed:", error);
      setIsConnected(false);
    }
  };

  const printText = async () => {
    if (!connectedDevice || !isConnected) {
      console.log("No printer connected!");
      return;
    }

    try {

      const text = "^XA\r\n" +
        "^FO5,120^A0N,30,30^FDAgence : AGADIR^FS\r\n" +
        "^XZ";


      // Convert text to an array of bytes (Uint8Array)
      const data = new TextEncoder().encode(text);

      // Convert Uint8Array to an array of numbers
      const dataArray = Array.from(data);

      // Discover services and characteristics before writing to the printer
      const services = await BleManager.retrieveServices(connectedDevice.id);
      console.log("Services:", services);

      const serviceUUID = '38EB4A80-C570-11E3-9507-0002A5D5C51B'; // Example service UUID
      const characteristicUUID = '38EB4A82-C570-11E3-9507-0002A5D5C51B'; // Example characteristic UUID



      // Send the data to the printer
      await BleManager.write(
        connectedDevice.id,
        serviceUUID,
        characteristicUUID,
        dataArray
      );
      console.log("Print sent successfully!");
    } catch (error) {
      console.error("Print failed:", error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Refresh Devices" onPress={getBondedDevices} />
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name || "Unknown"} ({item.id})</Text>
            <Button title={`Connect to ${item.name}`} onPress={() => connectToDevice(item)} />
          </View>
        )}
      />
      {connectedDevice && isConnected && (
        <Button title="Print Text" onPress={printText} />
      )}
    </View>
  );
};

export default ImpressionScreen;
