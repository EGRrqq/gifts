import { FormControl, InputLabel, Select } from "@mui/material";

import { FieldHelperText } from "./FieldHelperText";
import { IFormikProps } from "../../../types";
import { useField } from "formik";
import { ReactNode } from "react";

interface IProps extends IFormikProps {
  data: ReactNode;
}

export const FormikSelect = ({ data, id, label, ...props }: IProps) => {
  const [field, meta] = useField(id);

  return (
    <FormControl fullWidth>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        label={label}
        error={meta.touched && Boolean(meta.error)}
        {...field}
        {...props}
      >
        {data}
      </Select>
      <FieldHelperText helperText={meta.touched && meta.error} />
    </FormControl>
  );
};
