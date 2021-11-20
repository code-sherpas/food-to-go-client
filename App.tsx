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
      <View style={{ flex: 2, flexDirection: "column-reverse",  }}>
        <ImageBackground
          source={require("./assets/food.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Image
              source={require("./assets/icon.png")}
              style={{ width: 30, height: 30, marginRight: 10 }}
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
      <div
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
      </div>
      <View
        style={{
          borderBottomColor: "#DCE0E1",
          borderStyle: "solid",
          borderBottomWidth: 2,
          padding: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginLeft: 5 }}>
          <Icon name="map-marker-alt" color="#114D4D" />
        </div>
        <div
          style={{
            height: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 20,
            alignItems: "flex-start",
          }}
        >
          <Text style={{ color: "#114D4D" }}>
            Carrer de Sant Frederic, 27, 08028, Barcelona, Espana
          </Text>
          <Text style={{ color: "grey", fontSize: 12, marginTop: 2 }}>
            More information about the store
          </Text>
        </div>
        <div style={{ padding: 20 }}>
          <Icon name="angle-right" color="#114D4D" />
        </div>
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
        <Text>
          <b>WHAT COULD YOU GET</b>
        </Text>
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
        <div
          style={{
            width: 125,
            height: 20,
            fontSize: 15,
            padding: 5,
            backgroundColor: "#BDE1DD",
            borderRadius: "3px",
            textAlign: "center",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Breads and Pastries
        </div>
      </View>
      <View
        style={{
          borderBottomColor: "#DCE0E1",
          borderStyle: "solid",
          borderBottomWidth: 2,
          padding: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginLeft: 5 }}>
          <Icon name="allergies" color="#114D4D" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: 300,
            alignSelf: "flex-start",
          }}
        >
          <Text style={{ color: "#114D4D" }}>Ingredients and allergens</Text>
        </div>
        <div style={{ paddingRight: 20 }}>
          <Icon name="angle-right" color="#114D4D" />
        </div>
      </View>
      <View style={styles.bottomRating}>
        <Text>
          <b>WHAT ARE OTHER PEOPLE SAYING</b>
        </Text>
        <div style={{ marginTop: 15 }}>
          <Icon style={{ marginRight: 10 }} solid name="star" color="gold" />
          <Text style={styles.numberRating}>4.4 / 5.0</Text>
        </div>
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
    fontSize: 20,
    fontWeight: "900",
    color: "white",
  },
  container: {
    flex: 1,
  },
});
