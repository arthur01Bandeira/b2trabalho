import { Container, Title, Desc, Row, SmallButton } from './styles';


export function Card({ item, onDelete, onEdit }: any) {
return (
<Container>
<Row>
<Title>{item.title}</Title>
</Row>
{item.description ? <Desc>{item.description}</Desc> : null}


<Row style={{ marginTop: 10 }}>
<SmallButton onPress={onEdit}>
<Desc>Editar</Desc>
</SmallButton>


<SmallButton onPress={onDelete}>
<Desc style={{ color: 'red' }}>Remover</Desc>
</SmallButton>
</Row>
</Container>
);
}