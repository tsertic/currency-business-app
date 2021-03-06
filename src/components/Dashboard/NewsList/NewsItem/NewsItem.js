import React, { useContext } from 'react';
import styles from './NewsItem.module.scss';
import NewsContext from '../../../../context/news/newsContext';
const NewsItem = ({ newsArticle }) => {
  const newsContext = useContext(NewsContext);
  const { loadHeadlineNews } = newsContext;

  return (
    <div
      className={styles.NewsItem}
      onClick={() => loadHeadlineNews(newsArticle)}
    >
      <div className={styles.image}>
        <img src={newsArticle.urlToImage} alt="relevant to title" />
      </div>
      <div className={styles.title}>
        <p>{newsArticle.title}</p>
      </div>
    </div>
  );
};

export default NewsItem;
