import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={{ fontSize: 15 }}>Pagina Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
