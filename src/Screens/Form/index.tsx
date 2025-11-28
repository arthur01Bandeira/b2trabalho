import { SafeAreaView } from 'react-native';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { addItem } from '../../storage/items';
import { Container, Title } from './styles';


export default function FormScreen({ navigation }: any) {
const { control, handleSubmit, reset } = useForm({ defaultValues: { title: '', description: '' } });


const onSubmit = async (data: any) => {
await addItem({ id: String(Date.now()), ...data });
reset();
navigation.navigate('List', { refresh: Date.now() });
};


return (
<SafeAreaView style={{ flex: 1 }}>
<Container>
<Title>Cadastrar Item</Title>


<Input name="title" label="Título" control={control} />
<Input name="description" label="Descrição" multiline control={control} />


<Button title="Salvar" onPress={handleSubmit(onSubmit)} />
<Button title="Ir para lista" variant="secondary" onPress={() => navigation.navigate('List')} />
</Container>
</SafeAreaView>
);
}