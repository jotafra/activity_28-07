import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Stack } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Typography variant="h3" gutterBottom>
        API JSONPlaceholder
      </Typography>

      <Typography variant="h6" gutterBottom>
        Navegue entre os recursos disponíveis:
      </Typography>

      <Stack direction="row" spacing={3} mt={2}>
        <Button component={Link} to="/posts" variant="contained" color="primary">
          Posts
        </Button>
        <Button component={Link} to="/users" variant="contained" color="secondary">
          Users
        </Button>
        <Button component={Link} to="/todos" variant="contained" color="success">
          Todos
        </Button>
      </Stack>
    </Box>
  );
}

export default Home;
