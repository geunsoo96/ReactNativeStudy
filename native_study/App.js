import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>gonnijjiwa</Text>
        <Button title="하이" />
        <StatusBar style="auto" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
