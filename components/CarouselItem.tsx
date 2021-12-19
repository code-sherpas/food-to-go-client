import React from 'react';

import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

type Item = {
    restaurantName: string,
    foodType: string,
    time: string,
    distance: string,
    imgUrl: string
}

const CarouselItem = ({item, index}: {item: Item, index: number}) => {
    return (
        <View style={styles.container} key={index}>
            <Image source={{ uri: item.imgUrl }} style={styles.image} />

            <Text>{item.restaurantName}</Text>
            <Text>{item.foodType}</Text>
            <Text>{item.time}</Text>
            <Text>{item.distance}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 40,
        elevation: 7,
    },
    image: {
        width: ITEM_WIDTH,
        height: 300
    },

})
export default CarouselItem;
