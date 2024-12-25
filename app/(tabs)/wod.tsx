import { ThemedView } from "@/components/ThemedView";
import { Container, SafeContainer } from "../styles";
import { ThemedText } from "@/components/ThemedText";
import React from "react";

export default function WodScreen() {
  return (
    <SafeContainer>
      <ThemedView>
        <ThemedText type='title'>Wod Screen</ThemedText>
      </ThemedView>
    </SafeContainer>
  );
}
