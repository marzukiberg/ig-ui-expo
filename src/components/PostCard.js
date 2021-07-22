import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const PostCard = ({ profileUri, postUri }) => {
  const [liked, setLiked] = React.useState(false);
  const [clickCount, setClickCount] = React.useState(0);

  const like = () => {
    setLiked(!liked);
    setClickCount(0);
  };

  const imageLikePress = () => {
    setClickCount(clickCount + 1);
    if (clickCount === 2) {
      like();
    }
    if (clickCount > 2) {
      setClickCount(0);
    }
    setTimeout(() => {
      setClickCount(0);
    }, 1000);
  };
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderLeft}>
          <Image
            style={styles.cardHeaderImage}
            source={{ uri: profileUri }}
            width={32}
            height={32}
          />
          <View>
            <Text style={styles.cardHeaderTitle}>
              random_user{(Math.random() * 100).toFixed(0)}
            </Text>
            <Text style={styles.cardHeaderSubTitle}>USA</Text>
          </View>
        </View>
        <View style={styles.cardHeaderRight}>
          <TouchableOpacity>
            <Ionicons
              size={14}
              name="ellipsis-vertical"
              style={styles.cardHeaderRightIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableNativeFeedback onPress={imageLikePress}>
        <Image style={styles.cardPostImage} source={{ uri: postUri }} />
      </TouchableNativeFeedback>
      <View style={styles.cardFooter}>
        <View style={styles.cardActions}>
          <View style={styles.cardActionsLeft}>
            <TouchableOpacity style={styles.cardAction} onPress={like}>
              <Ionicons
                size={24}
                name={liked ? 'heart' : 'heart-outline'}
                style={styles.cardActionIcon}
                color={liked ? '#FF006E' : 'black'}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardAction}>
              <Ionicons
                size={24}
                name="chatbubble-outline"
                style={styles.cardActionIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardAction}>
              <Ionicons
                size={24}
                name="paper-plane-outline"
                style={styles.cardActionIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cardActionsRight}>
            <TouchableOpacity style={styles.cardAction}>
              <Ionicons
                size={24}
                name="bookmark-outline"
                style={styles.cardActionIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statsCardTextBold}>1.067.224 views · </Text>
          <Text style={styles.statsCardText}>Liked by </Text>
          <Text style={styles.statsCardTextBold}>_uki_fs</Text>
        </View>
        <View style={styles.cardDescription}>
          <Text
            style={styles.cardCollapsedText}
            numberOfLines={2}
            lineBreakMode="tail"
          >
            <Text style={styles.cardDescriptionBold}>
              random_user{(Math.random() * 100).toFixed(0)}{' '}
            </Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sit amet dictum erat. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Ut tempus sed
            elit et vestibulum. Nunc eget magna ac dui aliquet sagittis. Nam
            interdum arcu sed orci pulvinar hendrerit. Aenean venenatis commodo
            libero. Nam sit amet condimentum dolor, non pellentesque risus.
            Fusce viverra nisl eu nisl dictum, eu vestibulum lectus varius.
          </Text>
        </View>
        <View style={styles.cardComments}>
          <TouchableOpacity>
            <Text style={styles.seeAllCommentsText}>
              See all 4.038 comments
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardCommentsText}>
            <Text style={styles.cardCommentsTextBold}>billgates</Text>
            <Text>Nice...</Text>
          </TouchableOpacity>

          <View style={styles.cardCommentsAction}>
            <Image
              style={styles.cardCommentsActionAvatar}
              source={{ uri: profileUri }}
            />
            <TextInput
              style={styles.cardCommentsActionInput}
              placeholder="Add comment..."
            />
            <TouchableOpacity style={styles.cardCommentsActionIconButton}>
              <Text style={styles.cardCommentsActionIconButtonText}>❤️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardCommentsActionIconButton}>
              <Text style={styles.cardCommentsActionIconButtonText}>🙌</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.cardTimeInfo}>3 hours ago</Text>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
  },
  cardHeaderLeft: { flexDirection: 'row', alignItems: 'center' },
  cardHeaderImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 14,
  },
  cardHeaderTitle: {
    fontWeight: 'bold',
  },
  cardHeaderSubTitle: {
    color: '#3c3c3c',
  },
  cardHeaderRightIcon: {
    padding: 14,
  },
  cardBody: {
    flex: 1,
  },
  cardPostImage: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardActionsLeft: {
    flexDirection: 'row',
  },
  cardActionIcon: {
    marginTop: 12,
    marginHorizontal: 12,
  },
  stats: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingTop: 0,
  },
  statsCardTextBold: {
    fontWeight: 'bold',
  },
  cardDescription: {
    paddingHorizontal: 12,
    paddingVertical: 0,
    flexDirection: 'row',
  },
  cardCollapsedText: {
    textAlign: 'justify',
  },
  cardDescriptionBold: {
    fontWeight: 'bold',
    marginRight: 12,
  },
  cardComments: {
    marginHorizontal: 12,
  },
  seeAllCommentsText: {
    color: '#9a9a9a',
  },
  cardCommentsText: {
    flexDirection: 'row',
  },
  cardCommentsTextBold: {
    marginRight: 4,
    fontWeight: 'bold',
  },
  cardCommentsAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardCommentsActionAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  cardCommentsActionInput: {
    flex: 1,
    padding: 12,
  },
  cardCommentsActionIconButton: {
    marginLeft: 12,
  },
  cardTimeInfo: {
    marginHorizontal: 12,
    marginBottom: 12,
    color: '#9a9a9a',
    fontSize: 12,
  },
});
