import { styled } from "@mui/material/styles";

export const TabPanel = styled("main")(({ theme }) => ({
  width: "100%",
  height: "100%",
  // padding: "20px",
  ...theme.mixins.toolbar,
}));
