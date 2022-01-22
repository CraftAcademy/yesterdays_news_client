import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Articles from "../modules/Articles";
import ArticleCard from "./ArticleCard";
import { Grid, Container, Alert } from "@mui/material";

const ArticleCollection = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [message, setMessage] = useState();

  const fetchArticles = async () => {
    const data = await Articles.index(category);
    if (data.message || data.length === 0) {
      setMessage("We don't have articles available at the moment, please try again later.");
    } else {
      setArticles(data);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, [category]);

  const collectionOfArticles = articles.map((article) => {
    return (
      <Grid item key={article.id} md={12}>
        <ArticleCard article={article} />
      </Grid>
    );
  });

  return (
    <Container sx={{ padding: "20px 0" }}>
      <Grid container spacing={4} data-cy="article-collection">
        {collectionOfArticles}
      </Grid>
      {(articles.length === 0 && message) &&
        <Alert data-cy="flash-message" severity="info" sx={{ margin: '20px 0'}}>{message}</Alert>
      }
    </Container>
  );
};

export default ArticleCollection;
