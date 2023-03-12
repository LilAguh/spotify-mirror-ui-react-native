import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import Down from "./src/icons/down.png"
import Dots from "./src/icons/more.png"
import Cd from "./src/images/cd.png"
import Caja from "./src/images/caja.png"
import Like from "./src/icons/Like.png"

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#487F68', '#3A6353', '#3A6353', '#161817']} style={styles.gradient}>
        <View style={styles.header}>
          <Image source={Down} style={styles.headerIcons} />
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ color: "#BEC3C2", fontWeight: "100" }}>REPRODUCIENDO DESDE ÁLBUM</Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>Yeezus</Text>
          </View>
          <Image source={Dots} style={styles.headerIcons} />
        </View>
        <View style={styles.body}>
          <Image source={Cd} style={styles.Cover} />
          <Image source={Caja} style={styles.Cover} />
        </View>
        <View style={styles.reproductor}>
          <View style={styles.songTitle}>
            <View>
              <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Bound 2</Text>
              <Text style={{ color: "#BEC3C2", fontWeight: "bold" }}>Kanyee West</Text>
            </View>
            <Image source={Like} />
          </View>
        </View>
      </LinearGradient >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  gradient: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  headerIcons: {
    tintColor: "#BEC3C2",
    width: 24,
    height: 30
  },
  body: {
    flex: 1,
    width: "90%",
    alignItems: "center",
  },
  Cover: {
    height: 360,
    width: 360,
    position: "absolute"
  },
  reproductor: {
    width: "90%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  songTitle: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
