import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";

import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  { label: "Furnitures", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Camera", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Clothing", value: 3, backgroundColor: "blue", icon: "lock" },
];

function ListingEditScreen(props) {
  const location = useLocation();
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(location)}
      >
        <FormImagePicker name="images" />
        <AppFormField name="Title" maxLength={255} placeholder="Title" />
        <AppFormField
          name="price"
          keyboardType="numeric"
          maxLength={8}
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          name="description"
          maxLength={255}
          numberOfLines={3}
          multiline
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
