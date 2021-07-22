import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const StoryBoard = () => {
  return (
    <ScrollView
      style={styles.stories}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <TouchableOpacity style={styles.story} key={item}>
          <Image
            style={styles.storyImage}
            source={{
              uri: `https://randomuser.me/api/portraits/men/${(
                Math.random() * 100
              ).toFixed(0)}.jpg`,
            }}
            resizeMode="cover"
          />
          <Text
            style={styles.storyUsername}
            lineBreakMode="tail"
            numberOfLines={1}
          >
            random_user{(Math.random() * 100).toFixed(0)}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default StoryBoard;

const styles = StyleSheet.create({
  stories: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 14,
  },
  story: {
    width: SCREEN_WIDTH / 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  storyImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 12,
    borderWidth: 2,
    borderColor: Colors.pink300,
  },
  storyUsername: {
    fontSize: 12,
  },
});
