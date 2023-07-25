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
import CategoryPickerItem from "../common/picker/CategoryPickerItem";
import categories from "../../constants/categories";
import FormImagePicker from "../common/form/FormImagePicker";
import useLocation from "../../hooks/useLocation";
import listingsApi from "../../api/listings";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().required().label("Description"),
  images: Yup.array().required().min(1, "Please select at least one image"),
});

const sampleCategories = Object.keys(categories).map((item, index) => {
  return {
    label: item,
    value: index,
    backgroundColor: categories[item].backgroundColor,
    icon: categories[item].icon,
  };
});

const ListingEditScreen = () => {
  const location = useLocation();

  const handleSubmit = async (listing) => {
    const result = await listingsApi.addListings(
      {
        ...listing,
        location,
      },
      (progress) => console.log("sara", progress)
    );
    if (!result.ok) {
      return alert("Could not save the listing.");
    }
    alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          name: "",
          price: "",
          category: "",
          description: "",
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <>
          <FormImagePicker name="images" />
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
            PickerItemComponent={CategoryPickerItem}
            numberOfColumns={3}
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
