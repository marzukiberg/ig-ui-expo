import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Explore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerSearchContainer}>
          <Ionicons name="search" size={24} />
          <TextInput placeholder="Search" style={styles.headerSearchInput} />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.contentRow}>
          {[1, 2, 3].map((item) => (
            <TouchableOpacity key={item}>
              <Image
                style={styles.contentImage}
                source={{
                  uri: `https://picsum.photos/${(Math.random() * 1000).toFixed(
                    0
                  )}`,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.contentRow}>
          {[1, 2, 3].map((item) => (
            <TouchableOpacity key={item}>
              <Image
                style={styles.contentImage}
                source={{
                  uri: `https://picsum.photos/${(Math.random() * 1000).toFixed(
                    0
                  )}`,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.contentRow}>
          {[1, 2, 3].map((item) => (
            <TouchableOpacity key={item}>
              <Image
                style={styles.contentImage}
                source={{
                  uri: `https://picsum.photos/${(Math.random() * 1000).toFixed(
                    0
                  )}`,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.contentRow}>
          {[1, 2, 3].map((item) => (
            <TouchableOpacity key={item}>
              <Image
                style={styles.contentImage}
                source={{
                  uri: `https://picsum.photos/${(Math.random() * 1000).toFixed(
                    0
                  )}`,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.contentRow}>
          {[1, 2, 3].map((item) => (
            <TouchableOpacity key={item}>
              <Image
                style={styles.contentImage}
                source={{
                  uri: `https://picsum.photos/${(Math.random() * 1000).toFixed(
                    0
                  )}`,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.contentRow}>
          {[1, 2, 3].map((item) => (
            <TouchableOpacity key={item}>
              <Image
                style={styles.contentImage}
                source={{
                  uri: `https://picsum.photos/${(Math.random() * 1000).toFixed(
                    0
                  )}`,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {},
  headerSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    margin: 14,
    padding: 4,
  },
  headerSearchInput: {
    flex: 1,
    marginLeft: 12,
  },
  contentRow: {
    flexDirection: 'row',
  },
  contentImage: {
    width: Dimensions.get('screen').width / 3,
    height: Dimensions.get('screen').width / 3,
  },
});
