
import { TextInputProps } from "react-native";
import { styled } from "styled-components/native";

interface CustemInputProps extends TextInputProps {
  error?: string;
  title?: string;
  size?: 'small' | 'medium' | 'large';
}

const CustomInput: React.FC<CustemInputProps> = ({ error, title, size, ...props }) => {
  return (
    <Container>
      {title && <Label>{title}</Label>}
      <StyledInput size={size} {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  )
}

const Container = styled.View`
  margin-bottom: 10px;
`;

const StyledInput = styled.TextInput<{ size: "small" | "medium" | "large" }>`
  border-width: 1px;
  border-color: #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: white;

  ${({ size }) => size === 'small' && `
    width: 100px;
  `}

  ${({ size }) => size === 'medium' && `
    width: 200px;
  `}

  ${({ size }) => size === 'large' && `
    width: 100%;
  `}
`;

const ErrorText = styled.Text`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  text-align: left;
`;

export default CustomInput;