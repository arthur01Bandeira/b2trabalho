import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Alert } from 'react-native';
import { getItems, removeItem, Item } from '../../storage/items'; // <-- importe o tipo
import { Card } from '../../components/Card';
import { Container, Title, Fab, FabText } from './styles';

export default function ListScreen({ route, navigation }: any) {
  const [items, setItems] = useState<Item[]>([]); // <-- TIPAGEM AQUI

  async function load() {
    const data = await getItems();
    setItems(data);
  }

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (route?.params?.refresh) load();
  }, [route?.params?.refresh]);

  const handleDelete = (id: string) => {
    Alert.alert('Remover', 'Deseja remover este item?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Remover',
        style: 'destructive',
        onPress: async () => {
          await removeItem(id);
          load();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Title>Itens cadastrados</Title>

        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Card
              item={item}
              onDelete={() => handleDelete(item.id)}
              onEdit={() => navigation.navigate('Form')}
            />
          )}
        />

        <Fab onPress={() => navigation.navigate('Form')}>
          <FabText>+</FabText>
        </Fab>
      </Container>
    </SafeAreaView>
  );
}
