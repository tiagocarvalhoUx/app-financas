
import {StyleSheet, Text, View, FlatList} from 'react-native';

import Header from '../src/pages/Home/components/Header'
import Balance from '../src/pages/Home/components/Header/Balance';
import Movements from '../src/pages/Home/components/Header/Movements';
import Actions from '../src/pages/Home/components/Header/Actions';

const list = [
  {
    id:1,
    label: 'Boleto Internet',
    value: '250,00',
    date: '10/05/2024',
    type: 0 // despesas
  },
  {
    id: 2,
    label:'Pix Mae',
    value: '500,00',
    date: '12/05/2024',
    type: 1 // receita/ entradas
  },
 
  {
    id: 3,
    label:'Pensão Alimentar',
    value: '3.500,00',
    date: '21/05/2024',
    type: 1 // receita/ entradas
  },
]
    

export default function Home() {
  return (
  <View>
    <Header name="Tiago Carvalho Ux"/>
    
    <Balance saldo="10.500" gastos="787,90"/>

    <Actions/> 

    <Text style={styles.title}>Ùltimas movimentações </Text>

    <FlatList 
    style={styles.list}
    data = {list}
    keyExtractor={(item) => String (item.id)}
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) => <Movements data={item} /> }
    />
    
  </View>

      
  );  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    margin:14,
    
  },
  list:{
    marginStart: 14,
    marginEnd:14,

  }
});
    

