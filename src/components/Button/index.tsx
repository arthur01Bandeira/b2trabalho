import { Btn, BtnText } from './styles';


export function Button({ title, onPress, variant = 'primary' }: any) {
return (
<Btn onPress={onPress} variant={variant}>
<BtnText>{title}</BtnText>
</Btn>
);
}