import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '10/09/2023',
    type: 0 // Despezas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '22/09/2023',
    type: 1 // Recitra / Entrada
  },
  {
    id: 3,
    label: 'Salário',
    value: '5.400,00',
    date: '07/09/2023',
    type: 1 // Receita / Entrada
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Pedro Reckel"/>
      
      <Balance saldo='89.972,45' gastos='-527,00'></Balance>

      <Actions></Actions>

      <Text style={styles.title}>Útimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id) }
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Movements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14, 
  }
});
