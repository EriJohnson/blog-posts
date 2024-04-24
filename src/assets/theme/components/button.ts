import { ComponentStyleConfig } from "@chakra-ui/react";

const button: ComponentStyleConfig = {
  baseStyle: {
    _disabled: {
      bg: "#C3C3C3",
      opacity: 1,
      pointerEvents: "none",
    },
  },
  variants: {
    solid: {
      borderRadius: "base",
    },
  },
};

export default button;
