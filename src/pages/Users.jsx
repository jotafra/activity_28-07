import React, { useEffect, useState } from "react";
import sheets from "../axios/axios";
import CardUser from "../components/CardUser";
import { Box, Typography, Container } from "@mui/material";

function Users() {
  const [users, setUsers] = useState([]);

useEffect(() => {
  sheets.users()
    .then(response => setUsers(response.data))
    .catch(error => console.error("Erro:", error));
}, []);

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
        Lista de Usuários
      </Typography>
      <Box mt={4}>
        {users.map(user => (
          <CardUser
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
          />
        ))}
      </Box>
    </Container>
  );
}

export default Users;
