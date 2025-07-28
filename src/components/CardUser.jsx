import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function CardUser({ name, email, city }) {
  return (
    <Card
      sx={{
        mb: 2,
        p: 1,
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold">{name}</Typography>
        <Typography variant="body2" color="text.secondary">Email: {email}</Typography>
        <Typography variant="body2" color="text.secondary">Cidade: {city}</Typography>
      </CardContent>
    </Card>
  );
}

export default CardUser;
