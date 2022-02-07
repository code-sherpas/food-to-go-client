import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import MapView from 'react-native-maps';

export default function AppMapView() {

    return (
        <>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 2 }}>
                    <View style={{ height: 3, width: 20 }}>
                        <Text style={styles.headingtop}>Choose a location to discover what's available</Text>
                    </View>
                </View>
                <View style={{ width: 100, height: 70 }}>
                    <MapView
                        style={styles.mapStyle}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width:  100}}>
                    <View style={{ flexDirection: 'column', width: 100, alignItems: 'center' }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Icon name="location-arrow" color="#114D4D" />
                            <Text style={styles.uselocation}>Use my current location</Text>
                        </View>
                        <View style={styles.bottombutton}>
                            <Button
                                onPress={() => { console.log("hi") }}
                                title="Change"
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
    mapStyle: {
        height: 500,
        width: 100,
    },
    uselocation: {
        color: '#114D4D',
        fontWeight: 'bold',
        marginLeft: 0.5,
    },
    bottombutton: {
        width: 80,
        marginTop: 1.5
    }
});
