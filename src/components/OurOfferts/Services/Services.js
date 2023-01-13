import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  ListItemButton,
  ListItemText,
  List,
  Card,
  CardContent,
} from "@mui/material";
import { services } from "../../../constants";
import { Text, Buttons } from "../../sharedComponents";

function Services() {
  const [value, setValue] = useState(0);

  const onClick = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <List sx={{ display: "flex", justifyContent: "space-around" }}>
          {services.map((service, index) => (
            <Buttons
              sx={{
                width: "200px",
                color: index === value ? "#0907a9" : "#e1b40f",
              }}
              key={service.id}
              backgroundcolor={index === value ? "#e1b40f" : "#0907a9"}
              onClick={() => onClick(index)}
            >
              {service.name}
            </Buttons>
          ))}
        </List>
      </Box>
      <Box>
        <Card>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <div>IMAGEN</div>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                width: "70%",
              }}
            >
              {services[value].services.map((service) => (
                <Card
                  key={service.name}
                  sx={{
                    position: "relative",
                    margin: "40px 20px",
                    overflow: "visible",
                  }}
                >
                  <Box
                    sx={{
                      border: "1px solid",
                      width: "80px",
                      height: "50px",
                      position: "absolute",
                      left: "20px",
                      bottom: "64px",
                    }}
                  >
                    IMAGEN
                  </Box>
                  <CardContent>
                    <Text fontSize={"20px"}>{service.name}</Text>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export { Services };
