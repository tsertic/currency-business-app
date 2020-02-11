import React, { useReducer } from 'react';
import axios from 'axios';
import NewsContext from './newsContext';
import newsReducer from './newsReducer';
import { newsTypes } from './../types';
import { newsApiKey } from '../../apiKeys';

const NewsState = props => {
  const initialState = {
    news: [],
    headlineNews: null,
    currentPage: 1,
    numOfPages: 20
  };

  const [state, dispatch] = useReducer(newsReducer, initialState);

  //load news
  const loadNews = async (page = 1) => {
    let apiKey;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      // dev code
      apiKey = newsApiKey;
    } else {
      // production code
      apiKey = process.env.REACT_APP_NEWS_API_KEY;
    }
    const urlAdress = `https://newsapi.org/v2/everything?q=(currencies)AND(currency)AND(economy)&page=${page}&pageSize=4`;
    const config = {
      headers: { 'X-Api-Key': apiKey }
    };

    const res = await axios(urlAdress, config);
    console.log(res.data);
    if (!state.headlineNews) loadHeadlineNews(res.data.articles[0]);
    dispatch({ type: newsTypes.LOAD_NEWS, payload: [res.data, page] });
  };
  //select headline news

  const loadHeadlineNews = data => {
    const headlineNews = data;

    dispatch({ type: newsTypes.LOAD_HEADLINE_NEWS, payload: headlineNews });
  };

  //change news page

  const changePage = num => {
    let nextPage = state.currentPage + num;

    if (nextPage < 1) nextPage = state.numOfPages;
    if (nextPage > state.numOfPages) nextPage = 1;

    loadNews(nextPage);
  };

  return (
    <NewsContext.Provider
      value={{
        news: state.news,
        headlineNews: state.headlineNews,
        currentPage: state.currentPage,
        numOfPages: state.numOfPages,
        loadNews,
        loadHeadlineNews,
        changePage
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
