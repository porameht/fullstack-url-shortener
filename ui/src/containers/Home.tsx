import URLShortenerForm from "../components/urlShortenerForm";
import Background from "../components/background";
import { Box } from "@chakra-ui/react";
function App() {
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <URLShortenerForm />
      <Background />
    </Box>
  );
}

export default App;
