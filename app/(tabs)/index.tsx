import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { ProgressBar } from "@/components/ProgressBar";
import { SafeContainer } from "../styles";
import { Ionicons } from "@expo/vector-icons";
import { Href, router } from "expo-router";

// Componente Principal
export default function HomeScreen() {
  const handleRedirectTo = (route: Href) => {
    console.log("Redirecionando para a rota", route);
    router.push(route);
  }
  return (
    <SafeContainer>
      {/* Barra de Progresso */}
      <ProgressBarContainer>
        <ProgressBar />
      </ProgressBarContainer>

      {/* Botão de Cadastrar Treino */}
      <HighlightButton>
        <Ionicons name="barbell-outline" size={30} color="#fff" />
        <HighlightButtonText>Adicionar Treino</HighlightButtonText>
      </HighlightButton>

      {/* Botões de Ações */}
      <ActionList>
        <ActionButton onPress={() => handleRedirectTo('/screens/exercise')}>
          <IconWrapper>
            <Ionicons name="create-outline" size={24} color="#007bff" />
          </IconWrapper>
          <ActionText>Cadastro de Exercício</ActionText>
        </ActionButton>
        <ActionButton>
          <IconWrapper>
            <Ionicons name="calendar-outline" size={24} color="#007bff" />
          </IconWrapper>
          <ActionText>Cadastrar Semana</ActionText>
        </ActionButton>
        <ActionButton>
          <IconWrapper>
            <Ionicons name="shirt-outline" size={24} color="#007bff" />
          </IconWrapper>
          <ActionText>Cadastrar Acessórios</ActionText>
        </ActionButton>
        <ActionButton>
          <IconWrapper>
            <Ionicons name="trophy-outline" size={24} color="#007bff" />
          </IconWrapper>
          <ActionText>Recorde Pessoal</ActionText>
        </ActionButton>
        <ActionButton>
          <IconWrapper>
            <Ionicons name="stats-chart-outline" size={24} color="#007bff" />
          </IconWrapper>
          <ActionText>Relatórios</ActionText>
        </ActionButton>
        <ActionButton>
          <IconWrapper>
            <Ionicons name="podium-outline" size={24} color="#007bff" />
          </IconWrapper>
          <ActionText>Ranking</ActionText>
        </ActionButton>
      </ActionList>
    </SafeContainer>
  );
}

/* Barra de Progresso */
const ProgressBarContainer = styled.View`  
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`;

/* Botão de Destaque */
const HighlightButton = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: #007bff;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  flex-direction: column; /* Alinha ícone e texto */
  border: 2px solid #e6f7ff;
`;

const HighlightButtonText = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
  text-align: center;
`;

/* Botões de Ação */
const ActionList = styled.View`
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const ActionButton = styled.TouchableOpacity`
  width: 48%;
  height: 80px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 15px;
  elevation: 3;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const IconWrapper = styled.View`
  width: 50px;
  height: 50px;
  background-color: #e6f7ff;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const ActionIcon = styled.Text`
  font-size: 24px;
`;

const ActionText = styled.Text`
  font-size: 16px;
  color: #333;
  flex: 1;
`;
