import React, { useContext } from 'react';
import styles from './PageNavigation.module.scss';
import NewsContext from '../../../context/news/newsContext';

const PageNavigation = props => {
  const newsContext = useContext(NewsContext);
  const { changePage, currentPage, numOfPages } = newsContext;

  return (
    <div className={styles.PageNavigation}>
      <button onClick={() => changePage(-1)}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <span>
        Page {currentPage}/{numOfPages}
      </span>
      <button onClick={() => changePage(1)}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default PageNavigation;
