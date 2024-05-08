import { FormHelperText, useTheme } from "@mui/material";

interface IProps {
  helperText?: boolean | string;
}

export const FieldHelperText = ({ helperText }: IProps) => {
  const theme = useTheme();

  return (
    <>
      {helperText && (
        <FormHelperText style={{ color: theme.palette.error.main }}>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
};
