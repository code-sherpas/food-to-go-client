import React from 'react';
import { View, StyleSheet, Text, Button, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import MapView, { Marker } from 'react-native-maps';

export default function AppMapView() {
    const dimensions = Dimensions.get('window');
    const mapHeight = Math.round(dimensions.height * 11 / 16);
    const mapWidth = dimensions.width;


    return (
        <>
            <View style={styles.container}>
                <View style={{ height: Math.round(dimensions.width * 5 / 16), flexDirection: 'row', justifyContent: 'center', paddingTop: 60, paddingBottom: 20 }}>
                    <View style={{ width: Math.round(dimensions.width * 3 / 4) }}>
                        <Text style={styles.headingtop}>Choose a location to discover what's available</Text>
                    </View>
                </View>
                <View style={{}}>
                    <MapView
                        style={{ width: mapWidth, height: mapHeight }}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} pinColor="#FF0000" />
                    </MapView>
                </View>
                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', width: mapWidth }}>
                    <View style={{ flexDirection: 'column', width: mapWidth, alignItems: 'center', paddingTop: 50 }}>
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
