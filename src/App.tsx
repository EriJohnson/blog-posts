import { Container } from "@chakra-ui/react";
import { Header } from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <Container
      display="flex"
      flexDirection="column"
      maxWidth="none"
      height="100vh"
      padding={0}
    >
      <Header />
      <Main />
    </Container>
  );
}
