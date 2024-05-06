import { FormHelperText, useTheme } from "@mui/material";

interface IProps {
  helperText?: boolean | string;
}

const SaleFormHelperText = ({ helperText }: IProps) => {
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

export default SaleFormHelperText;
