import { Controller } from 'react-hook-form';
import { Container, Label, Field } from './styles';


export function Input({ control, name, label, multiline = false }: any) {
return (
<Container>
<Label>{label}</Label>
<Controller
control={control}
name={name}
rules={{ required: name === 'title' }}
render={({ field: { onChange, onBlur, value } }) => (
<Field
multiline={multiline}
value={value}
onBlur={onBlur}
onChangeText={onChange}
/>
)}
/>
</Container>
);
}