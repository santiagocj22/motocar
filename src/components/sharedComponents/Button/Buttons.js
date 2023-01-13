import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Buttons = styled(Button)(
  ({
    borderradius = "23px",
    backgroundcolor =  "#0907a9",
    color = "#e1b40f",
    onClick,
    ...rest
  }) => ({
    borderRadius: borderradius,
    backgroundColor: backgroundcolor,
    color,
    fontWeight: "bold",
    overflow: "hidden",
    position: "relative",
    height: "48px",
    "&:hover": {
      boxShadow: "4px 5px 7px cornflowerblue",
      backgroundColor: backgroundcolor,
      opacity: 0.8,
      fontWeight: "bold",
    },
    margin: "20px 0",
    ...rest,
  })
);

export { Buttons };
