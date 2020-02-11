import React from 'react';
import styles from './App.module.scss';
//components
import Dashboard from './components/Dashboard/Dashboard';
import DataContent from './components/DataContent/DataContent';
//context
import DataState from './context/data/DataState';
import NewsState from './context/news/NewsState';

const App = () => {
  return (
    <DataState>
      <NewsState>
        <div className={styles.App}>
          <Dashboard />
          <DataContent />
        </div>
      </NewsState>
    </DataState>
  );
};

export default App;
