import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View style={styles.container}>
      <Text
        style={styles.label}
      >Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text
        style={styles.label}
      >Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        style={styles.button}
        title="Save Blog Post"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center'
  },
  input: {
    alignSelf: 'stretch',
    marginBottom: 15,
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 18,
  },
  label: {
    marginBottom: 5,
    fontSize: 20,
  },
  button: {
    alignSelf: 'stretch'
  },
});

export default BlogPostForm;