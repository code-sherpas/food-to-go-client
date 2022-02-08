import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, Dimensions, Platform } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import MapView, { Marker } from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

export default function AppMapView() {

    const [selectedValue, setSelectedValue] = useState("10 km");

    const [location, setLocation] = useState<any>(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const dimensions = Dimensions.get('window');
    const mapHeight = Math.round(dimensions.height * 11 / 16);
    const mapWidth = dimensions.width;


    useEffect(() => {
        (async () => {
            if (Platform.OS === 'android' && !Constants.isDevice) {
                setErrorMsg(
                    'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
                );
                return;
            }
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
    return (
        <>
            <View style={styles.container}>
              
                <View style={{ height: Math.round(dimensions.width * 5 / 16), flexDirection: 'row', justifyContent: 'center', paddingTop: 60, paddingBottom: 20 }}>
                    <View style={{ width: Math.round(dimensions.width * 3 / 4) }}>
                        <Text style={styles.headingtop}>Choose a location to discover what's available</Text>
                    </View>
                </View>
                <View>
                    {(location != null) ? <MapView
                        style={{ width: mapWidth, height: mapHeight }}
                        initialRegion={{ latitude: location.latitude, longitude: location.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                    >
                        <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} pinColor="#FF0000" />
                    </MapView> : <></>}

                </View>
                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', width: mapWidth }}>
                    <View style={{ flexDirection: 'column', width: mapWidth, alignItems: 'center', paddingTop: 40 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon name="location-arrow" color="#114D4D" />
                            <Text style={styles.uselocation}>Use my current location</Text>
                        </View>
                        <View style={{ width: Math.round(dimensions.width * 3 / 4), marginTop: 15 }}>
                            <Button
                                onPress={() => { console.log("hi") }}
                                title="Choose this location"
                                color="#114D4D"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    headingtop: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
    uselocation: {
        color: '#114D4D',
        fontWeight: 'bold',
        marginLeft: 10,
    },
});
