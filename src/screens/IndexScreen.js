import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost} = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('Show', { id: item.id })}
          >
            <View style={styles.container}>
              <Text style={styles.title}>{item.title} - {item.id}</Text>
              <TouchableOpacity
                onPress={() => deleteBlogPost(item.id)}
              >
                <Feather style={styles.icon} name="trash"/>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} style={{marginRight: 5}}/>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 20,
    borderColor: 'grey',
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  icon: {
    fontSize: 24,
  }
});

export default IndexScreen;