import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Text = styled(Typography)(
  (fontSize, fontWeight, color, margin, textAlign) => ({
    color,
    fontSize,
    fontWeight,
    margin,
    textAlign,
  })
);

Text.defaultProps = {
  color: "purple",
  fontSize: "1.5rem",
  fontWeight: "bold",
  margin: "0.5rem",
  textAlign: "center",
};

export { Text };
