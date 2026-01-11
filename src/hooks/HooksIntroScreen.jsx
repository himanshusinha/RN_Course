import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const topics = [
  '📌 What are Hooks in React Native?',
  '📌 Why were Hooks introduced?',
  '📌 Rules of Hooks',
  '📌 Class Components vs Functional Components',
  '📌 useState Hook with Example',
  '📌 Common Mistakes with Hooks',
  '📌 Real-world Use Cases of Hooks',
  '📌 Next Steps in Learning Hooks',
];

const HooksIntroScreen = () => {
  return (
   <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        React Native Hooks - Discussion Topics
      </Text>

      <FlatList
        data={topics}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16,
    color: '#000',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  bullet: {
    fontSize: 16,
    marginRight: 8,
    lineHeight: 22,
  },
  text: {
    flex: 1,
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
  },
});
export default HooksIntroScreen

// state side effects 