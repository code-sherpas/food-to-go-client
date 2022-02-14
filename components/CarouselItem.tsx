import React, { ReactElement } from 'react';

import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

type Item = {
    id: string,
    type: string,
    attributes: ItemAttributes,
    lastChance?: boolean,
}

type ItemAttributes = {
    store: StoreDetails,
    pack: PackDetails,
};

type StoreDetails = {
    id: string,
    profile_url: string,
    address: string,
    name: string,
};

type PackDetails = {
    id: string,
    store_id: string,
    type: string,
    quantity_in_stock: number,
    available_from: string,
    available_until: string,
    unitary_price_after_discount: {
        currency: string,
        value: number,
        unit: string,
    }
};


const CarouselItem = ({ item, index }: { item: Item, index: number }) => {
    return (
        <View style={styles.container} key={index}>
            <View>
                {item.lastChance ?
                    <Badge badgeStyle={styles.last_change_badge} text={(
                        <>
                            <Icon name="clock" color="#000" size={12} />
                            {" "}
                            <Text>Last Chance</Text>
                        </>
                    )} /> :
                    <Badge badgeStyle={styles.quantity_badge} text={`${item.attributes.pack.quantity_in_stock} left`} />}
                <Image source={{ uri: item.attributes.store.profile_url }} style={styles.image} />
                <Badge badgeStyle={styles.price_badge} textStyle={styles.price_badge_text} text={`${item.attributes.pack.unitary_price_after_discount.currency} ${item.attributes.pack.unitary_price_after_discount.value}`} />
            </View>
            <View style={{ padding: 8 }}>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.attributes.store.name}</Text>
                <Text>{item.attributes.pack.type}</Text>
                <Text style={{ color: "grey" }}>{new Date(item.attributes.pack.available_from).toDateString()}{" "} - {" "}{new Date(item.attributes.pack.available_until).toDateString()}</Text>
            </View>

        </View>
    )
}

const Badge = ({ badgeStyle, text, textStyle }: { badgeStyle: any, text: string | ReactElement, textStyle?: any }) => {
    return (
        <View style={StyleSheet.compose(styles.badge, badgeStyle)}>
            <Text style={StyleSheet.compose({ fontWeight: "bold" }, textStyle)}>{text}</Text>
        </View>
    );
};

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
    },
    image: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 100
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        backgroundColor: "#DFAE52",
        borderRadius: 5,
    },
    quantity_badge: {
        position: "absolute",
        zIndex: 5,
        top: 5,
        left: 5,
        backgroundColor: "#DFAE52",
    },
    last_change_badge: {
        position: "absolute",
        zIndex: 5,
        top: 5,
        left: 5,
        backgroundColor: "#C65F5E"
    },
    price_badge: {
        position: "absolute",
        zIndex: 5,
        bottom: 5,
        right: 5,
        backgroundColor: "#14463D",
    },
    price_badge_text: {
        color: "white",
    }

})
export default CarouselItem;
