import React from "react";
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
  name: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
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

  return (
    <Screen style={styles.container}>
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
              maxLength={8}
              numberOfLines={1}
              width="30%"
            />
            <AppFormPicker
              name="category"
              placeholder="Category"
              items={sampleCategories}
              width="50%"
            />
            <AppFormField
              name="description"
              placeholder="Description"
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={255}
              numberOfLines={3}
            />
            <SubmitButton text="POST" />
          </>
        </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;
