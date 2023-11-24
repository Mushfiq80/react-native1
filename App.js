import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigator from './src/Navigation/index';

export default function App() {

  // console.warn("This is a error")  
  return (
    <View style={styles.container}>
      <Navigator />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
