import React, { useContext, Fragment } from 'react';
import styles from './Headline.module.scss';
import NewsContext from '../../../context/news/newsContext';
import Spinner from './../../UI/Spinner/Spinner';
const Headline = () => {
  const newsContext = useContext(NewsContext);

  const { headlineNews } = newsContext;

  return (
    <Fragment>
      <div className={styles.header}>Trending News</div>
      {headlineNews ? (
        <div className={styles.Headline}>
          <div className={styles.Headline__img}>
            <img src={headlineNews.urlToImage} alt=" relevant to title" />
            <a
              href={headlineNews.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit full article
            </a>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>{headlineNews.title}</div>
            <div className={styles.description}>{headlineNews.description}</div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
export default Headline;
