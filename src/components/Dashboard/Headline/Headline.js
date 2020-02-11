import React, { useContext, Fragment } from 'react';
import styles from './Headline.module.scss';
import NewsContext from '../../../context/news/newsContext';
const Headline = () => {
  const newsContext = useContext(NewsContext);

  const { headlineNews } = newsContext;
  console.log(newsContext);
  return (
    <Fragment>
      <div className={styles.header}>Trending News</div>
      {headlineNews ? (
        <div className={styles.Headline}>
          <div className={styles.Headline__img}>
            <img src={headlineNews.urlToImage} />
            <a href={headlineNews.url} target="_blank">
              Visit full article
            </a>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>{headlineNews.title}</div>
            <div className={styles.description}>{headlineNews.description}</div>
          </div>
        </div>
      ) : (
        <div>Ucitava se</div>
      )}
    </Fragment>
  );
};
export default Headline;
