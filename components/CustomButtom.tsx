import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'danger';
  isLoading?: boolean;
}

const CustomButtom: React.FC<CustomButtonProps> = ({ title, variant = "primary", isLoading, ...props }) => {
  return (
    <Container variant={variant} {...props}>
      {isLoading ? (
        <ActivityIndicator color={variant === "primary" ? "#fff" : "#000"} />
      ) : (
        <ButtonText variant={variant}>{title}</ButtonText>
      )
      }
    </Container>
  )
}

const Container = styled.TouchableOpacity<{ variant: "primary" | "secondary" | "danger" }>`
  width: 100%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  ${({ variant }) =>
    variant === "primary" && `
      background-color: #007bff;      
  `}
  ${({ variant }) =>
    variant === "secondary" && `
      background-color: #f0f0f0;
      border: 1px solid #ccc;
  `}

  ${({ variant }) =>
    variant === "danger" && `
      background-color: #d9534f;      
  `}
`;

const ButtonText = styled.Text<{ variant: string }>`  
  font-size: 16px;
  font-weight: bold;

  ${({ variant }) =>
    variant === "primary" && `
      color: #fff;
  `}

  ${({ variant }) =>
    variant === "secondary" && `
      color: #000;
  `}

  ${({ variant }) =>
    variant === "danger" && `
      color: #fff;
  `}
`;

export default CustomButtom;