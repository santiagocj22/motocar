import React, { useState } from "react";
import Box from "@mui/material/Box";
import { ListItemButton, ListItemText, List, Card } from "@mui/material";
import { services } from "../../../constants";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box sx={{ p: 3 }}>{children}</Box>
    </div>
  );
}

function Services() {
  const [value, setValue] = useState(0);

  const onClick = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <List>
          {services.map((service, index) => (
            <ListItemButton
              key={service.id}
              selected={index === value}
              onClick={() => onClick(index)}
            >
              <ListItemText primary={service.name} />
            </ListItemButton>
          ))}
        </List>
      </Box>
      <TabPanel value={value} index={0}>
        <Card>6</Card>
      </TabPanel>
    </Box>
  );
}

export { Services };
