import React, { useContext } from 'react';
import styles from './NewsItem.module.scss';
import NewsContext from '../../../../context/news/newsContext';
const NewsItem = ({ newsArticle }) => {
  const newsContext = useContext(NewsContext);
  const { loadHeadlineNews } = newsContext;
  console.log(newsArticle);

  return (
    <div
      className={styles.NewsItem}
      onClick={() => loadHeadlineNews(newsArticle)}
    >
      <div className={styles.image}>
        <img src={newsArticle.urlToImage} />
      </div>
      <div className={styles.title}>
        <p>{newsArticle.title}</p>
      </div>
    </div>
  );
};

export default NewsItem;
