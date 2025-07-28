import React, { useEffect, useState } from "react";
import api from "../axios/axios";
import CardPost from "../components/CardPost";
import { Box, Typography, Container } from "@mui/material";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts")
      .then(response => setPosts(response.data))
      .catch(error => console.error("Erro ao buscar posts:", error));
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
        Lista de Posts
      </Typography>
      <Box mt={4}>
        {posts.map(post => (
          <CardPost key={post.id} title={post.title} body={post.body} />
        ))}
      </Box>
    </Container>
  );
}

export default Posts;
