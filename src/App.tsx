import { Container } from "@chakra-ui/react";
import { Header } from "./components/Header";
import Main from "./components/Main";
import { PostProvider } from "./contexts/PostContext";

export default function App() {
  return (
    <PostProvider>
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
    </PostProvider>
  );
}
