import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import React, { useEffect } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Config from '../../utils/Config';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const Reels = ({ playing }) => {
  const [liked, setliked] = React.useState(false);

  const video = React.useRef(null);

  useEffect(() => {
    if (playing) {
      video.current.playAsync();
    } else {
      video.current.pauseAsync();
    }
  });

  const like = () => {
    setliked(!liked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Reels</Text>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Video
        ref={video}
        style={styles.content}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="cover"
        isLooping
      />

      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <View style={styles.user}>
            <Image
              source={{ uri: Config.BASE_URL_PROFILE_IMG_MEN + '1.jpg' }}
              style={styles.userImage}
              resizeMode="cover"
            />
            <Text style={styles.userText}>jeffbezos · </Text>
            <TouchableOpacity>
              <Text style={styles.userTextFollow}>Follow</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.caption}>lorem ipsum dolor sit amet.</Text>
          <Text style={styles.song}>original sound - reels dummy video</Text>
        </View>
        <View style={styles.footerRight}>
          <TouchableOpacity style={styles.footerAction} onPress={like}>
            <Ionicons
              name={liked ? 'heart' : 'heart-outline'}
              size={24}
              color="white"
            />
            <Text style={styles.footerActionText}>100k</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerAction}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color="white"
            />
            <Text style={styles.footerActionText}>311</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerAction}>
            <Ionicons name="paper-plane-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerAction}>
            <Ionicons name="ellipsis-vertical" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerAction}>
            <Image
              source={{ uri: Config.BASE_URL_PROFILE_IMG_MEN + '10.jpg' }}
              style={styles.footerActionImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Reels;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', position: 'relative' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { height: 4, width: 4 },
  },
  content: {
    position: 'absolute',
    zIndex: -1,
    left: 0,
    top: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    padding: 14,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerLeft: {
    justifyContent: 'flex-end',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  userImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  userText: {
    color: 'white',
    fontWeight: 'bold',
  },
  userTextFollow: {
    color: 'white',
  },
  caption: {
    color: 'white',
    marginBottom: 12,
  },
  song: {
    color: 'white',
  },
  footerAction: {
    marginBottom: 32,
    alignItems: 'center',
  },
  footerActionText: {
    color: 'white',
    textAlign: 'center',
  },
  footerActionImage: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
  },
});
