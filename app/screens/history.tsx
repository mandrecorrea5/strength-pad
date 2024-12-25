import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Container, InternalLink } from "../styles";

export default function HistoryScreen() {
  return (
    <Container>
      <ThemedView>
        <InternalLink href='/screens/exercise'>
          <ThemedText type='link'>Cadastro de Exercício</ThemedText>
        </InternalLink>
        <InternalLink href='/(tabs)/wod'>
          <ThemedText type='link'>Cadastro de Treino</ThemedText>
        </InternalLink>
        <InternalLink href='/(tabs)/history'>
          <ThemedText type='link'>Histórico</ThemedText>
        </InternalLink>
        <InternalLink href='/screens/reports'>
          <ThemedText type='link'>Relatórios</ThemedText>
        </InternalLink>
      </ThemedView>
    </Container>
  );
}