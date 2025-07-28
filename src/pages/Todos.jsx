import React, { useEffect, useState } from "react";
import sheets from "../axios/axios";
import CardTodo from "../components/CardTodo";
import { Box, Typography, Container } from "@mui/material";

function Todos() {
  const [todos, setTodos] = useState([]);

 useEffect(() => {
  sheets.todos()
    .then(response => setTodos(response.data))
    .catch(error => console.error("Erro:", error));
}, []);

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
        Lista de Tarefas
      </Typography>
      <Box mt={4}>
        {todos.map(todo => (
          <CardTodo key={todo.id} title={todo.title} completed={todo.completed} />
        ))}
      </Box>
    </Container>
  );
}

export default Todos;
