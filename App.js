import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { Path, Svg } from 'react-native-svg';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#487F68', '#3A6353', '#3A6353', '#161817']} style={styles.gradient}>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 82,
    fontWeight: "bold"
  }
});
