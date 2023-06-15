import React, { useState } from "react";
import { View } from "react-native";
import * as Yup from "yup";
import Screen from "../common/screen/Screen";
import { styles } from "./styles";
import {
  AppForm,
  SubmitButton,
  AppFormField,
  AppFormPicker,
} from "../common/form";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Title"),
  price: Yup.number().required().label("Price"),
  category: Yup.object().required().label("Category"),
  description: Yup.string().required().label("Description"),
});

const sampleCategories = [
  {
    label: "Fruniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Appliances",
    value: 3,
  },
  {
    label: "Miscellaneous ",
    value: 4,
  },
];

const ListingEditScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Screen>
      <View style={styles.container}>
        <AppForm
          initialValues={{
            name: "",
            price: "",
            category: "",
            description: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <>
            <AppFormField
              name="name"
              placeholder="Name"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <AppFormField
              name="price"
              placeholder="Price"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <AppFormPicker
              name="category"
              placeholder="Category"
              items={sampleCategories}
            />
            <AppFormField
              name="description"
              placeholder="Description"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <SubmitButton text="POST" />
          </>
        </AppForm>
      </View>
    </Screen>
  );
};

export default ListingEditScreen;
