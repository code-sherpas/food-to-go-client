import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import CarouselComp from 'react-native-snap-carousel';
import CarouselItem, { SLIDER_WIDTH, ITEM_WIDTH, Item } from '../components/CarouselItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchDeals, fetchLocation, fetchRecommended } from '../redux/slices/listOfRestaurantViewSlice';


export default function ListOfRestaurantView({ navigation }: { navigation: any }) {
    const dispatch = useDispatch();
    const dealsData = useSelector((state: RootState) => state.listView.deals);
    const locationData = useSelector((state: RootState) => state.listView.location);
    const recommendedData = useSelector((state: RootState) => state.listView.recommended);
    function getListView() {
        dispatch(fetchDeals(8));
        dispatch(fetchLocation(8));
        dispatch(fetchRecommended(8));
    }
    useEffect(() => {
        getListView();
    }, [dispatch])



    const isCarousel = useRef(null);

    return (<>
        <View style={styles.container}>
            <View style={{ paddingTop: 45, paddingHorizontal: 15, marginBottom: 15 }}>
                <Text style={styles.heading}>Discover</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon name="location-arrow" color="#114D4D" />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ color: "#114D4D", fontWeight: "bold" }}>{locationData.place}</Text>
                        <Text style={{ color: "#114D4D" }} >{locationData.distance}</Text>
                    </View>
                </View>
                <View>
                    <Button
                        onPress={() => { console.log("hi") }}
                        title="Change"
                        color="#E1DFD8"
                    />
                </View>
            </View>
            <View style={{ marginBottom: 15, flexDirection: "row", paddingHorizontal: 15, paddingTop: 15, justifyContent: "space-between" }} >
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Save before it's too late</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: "#114D4D", fontWeight: "bold", marginRight: 7 }}>See all</Text>
                    <Icon name="chevron-right" color="#114D4D" />
                </View>
            </View>
            <View style={{ alignContent: "center" }}>
                <CarouselComp
                    layout='default'
                    layoutCardOffset={7}
                    ref={isCarousel}
                    data={dealsData}
                    renderItem={({ item, index }) => <CarouselItem item={item as Item} index={index} navigation={navigation} />}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                />

            </View>
            <View style={{ marginBottom: 15, flexDirection: "row", paddingHorizontal: 15, paddingTop: 15, justifyContent: "space-between" }} >
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Recommended for you</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: "#114D4D", fontWeight: "bold", marginRight: 7 }}>See all</Text>
                    <Icon name="chevron-right" color="#114D4D" />
                </View>
            </View>
            <View style={{ alignContent: "center" }}>

                <CarouselComp
                    layout='default'
                    layoutCardOffset={7}
                    ref={isCarousel}
                    data={recommendedData}
                    renderItem={({ item, index }) => <CarouselItem item={item as Item} index={index} navigation={navigation} />}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                />


            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <View style={styles.modal}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                        <Icon name="times" style={{ marginRight: 15, marginTop: 15 }} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 30 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{`How does \nToo Good To Go \nwork`}</Text>
                        <Image style={styles.image} source={{ uri: "https://tgtg-mkt-cms-prod.s3.eu-west-1.amazonaws.com/13508/TGTG_Icon_2000x1666px_RGB-%281%29.png" }} />
                    </View>
                    <View>

                    </View>
                </View>
            </View>
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
        fontWeight: "bold"
    },
    modal: {
        borderRadius: 8,
        width: 320,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: -9, height: 13 },
        shadowOpacity: 0.13,
        shadowRadius: 20,

    },
    image: {
        height: 55,
        width: 66
    }
})
