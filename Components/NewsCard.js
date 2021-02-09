import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const NewsCard = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.cardView}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>{item.author}</Text>
      <Image style={styles.image} source={{ uri: item.urlToImage }} />
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: width * 0.05,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  title: {
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.02,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    margin: width * 0.05,
    color: 'gray',
    fontSize: 18,
  },
  image: {
    height: height / 6,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
  author: {
    marginBottom: width * 0.05,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: 'blue',
  },
});
export default NewsCard;
