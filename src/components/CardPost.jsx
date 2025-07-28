import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function CardPost({ title, body }) {
  return (
    <Card
      sx={{
        mb: 2,
        p: 1,
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: "#fefefe",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary">{body}</Typography>
      </CardContent>
    </Card>
  );
}

export default CardPost;
