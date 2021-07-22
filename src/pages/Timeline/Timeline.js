import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import PostCard from '../../components/PostCard';
import StoryBoard from './StoryBoard';

const Timeline = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require('../../../assets/text-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerAction}>
            <AntDesign name="plussquareo" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerAction}>
            <AntDesign name="hearto" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerAction}>
            <AntDesign name="message1" size={24} />
          </TouchableOpacity>
        </View>
      </View>

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
    padding: 14,
    height: 64,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    height: 32,
    width: Dimensions.get('screen').width / 4,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAction: {
    marginLeft: 20,
  },
});
