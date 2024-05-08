import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";
import { IFormikProps } from "../../../types";

export const FormikTextField = ({
  id,
  label,
  ...props
}: IFormikProps & TextFieldProps) => {
  const [field, meta] = useField(id);

  return (
    <TextField
      fullWidth
      id={id}
      label={label}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      {...field}
      {...props}
    />
  );
};
