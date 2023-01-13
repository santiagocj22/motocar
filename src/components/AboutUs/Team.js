import React from "react";
import { Box, Card, CardContent } from "@mui/material";
import { Text } from "../sharedComponents";
import { teamPeople } from "../../constants";
function Team() {
  return (
    <Box>
      {teamPeople.map((person) => (
        <Card key={person.name}>
          <Box>IMAGEN</Box>
          <CardContent>
            <Text fontSize={"18px"}>{person.name}</Text>
            <Text fontSize={"14px"}>{person.function}</Text>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export { Team };
