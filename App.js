import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import FeedScreens from './src/Screens/FeedScreens';
import CreatePostScreen from './src/Screens/CreatePostScreen';

export default function App() {

  // console.warn("This is a error")  
  return (
    <View style={styles.container}>
      <CreatePostScreen />


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
