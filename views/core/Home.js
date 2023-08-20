import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../../assets/styles/HomeStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import HandlePresensi from "../../api/HandlePresensi";

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const p = 0.017453292519943295;
  const c = Math.cos;
  const a =
    0.5 -
    c((lat2 - lat1) * p) / 2 +
    (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;
  return 12742 * Math.asin(Math.sqrt(a));
};

export default function Home({ navigation }) {
  const categoryMasuk = "masuk";
  const categoryKeluar = "keluar";
  const [showMap, setShowMap] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  const getCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.warn("Location permission denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setUserLocation({ latitude, longitude });
    } catch (error) {
      console.warn("Error while getting current location:", error);
    }
  };

  useEffect(() => {
    const checkLocationPermissionsAndFetchLocation = async () => {
      try {
        let { status } = await Location.getForegroundPermissionsAsync();
        if (status === "granted") {
          setShowMap(true);
          getCurrentLocation();
        } else {
          let { status: newStatus } =
            await Location.requestForegroundPermissionsAsync();
          if (newStatus === "granted") {
            setShowMap(true);
            getCurrentLocation();
          } else {
            console.warn("Location permission denied");
          }
        }
      } catch (error) {
        console.warn("Error while checking location permissions:", error);
      }
    };

    checkLocationPermissionsAndFetchLocation();
  }, []);

  // Customize map and distance map
  const distanceToReference = userLocation
    ? calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        3.57239,
        98.699212
      )
    : null;

  const isWithinTolerance = (distance) => {
    return distance !== null && distance <= 0.2;
  };

  const handleMapRefresh = () => {
    getCurrentLocation();
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.gmapContainer}>
          {showMap && userLocation ? (
            <MapView
              style={styles.gmap}
              region={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                coordinate={{
                  latitude: userLocation.latitude,
                  longitude: userLocation.longitude,
                }}
              />
            </MapView>
          ) : (
            <Text style={{ color: "#fff" }}>Koneksi Map Bermasalah</Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.refreshButton}
          onPress={handleMapRefresh}
        >
          <Text style={styles.refreshButtonText}>Refresh Map</Text>
        </TouchableOpacity>

        <View style={styles.disclaimer}>
          <Text style={{ textAlign: "center" }}>
            Presensi Hanya Dapat Dilakukan Di lingkungan SMK Telkom 2 Medan
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={[
              styles.btn,
              {
                backgroundColor: "green",
                opacity: isWithinTolerance(distanceToReference) ? 1 : 0.5,
              },
            ]}
            disabled={!isWithinTolerance(distanceToReference)}
            onPress={() => HandlePresensi(categoryMasuk, navigation)}
          >
            <Text style={styles.btnText}>Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btn,
              {
                backgroundColor: "#AF1F22",
                opacity: isWithinTolerance(distanceToReference) ? 1 : 0.5,
              },
            ]}
            disabled={!isWithinTolerance(distanceToReference)}
            onPress={() => HandlePresensi(categoryKeluar, navigation)}
          >
            <Text style={styles.btnText}>Pulang</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.disclaimer2}>
          <Text style={{ textAlign: "center", color: "#ABABAB" }}>
            Pastikan GPS Kamu Berjalan Normal
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
