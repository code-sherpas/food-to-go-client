import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, ImageBackground, Text, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { RootState } from "../redux/store";
import { fetchRestaurantDetails } from "../redux/slices/restaurantSlice";

export default function RestaurantSlice() {
  const dispatch = useDispatch();
  const restaurant = useSelector((state: RootState) => state.restaurant);

  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.height * 4 / 16);
  const width = dimensions.width;

  function displayRestaurantBanner() {
    return (
      <>
        <View style={{ height: imageHeight }}>
          <ImageBackground
            source={{
              uri: restaurant.restaurant.attributes.store.banner_url,
            }}
            style={{
              width: width,
              height: Math.round(dimensions.height * 4 / 16),
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                alignContent: "center",
                marginBottom: 15,
              }}
            >
              <Icon
                name="hamburger"
                color="white"
                style={{ marginHorizontal: 10, fontSize: 20 }}
              />
              <Text style={styles.heading}>Restaurant</Text>
            </View>
          </ImageBackground>
        </View>
      </>
    )
  }

  function displayRestaurantNameAndRating() {
    return (
      <>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignContent: "center" }}>
            <Text style={styles.rating}>
              {restaurant.restaurant.attributes.store.name}
            </Text>
            <Icon style={styles.rating} name="star" color="gold" solid />
            <Text style={styles.rating}>
              {restaurant.restaurant.attributes.pack.rating}
            </Text>
          </View>
          <View>
            <Text>
              ${" "}
              {
                restaurant.restaurant.attributes.pack
                  .unitary_price_after_discount.value
              }
            </Text>
          </View>
        </View>
      </>
    )
  }

  function displayTime() {
    return (
      <>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: "row",
            alignContent: "center",
          }}
        >
          <Icon name="clock" style={{ marginRight: 10 }} />
          <Text>Today 15:00 - 16:30</Text>
        </View>
      </>
    )
  }

  function displaySaleBanner() {
    return (
      <>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            height: 35,
            padding: 5,
            backgroundColor: "#FE7376",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Sale ends soon!</Text>
        </View>
      </>
    )
  }

  function displayRestaurantAddress() {
    return (
      <>

        <View
          style={{
            borderBottomColor: "#DCE0E1",
            borderStyle: "solid",
            borderBottomWidth: 2,
            padding: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginLeft: 5,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Icon name="map-marker-alt" color="#114D4D" />
          </View>
          <View
            style={{
              height: 50,
              width: 315,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 5,
              marginLeft: 10,
              alignItems: "flex-start",
            }}
          >
            <Text style={{ color: "#114D4D" }}>
              {restaurant.restaurant.attributes.store.address}
            </Text>
            <Text style={{ color: "grey", fontSize: 12, marginTop: 2 }}>
              More information about the store
            </Text>
          </View>
          <View style={{ padding: 20 }}>
            <Icon name="angle-right" color="#114D4D" />
          </View>
        </View>
      </>
    )
  }

  function displayFoodItems() {
    return (
      <>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
            borderBottomColor: "#DCE0E1",
            borderStyle: "solid",
            borderBottomWidth: 2,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>WHAT COULD YOU GET</Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 13,
              color: "grey",
            }}
          >
            {restaurant.restaurant.attributes.store.description}
          </Text>
          <View
            style={{
              width: 150,
              height: 35,
              padding: 5,
              backgroundColor: "#BDE1DD",
              borderRadius: 3,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 13,
              }}
            >
              Breads and Pastries
            </Text>
          </View>
        </View>
      </>
    )
  }

  function displayIngredeintsAndAllergens() {
    return (
      <>
        <View
          style={{
            borderBottomColor: "#DCE0E1",
            borderStyle: "solid",
            borderBottomWidth: 2,
            padding: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ marginLeft: 5 }}>
            <Icon name="allergies" color="#114D4D" />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: 320,
              alignSelf: "flex-start",
            }}
          >
            <Text style={{ color: "#114D4D", paddingHorizontal: 20 }}>
              Ingredients and allergens
            </Text>
          </View>
          <View style={{ paddingRight: 20 }}>
            <Icon name="angle-right" color="#114D4D" />
          </View>
        </View>
      </>
    )
  }
  function displayRatingAtBottom() {
    return (
      <>

        <View style={styles.bottomRating}>
          <Text style={{ fontWeight: "bold" }}>
            WHAT ARE OTHER PEOPLE SAYING
          </Text>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              style={{ marginRight: 10 }}
              solid
              name="star"
              color="gold"
            />
            <Text style={styles.numberRating}>
              {restaurant.restaurant.attributes.pack.rating} / 5
            </Text>
          </View>
        </View>
      </>
    )
  }

  function reserveButton() {
    return (
      <>
        <View style={styles.reserve}>
          <TouchableOpacity>
            <View style={{ backgroundColor: "#114D4D", height: 55, width: Math.round(dimensions.width * 14 / 16), padding: 16, borderRadius: 48 }}>
              <Text style={{ color: "white", textAlign: "center", fontSize: 15, zIndex: 69 }}>
                Reserve
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }

  function opaqueBackground() {
    return (
      <>
        <View style={styles.opaque} />
      </>
    )
  }

  function getRestaurant() {
    dispatch(fetchRestaurantDetails("2ef65b3b-8f4e-4288-8b58-998cb6bdab46"));
  }

  useEffect(() => {
    getRestaurant();
  }, [dispatch]);

  if (restaurant.restaurant.attributes) {
    console.log(restaurant.restaurant.attributes.store);
  }

  return (
    <>
      {restaurant.restaurant.attributes ? (
        <>
          <ScrollView
            style={styles.container}
          >

            {displayRestaurantBanner()}
            {displayRestaurantNameAndRating()}
            {displayTime()}
            {displaySaleBanner()}
            {displayRestaurantAddress()}
            {displayFoodItems()}
            {displayIngredeintsAndAllergens()}
            {displayRatingAtBottom()}
          </ScrollView>
          {opaqueBackground()}
          {reserveButton()}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  numberRating: {
    fontSize: 20,
    fontWeight: "bold",
  },

  bottomRating: {
    padding: 20,
    flex: 1,
    marginTop: 32,
    display: "flex",
    flexDirection: "column",
    borderBottomColor: "#DCE0E1",
    borderStyle: "solid",
    borderBottomWidth: 2,
    alignItems: "center",
  },
  icon: {
    padding: 20,
  },
  rating: {
    marginRight: 15,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  container: {

    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: Dimensions.get('window').height,

  },
  reserve: {
    marginTop: Math.round(Dimensions.get('window').height * 0.925),
    position: "absolute",
    width: Dimensions.get('window').width,
    alignItems: "center",
  },
  opaque: {
    opacity: 0.8,
    marginTop: Math.round(Dimensions.get('window').height * 0.85),
    position: "absolute",
    height: 180,
    width: Dimensions.get('window').width,
    backgroundColor: "white",
    alignItems: "center",
  }
});
function useParams(): { restId: any } {
  throw new Error("Function not implemented.");
}
