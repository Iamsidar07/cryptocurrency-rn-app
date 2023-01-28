import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { useFonts } from 'expo-font';

export default function App() {
  
    const [loaded] = useFonts({
      "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
      "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
      "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
     
    });



  if (!loaded) return null;
  return (
    <View style={styles.container}>
      <HomeScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
