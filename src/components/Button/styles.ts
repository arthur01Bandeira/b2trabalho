import styled from 'styled-components/native';

type BtnProps = {
  variant?: 'primary' | 'secondary';
};

export const Btn = styled.TouchableOpacity<BtnProps>`
  padding: 14px;
  border-radius: 8px;
  margin-top: 10px;
  background: ${({ variant }: BtnProps) =>
    variant === 'secondary' ? '#4caf50' : '#1976d2'};
  align-items: center;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-weight: 700;
`;
