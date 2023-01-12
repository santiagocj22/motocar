import React from "react";
import { Card, Box, CardContent } from "@mui/material";
import { Text, Buttons } from "../../sharedComponents";

function Contacts() {
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
            <Buttons>Ver en Mapa</Buttons>
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
