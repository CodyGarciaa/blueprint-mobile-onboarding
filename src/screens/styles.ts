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
  personHeader: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  dateDiv: {
    paddingRight: 2,
  },
  postDate: {
    color: 'grey',
    fontSize: 11,
  },
  caption: {
    paddingVertical: 15,
    fontSize: 13,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  postImage: {
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
  commentText: {
    paddingLeft: 34,
    paddingTop: 8,
  },
});
