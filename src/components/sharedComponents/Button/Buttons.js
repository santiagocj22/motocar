// import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Buttons = styled(Button)(
  ({
    borderradius = "8px",
    backgroundcolor = "purple",
    color = "#FFF",
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
      backgroundColor: backgroundcolor,
      opacity: 0.8,
      fontWeight: "bold",
    },
    margin: "20px 0",
    ...rest,
  })
);

// Buttons.propTypes = {
//   color: PropTypes.string,
//   children: PropTypes.string,
//   label: PropTypes.string,
//   backgroundColor: PropTypes.string,
//   size: PropTypes.oneOf(["sm", "md", "lg"]),
//   onClick: PropTypes.func,
// };
export { Buttons };
