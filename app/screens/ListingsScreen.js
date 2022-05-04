import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, ActivityIndicator } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listingsApi";
import routes from "../navigations/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };
  return (
    <Screen style={styles.container}>
      {error && (
        <>
          <AppText>Could'nt Fetch Listings, Try Again</AppText>
          <AppButton title="Refresh" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator animating={true} size={"large"} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    padding: 10,
  },
});
export default ListingsScreen;
