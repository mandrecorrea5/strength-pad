import { Container } from "@/app/styles";
import React, { useState } from "react";

import * as Progress from 'react-native-progress';
import { ThemedText } from "./ThemedText";
import { View, Text, StyleSheet } from "react-native";

export function ProgressBar() {
  const [currentWorkouts, setCurrentWorkouts] = useState(5); // Treinos concluídos
  const [totalWorkouts, setTotalWorkouts] = useState(7); // Total de treinos

  const progress = currentWorkouts / totalWorkouts;
  return (
    <Container>
      <ThemedText type="defaultSemiBold">Progresso da Semana</ThemedText>
      {/* Barra de Progresso com Texto Sobreposto */}
      <View style={styles.progressContainer}>
        <Progress.Bar
          progress={progress}
          width={300}
          height={20}
          color="#00FF00"
          unfilledColor="#FFFFFF"
          borderWidth={1}
          borderColor="#000000"
        />
        <Text style={styles.progressText}>
          {currentWorkouts} treinos de {totalWorkouts}
        </Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  progressText: {
    position: "absolute",
    zIndex: 1,
    color: "#000000",
    fontSize: 16,
  },
});