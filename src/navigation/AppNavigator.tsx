import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PostStackNavigator from './stacks/PostStackNavigator';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <PostStackNavigator />
    </NavigationContainer>
  );
}
