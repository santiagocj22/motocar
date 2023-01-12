import React from "react";
import { Text } from "../Text";

function Title({ title, subtitle }) {
  return (
    <div>
      <Text fontSize={"25px"}>{title}</Text>
      <Text fontSize={"18px"}>{subtitle}</Text>
    </div>
  );
}

export { Title };
