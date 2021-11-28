const response = {
  data: {
    id: "2ef65b3b-8f4e-4288-8b58-998cb6bdab46",
    type: "restaurant",
    attributes: {
      store: {
        id: "2ef65b3b-8f4e-4288-8b58-998cb6bdab46",
        banner_url: "https://i.ibb.co/tQbckTt/food.jpg",
        profile_url: "http://localhost:8080/profiel_image",
        address:
          "Carrer de Sant Frederic, 27, 08028, Barcelona, Espana",
        name: "Magic Bag",
        description:
          "Salva comida en Wonder Cookies y tu pack podra tener: una variedad de galletas"
      },
      pack: {
        id: "2ef65b3b-8f4e-4288-8b58-998cb6bdab48",
        store_id: "2ef65b3b-8f4e-4288-8b58-998cb6bdab46",
        quantity_in_stock: 14,
        unitary_price_before_discount: {
          value: 15,
          unit: "PAISA",
          currency: "INR",
        },
        unitary_price_after_discount: {
          value: 15,
          unit: "PAISA",
          currency: "INR",
        },
        ingredients: ["a", "b", "c"],
        allergens: ["x", "y", "z"],
        rating: 4,
        available_from: "2021-11-157T21:00:00Z",
        available_until: "2021-11-16T21:00:00Z",
      },
    },
  },
};

export default response;
