import React from 'react';
import styles from './NewsList.module.scss';
import NewsItem from './NewsItem/NewsItem';

const NewsList = ({ news }) => {
  const renderNews = news.map((newsArt, i) => {
    return <NewsItem newsArticle={newsArt} key={i} />;
  });

  return <div className={styles.NewsList}>{renderNews}</div>;
};

export default NewsList;
