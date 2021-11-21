import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ImageBackground, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function App() {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 2 }}>
        <ImageBackground
          source={require("./assets/food.jpg")}
          style={{
            width: "100%",
            height: "100%",
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
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignContent: "center" }}>
          <Text style={styles.rating}>Magic Bag</Text>
          <Icon style={styles.rating} name="star" color="gold" solid />
          <Text style={styles.rating}>4.4</Text>
        </View>
        <View>
          <Text>$15.00</Text>
        </View>
      </View>
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
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          height: 25,
          padding: 5,
          backgroundColor: "#FE7376",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Sale ends soon!</Text>
      </View>
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
            Carrer de Sant Frederic, 27, 08028, Barcelona, Espana
          </Text>
          <Text style={{ color: "grey", fontSize: 12, marginTop: 2 }}>
            More information about the store
          </Text>
        </View>
        <View style={{ padding: 20 }}>
          <Icon name="angle-right" color="#114D4D" />
        </View>
      </View>
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
          Salva comida en Wonder Cookies y tu pack podra tener: una variedad de
          galletas.
        </Text>
        <View
          style={{
            width: 150,
            height: 25,
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
      <View style={styles.bottomRating}>
        <Text style={{ fontWeight: "bold" }}>WHAT ARE OTHER PEOPLE SAYING</Text>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon style={{ marginRight: 10 }} solid name="star" color="gold" />
          <Text style={styles.numberRating}>4.4 / 5.0</Text>
        </View>
      </View>
    </View>
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
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
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
    flex: 1,
  },
});
