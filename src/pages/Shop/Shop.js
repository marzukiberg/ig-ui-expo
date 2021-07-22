import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Config from '../../utils/Config';
import { iteratee } from 'lodash';

const Shop = () => {
  const ListHeaderComponent = () => {
    return (
      <View style={styles.listHeader}>
        <View style={styles.listHeaderSearch}>
          <Ionicons name="search" color="#9a9a9a" size={24} />
          <TextInput
            style={styles.listHeaderSearchInput}
            placeholder="Search"
          />
        </View>
        <ScrollView
          horizontal
          style={styles.categories}
          showsHorizontalScrollIndicator={false}
        >
          {['Shops', 'Editor choices', 'Collections', 'Guides', 'Videos'].map(
            (item) => (
              <TouchableOpacity style={styles.category} key={item}>
                <Text style={styles.categoryText}>{item}</Text>
              </TouchableOpacity>
            )
          )}
        </ScrollView>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Image
          resizeMode="cover"
          source={{
            uri: Config.BASE_URL_IMAGE + (Math.random() * 1000).toFixed(0),
          }}
          style={styles.itemImage}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerText}>Shop</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerAction}>
            <Ionicons name="bookmark-outline" size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerAction}>
            <Ionicons name="menu-outline" size={32} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={[...new Array(20).keys()]}
        ListHeaderComponent={<ListHeaderComponent />}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => `${item}`}
      />
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAction: {
    marginLeft: 14,
  },
  listHeader: {
    padding: 14,
  },
  listHeaderSearch: {
    backgroundColor: '#eee',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  listHeaderSearchInput: {
    flex: 1,
    paddingLeft: 12,
  },
  categories: { paddingVertical: 12 },
  category: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginRight: 4,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 12,
  },
  itemImage: {
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').width / 2,
  },
});
