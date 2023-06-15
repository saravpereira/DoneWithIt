import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import AppPicker from "../picker/AppPicker";

const AppFormPicker = ({ name, ...otherProps }) => {
  const { setFieldValue, touched, values, errors } = useFormikContext();
  return (
    <>
      <AppPicker
        onSelectedItem={(item) => setFieldValue(name, item)}
        {...otherProps}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
