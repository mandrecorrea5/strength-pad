import { ThemedView } from "@/components/ThemedView";
import { Container } from "../styles";
import { ThemedText } from "@/components/ThemedText";

export default function ReportsScreen() {
  return (
    <Container>
      <ThemedView>
        <ThemedText type='title'>Relatórios</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText
          style={{
            textAlign: 'center',
          }}>
          Em breve...
        </ThemedText>
      </ThemedView>
    </Container>
  );
}
