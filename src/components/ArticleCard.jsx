import React from "react";
import { Typography, CardContent, Card, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  return (
    <CardActionArea onClick={() => navigate(`/articles/${article.id}`)}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h2" data-cy="article-title">
            {article.title}
          </Typography>
          <Typography gutterBottom variant="h5" data-cy="article-body">
            {article.body}
          </Typography>
          <Typography gutterBottom variant="h6" data-cy="article-created">
            {article.created_at}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default ArticleCard;
