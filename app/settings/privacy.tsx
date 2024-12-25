import { ThemedView } from "@/components/ThemedView";
import { Container } from "../styles";
import { ThemedText } from "@/components/ThemedText";

export default function PrivacyScreen() {
  return (
    <Container>
      <ThemedView>
        <ThemedText type='title'>Privacy Screen</ThemedText>
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