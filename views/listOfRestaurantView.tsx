import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
export default function ListofRestaurantView() {
    return (<>
        <View style={styles.container}>
            <View style={{ paddingVertical: '5%', paddingHorizontal: '5%' }}>
                <Text style={styles.heading}>Discover</Text>
            </View>
            <View style={{flex:2, backgroundColor: 'red'}}><Icon name="location-arrow" color="#114D4D"/></View>
            <View style={{flex:2, backgroundColor: 'green'}}/>
            <View style={{flex:2, backgroundColor: 'yellow'}}/>
            <View style={{flex:2, backgroundColor: 'blue'}}/>
        </View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1 
    },
    heading: {
        fontSize: 30,
        fontWeight: "900"
    }
})