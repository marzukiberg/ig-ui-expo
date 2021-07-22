import { AntDesign, Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Config from '../../utils/Config';

const Tab = createMaterialTopTabNavigator();

const Profile = () => {
  const Feed = () => {
    return (
      <View style={styles.feed}>
        <FlatList
          data={[...new Array(20).keys()]}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image
                source={{
                  uri:
                    Config.BASE_URL_IMAGE + (Math.random() * 1000).toFixed(0),
                }}
                resizeMode="cover"
                style={styles.feedImage}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(_, i) => `${_}`}
          numColumns={3}
        />
      </View>
    );
  };
  const Tagged = () => {
    return (
      <View>
        <FlatList
          data={[...new Array(20).keys()]}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image
                source={{
                  uri:
                    Config.BASE_URL_IMAGE + (Math.random() * 1000).toFixed(0),
                }}
                resizeMode="cover"
                style={styles.feedImage}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(_, i) => `${_}`}
          numColumns={3}
        />
      </View>
    );
  };

  const Dashboard = () => (
    <View style={styles.dashboard}>
      <View style={styles.dashboardHeader}>
        <View style={styles.dashboardHeaderAvatarContainer}>
          <Image
            source={{ uri: Config.BASE_URL_PROFILE_IMG_MEN + '10.jpg' }}
            resizeMode="cover"
            style={styles.dashboardHeaderAvatar}
          />
        </View>
        <View style={styles.dashboardHeaderStats}>
          <Text style={styles.dashboardHeaderStatsTitle}>26</Text>
          <Text style={styles.dashboardHeaderStatsSubtitle}>Posts</Text>
        </View>
        <View style={styles.dashboardHeaderStats}>
          <Text style={styles.dashboardHeaderStatsTitle}>1M</Text>
          <Text style={styles.dashboardHeaderStatsSubtitle}>Followers</Text>
        </View>
        <View style={styles.dashboardHeaderStats}>
          <Text style={styles.dashboardHeaderStatsTitle}>3</Text>
          <Text style={styles.dashboardHeaderStatsSubtitle}>Followings</Text>
        </View>
      </View>
      <View style={styles.dashboardContent}>
        <Text>Jeff Bezos</Text>
        <Text style={styles.dashboardContentText} numberOfLines={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          sit amet dictum erat. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Ut tempus sed elit et
          vestibulum. Nunc eget magna ac dui aliquet sagittis.
        </Text>
      </View>
      <View style={styles.dashboardFooter}>
        <TouchableOpacity style={styles.dashboardFooterAction}>
          <Text style={styles.dashboardFooterText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dashboardFooterAction}>
          <Text style={styles.dashboardFooterText}>Promote</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dashboardFooterAction}>
          <Text style={styles.dashboardFooterText}>Insight</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <Text style={styles.headerTitle}>jeffbezos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerAction}>
            <AntDesign name="plussquareo" size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerAction}>
            <Ionicons name="menu-outline" size={32} />
          </TouchableOpacity>
        </View>
      </View>

      <Dashboard />
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          showIcon: true,
          tabStyle: { borderBottomColor: 'black' },
        }}
        sceneContainerStyle={{ flex: 1, backgroundColor: 'white' }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name="apps-sharp" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Tagged"
          component={Tagged}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name="people-sharp" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold' },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAction: {
    marginLeft: 20,
  },
  dashboard: {
    // flex: 1,
    padding: 14,
  },
  dashboardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 14,
  },
  dashboardHeaderAvatarContainer: { flex: 1 },
  dashboardHeaderAvatar: {
    // flex: 1,
    width: Dimensions.get('screen').width / 4 - 20,
    height: Dimensions.get('screen').width / 4 - 20,
    borderRadius: (Dimensions.get('screen').width / 4 - 20) / 2,
    borderColor: '#ddd',
    borderWidth: 4,
  },
  dashboardHeaderStats: {
    flex: 1,
    alignItems: 'center',
  },
  dashboardHeaderStatsTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  dashboardContentText: {
    marginBottom: 14,
  },
  dashboardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dashboardFooterAction: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  feed: {
    flex: 1,
  },
  feedImage: {
    width: Dimensions.get('screen').width / 3,
    height: Dimensions.get('screen').width / 3,
  },
});
