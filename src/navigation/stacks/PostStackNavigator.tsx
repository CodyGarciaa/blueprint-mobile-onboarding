import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostScreen from '@/screens/PostScreen';

const PostStack = createNativeStackNavigator();

export default function PostStackNavigator() {
  return (
    <PostStack.Navigator>
      <PostStack.Screen name="blueprint blog" component={PostScreen} />
    </PostStack.Navigator>
  );
}
