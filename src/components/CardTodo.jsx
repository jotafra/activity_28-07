import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function CardTodo({ title, completed }) {
  return (
    <Card sx={{ marginBottom: 2, backgroundColor: completed ? "#e0ffe0" : "#fff" }}>
      <CardContent>
        <Typography
          variant="body1"
          sx={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {title}
        </Typography>
        <Typography variant="caption">
          {completed ? "Concluído" : "Pendente"}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardTodo;
