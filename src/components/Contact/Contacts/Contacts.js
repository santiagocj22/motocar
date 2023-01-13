import React from "react";
import { Card, Box, CardContent } from "@mui/material";
import { Text, Buttons } from "../../sharedComponents";

function Contacts() {
  const openNewTab = () => {
    const position =
      "https://www.google.com/maps/search/?api=1&query=6.241258,-75.573694";
    const win = window.open(position, "_blank");
    win.focus();
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
      <Card>
        <Box>IMAGEN</Box>
        <CardContent>
          <Box>
            <Text>Ubicación</Text>{" "}
          </Box>
          <Box>
            <Text fontSize={"15px"}>
              Calle 40 # 52 a 26 Medellín, Antioquia{" "}
            </Text>
            <Buttons onClick={openNewTab}>Ver en Mapa</Buttons>
          </Box>
        </CardContent>
      </Card>
      <Card>
        <Box>IMAGEN</Box>
        <CardContent>
          <Box>
            <Text>Correo Electrónico</Text>
          </Box>
          <Box>
            <Text fontSize={"15px"}>reconstructoramotocar@gmail.com</Text>
            <Text fontSize={"15px"}>germanclavijo01@gmail.com</Text>
            <Text fontSize={"15px"}>santiagocj22@gmail.com</Text>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export { Contacts };
