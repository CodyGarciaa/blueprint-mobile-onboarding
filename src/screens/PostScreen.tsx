import { Text, View } from 'react-native';
import HeartIcon from '../../assets/heart-icon.svg';
import ShareIcon from '../../assets/messenger-icon.svg';
import ProfilePlaceholder from '../../assets/profile-placeholder-icon.svg';
import { styles } from './styles';

export default function PostScreen() {
  return (
    <View style={styles.container}>
      <ProfilePlaceholder />
      <Text>rbeggs</Text>
      <Text>September 19</Text>
      <Text>
        In response to the growing homelessness crisis in San Francisco, a local
        nonprofit organization, Code Tenderloin, has launched a comprehensive
        initiative aimed at providing long-term solutions for individuals
        experiencing homelessness. The organization, founded in 2015, is
        dedicated to addressing both immediate needs and underlying causes of
        homelessness through a combination of shelter services, job training
        programs, and mental health support. read more online:
        https://www.codetenderloin.org/
      </Text>
      <Text>
        Image URL:
        'https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg'
      </Text>
      <HeartIcon />
      <Text>256 Likes</Text>
      <ShareIcon />
      <ProfilePlaceholder />
      <Text>philip_ye</Text>
      <Text>September 20</Text>
      <Text>
        This organization is doing amazing work tackling the complex root causes
        of the issue.
      </Text>
      <ProfilePlaceholder />
      <Text>vppraggie</Text>
      <Text>September 21</Text>
      <Text>Thanks for sharing!</Text>
    </View>
  );
}
