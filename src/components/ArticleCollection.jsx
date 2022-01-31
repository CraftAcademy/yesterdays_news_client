import React from "react";
import { Box } from "@mui/material";
import CommercialCardList from "./CommercialCardList";
import ArticleCardList from "./ArticleCardList";
import SideArticleList from "./SideArticleList";
import CommercialCardListRight from "./CommercialCardListRight";

const ArticleCollection = () => {
  return (
    <Box class="main_page">
      <Box class="boxComLeft" id="Commercial_feed">Sponsored by:
        <CommercialCardList />
      </Box>
      <Box class="boxArticle" id="Main_article_feed">
        <ArticleCardList />
      </Box>

      <Box class="boxComRight" id="Commercial_feed">Sponsored by:
        <CommercialCardListRight />
      </Box>

      <Box class="boxArticleSide" id="Right_article_feed">This might interest you:
        <SideArticleList />
      </Box>
    </Box>
  );
};

export default ArticleCollection;