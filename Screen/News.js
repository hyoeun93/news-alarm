import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import NewsCard from '../Components/NewsCard';
import newsAPI from '../apis/News';

const News = ({ navigation }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNewsFromAPI();
  }, []);

  //   const newsResponse = async () => {
  //     const response = await newsAPI.get(
  //       'top-headlines?country=us&apiKey=8cdf2171dac447608126208a2cdeb9e3'
  //     );
  //     console.log(response.data);
  //   };

  function getNewsFromAPI() {
    newsAPI
      .get('top-headlines?country=us&apiKey=8cdf2171dac447608126208a2cdeb9e3')
      .then(function (response) {
        setNews(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (!news) {
    return null;
  }
  return (
    <View>
      <FlatList
        data={news}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({ item }) => {
          return <NewsCard item={item} />;
        }}
      />
    </View>
  );
};

export default News;
