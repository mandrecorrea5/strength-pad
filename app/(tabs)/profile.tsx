import { Header } from "@/components/Header";
import { Container, InternalLink, SafeContainer } from "../styles";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function ProfileScreen() {
  return (
    <SafeContainer>
      <Header />
      <Container>
        <ThemedView>
          <ThemedText type='title'>Profile Screen</ThemedText>
        </ThemedView>
      </Container>
    </SafeContainer>
  );
}

