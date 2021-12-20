import React from 'react';

import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

type Item = {
    restaurantName: string,
    foodType: string,
    time: string,
    distance: string,
    imgUrl: string
}

const CarouselItem = ({ item, index }: { item: Item, index: number }) => {
    return (
        <View style={styles.container} key={index}>
            <Image source={{ uri: item.imgUrl }} style={styles.image} />
            <View style={{ padding: "0.5rem" }}>
                <Text style={{ fontWeight: "900", fontSize: "15px", marginTop: "0.5rem" }}>{item.restaurantName}</Text>
                <Text>{item.foodType}</Text>
                <Text style={{ color: "grey" }}>{item.time}{" "}.{" "}{item.distance}</Text>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 8,
        width: ITEM_WIDTH,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: -9, height: 13 },
        shadowOpacity: 0.13,
        shadowRadius: 20,
        marginBottom: "2rem"
    },
    image: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 100
    },

})
export default CarouselItem;
