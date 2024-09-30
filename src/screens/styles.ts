import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'grey',
    gap: 1,
  },
  post: {
    paddingHorizontal: 15,
    paddingTop: 8,
    backgroundColor: 'white',
  },
  person_header: {
    paddingTop: 15,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name_profile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  post_date: {
    color: 'grey',
    paddingRight: 2,
    fontSize: 11,
  },
  da_text: {
    paddingVertical: 15,
    fontSize: 13,
  },
  da_link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  da_image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.5,
    borderRadius: 10,
  },
  interactions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  comments: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  c_text: {
    paddingLeft: 34,
    paddingTop: 8,
  },
});
