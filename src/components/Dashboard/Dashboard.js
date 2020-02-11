import React, { useEffect, useContext } from 'react';
import styles from './Dashboard.module.scss';
//components

//context
import NewsContext from '../../context/news/newsContext';
import Headline from './Headline/Headline';
import NewsList from './NewsList/NewsList';
import PageNavigation from './PageNavigation/PageNavigation';
const Dashboard = () => {
  const newsContext = useContext(NewsContext);

  const { loadNews, news } = newsContext;

  useEffect(() => {
    loadNews();
    //eslint-disable-next-line
  }, []);

  return (
    <div className={styles.Dashboard}>
      <Headline />
      <PageNavigation />
      <NewsList news={news} />
    </div>
  );
};

export default Dashboard;
