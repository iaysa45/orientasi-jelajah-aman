import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing, typeScale } from "../../constants/styles";

export default function TentangScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text accessibilityLabel="Judul halaman Tentang" style={styles.title}>
          Tentang
        </Text>

        <Text style={styles.appName}>Orientasi Jelajah Aman</Text>

        <Text style={styles.info}>Versi 1.0.0</Text>

        <Text style={styles.info}>Dibuat oleh Kaysa</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.besar,
  },

  title: {
    fontSize: typeScale.judul,
    fontWeight: "700",
    marginBottom: spacing.besar,
  },

  appName: {
    fontSize: typeScale.subjudul,
    fontWeight: "600",
    marginBottom: spacing.sedang,
  },

  info: {
    fontSize: typeScale.isi,
    marginBottom: spacing.kecil,
  },
});
