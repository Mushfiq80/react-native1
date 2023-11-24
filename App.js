import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import FeedPost from './src/component/FeedPost';
import posts from './assets/data/posts.json';


export default function App() {

  // console.warn("This is a error")  
  return (
    <View style={styles.container}>
      <FlatList
          data={posts}
          renderItem={({ item }) => <FeedPost post={item} /> }
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
