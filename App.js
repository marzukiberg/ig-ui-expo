import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Explore from './src/pages/Explore/Explore';
import Profile from './src/pages/Profile/Profile';
import Reels from './src/pages/Reels/Reels';
import Shop from './src/pages/Shop/Shop';
import Timeline from './src/pages/Timeline/Timeline';

const Tab = createBottomTabNavigator();

const App = () => {
  const [playReels, setPlayReels] = React.useState(false);
  const listener = (e) => {
    if (e.route.name === 'Reels') {
      setPlayReels(true);
    } else {
      setPlayReels(false);
    }
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: '#000',
        }}
      >
        <Tab.Screen
          listeners={listener}
          name="Timeline"
          component={Timeline}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? `md-home` : `md-home-outline`}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          listeners={listener}
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-search-outline" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          listeners={listener}
          name="Reels"
          children={() => <Reels playing={playReels} />}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'md-film' : 'md-film-outline'}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          listeners={listener}
          name="Shop"
          component={Shop}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'basket' : 'basket-outline'}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          listeners={listener}
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'person-circle' : 'person-circle-outline'}
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
