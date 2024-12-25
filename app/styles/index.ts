import { alignEnum } from './../../node_modules/react-native-svg/src/lib/extract/extractViewBox';
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import styled from "styled-components/native";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #f7f7f7;
  align-items: center;
  padding: 20px;
`;

export const Container = styled.View`

  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

export const ActionButton = styled(Link)`  
  width: 100%;
  padding: 10px;
  background-color: #0a7ea4;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: white;
`;

export const TextActionButton = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const SquareButton = styled(ThemedView)`  
  width: 45%;
  aspect-ratio: 1;
  padding: 10px;  
  background-color: #0a7ea4;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  color: white;
`;

export const Section = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

