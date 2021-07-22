import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { Appbar, Colors } from 'react-native-paper';
import PostCard from '../../components/PostCard';
import StoryBoard from './StoryBoard';

const Timeline = () => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={styles.header}>
        <Image
          source={require('../../../assets/text-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Appbar.Content />

        <Appbar.Action icon="plus-box-outline" color={Colors.black} />
        <Appbar.Action icon="heart-outline" color={Colors.black} />
        <Appbar.Action icon="chat-outline" color={Colors.black} />
      </Appbar.Header>

      {/* timeline */}
      <FlatList
        ListHeaderComponent={<StoryBoard />}
        data={[...new Array(10).keys()].map((item) => item + 1)}
        renderItem={({ item, index }) => {
          return (
            <PostCard
              postUri={`https://picsum.photos/${(Math.random() * 1000 < 400
                ? Math.random() * 1000 + 400
                : Math.random() * 1000
              ).toFixed(0)}`}
              profileUri={`https://randomuser.me/api/portraits/women/${(
                Math.random() * 100
              ).toFixed(0)}.jpg`}
            />
          );
        }}
        keyExtractor={(_, i) => `${i}`}
      />
    </View>
  );
};

export default Timeline;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: 44,
    width: '30%',
  },
});
