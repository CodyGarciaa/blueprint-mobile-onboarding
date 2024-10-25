import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';
// import supabase from '../../supabase/client';
import { styles } from './styles';

export default function PostScreen() {
  // const [postData, setPostData] = useState({
  //   description: 'description',
  //   username: 'username',
  //   imageURL: 'imageURL',
  //   likes: 0,
  // });

  // const { data, error } = await supabase.from('posts').select();

  // await supabase.from('posts').select()
  //   .then(data => ...)
  //   .catch(error => ...);

  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.personHeader}>
          <View style={styles.nameProfile}>
            <ProfilePlaceholder />
            <Text style={styles.username}>rbeggs</Text>
          </View>
          <View style={styles.dateDiv}>
            <Text style={styles.postDate}>September 19</Text>
          </View>
        </View>
        <Text style={styles.caption}>
          In response to the growing homelessness crisis in San Francisco, a
          local nonprofit organization, Code Tenderloin, has launched a
          comprehensive initiative aimed at providing long-term solutions for
          individuals experiencing homelessness. The organization, founded in
          2015, is dedicated to addressing both immediate needs and underlying
          causes of homelessness through a combination of shelter services, job
          training programs, and mental health support. read more online:
          <Text style={styles.link}>https://www.codetenderloin.org/</Text>
        </Text>
        <Image
          style={styles.postImage}
          source={{
            uri: 'https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg',
          }}
        />
        <View style={styles.interactions}>
          <View style={styles.likes}>
            <HeartIcon />
            <Text style={styles.username}>256 Likes</Text>
          </View>
          <ShareIcon />
        </View>
      </View>

      <View style={styles.comments}>
        <View style={styles.personHeader}>
          <View style={styles.nameProfile}>
            <ProfilePlaceholder />
            <Text style={styles.username}>daviddd</Text>
          </View>
          <View style={styles.dateDiv}>
            <Text style={styles.postDate}>September 20</Text>
          </View>
        </View>
        <Text style={styles.commentText}>
          This organization is doing amazing work tackling the complex root
          causes of the issue.
        </Text>

        <View style={styles.personHeader}>
          <View style={styles.nameProfile}>
            <ProfilePlaceholder />
            <Text style={styles.username}>vppraggie</Text>
          </View>
          <View style={styles.dateDiv}>
            <Text style={styles.postDate}>September 21</Text>
          </View>
        </View>
        <Text style={styles.commentText}>Thanks for sharing!</Text>
      </View>
    </View>
  );
}
