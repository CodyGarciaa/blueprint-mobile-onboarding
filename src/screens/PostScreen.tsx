import { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import supabase from '@/supabase/client';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';
import { styles } from './styles';

export default function PostScreen() {
  const [postData, setPostData] = useState({
    created_at: 'created_at',
    description: 'description',
    image_url: 'image_url',
    like_count: 0,
    username: 'username',
    uuid: 'uuid',
  });

  async function fetchData() {
    const { data, error } = await supabase
      .from('posts')
      .select()
      .eq('username', 'rbeggs'); //manually on got rbeggs bc og assignment only had 1 post
    if (error) {
      throw error;
    }

    const date = new Date(data[0]['created_at']);
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
      date,
    );
    data[0]['created_at'] = formattedDate;
    setPostData(data[0]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const comments = [
    {
      username: 'daviddd',
      date: 'September 20',
      text: 'This organization is doing amazing work tackling the complex root causes of the issue.',
    },
    {
      username: 'vppraggie',
      date: 'September 21',
      text: 'Thanks for sharing!',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <Pressable style={styles.personHeader} onPress={fetchData}>
          <View style={styles.nameProfile}>
            <ProfilePlaceholder />
            <Text style={styles.username}>{postData['username']}</Text>
          </View>
          <View style={styles.dateDiv}>
            <Text style={styles.postDate}>{postData['created_at']}</Text>
          </View>
        </Pressable>
        <Text style={styles.caption}>{postData['description']}</Text>
        <Image
          style={styles.postImage}
          source={{
            uri: postData['image_url'],
          }}
          alt="image attached to post: photo of San Francisco"
        />
        <View style={styles.interactions}>
          <View style={styles.likes}>
            <HeartIcon />
            <Text style={styles.username}>{postData['like_count']} Likes</Text>
          </View>
          <ShareIcon />
        </View>
      </View>

      <View style={styles.comments}>
        {comments.map(comment => (
          <View>
            <View style={styles.personHeader}>
              <View style={styles.nameProfile}>
                <ProfilePlaceholder />
                <Text style={styles.username}>{comment['username']}</Text>
              </View>
              <View style={styles.dateDiv}>
                <Text style={styles.postDate}>{comment['date']}</Text>
              </View>
            </View>
            <Text style={styles.commentText}>{comment['text']}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
