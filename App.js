import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import News from './Screen/News';

const stackNavigator = createStackNavigator({
  HyoNews: News,
});

const App = createAppContainer(stackNavigator);
export default App;
