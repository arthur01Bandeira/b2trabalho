import styled from 'styled-components/native';


export const Container = styled.View`
flex: 1;
padding: 16px;
`;


export const Title = styled.Text`
font-size: 22px;
font-weight: 700;
margin-bottom: 20px;
`;


export const Fab = styled.TouchableOpacity`
position: absolute;
bottom: 20px;
right: 20px;
background: #1976d2;
width: 56px;
height: 56px;
border-radius: 28px;
align-items: center;
justify-content: center;
`;


export const FabText = styled.Text`
color: #fff;
font-size: 26px;
`;