import axios from "axios";
import React, { useState } from "react";
import { Input, Button, Box, Heading, InputGroup } from "@chakra-ui/react";
import { SERVER_ENDPOINTS } from "../config/index";

const URLShortenerForm = () => {
  const [destination, setDestination] = useState();
  const [shortUrl, setShortUrl] = useState<{ shortId: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShortUrl(null);
    const result = await axios
      .post(`${SERVER_ENDPOINTS}/api/url`, {
        destination,
      })
      .then((resp) => resp.data);
    setShortUrl(result);
  };

  return (
    <Box position="relative" zIndex="2" backgroundColor="white" padding="6">
      <form onSubmit={handleSubmit}>
        {/* destination: {destination} */}
        <InputGroup>
          <Input
            onChange={(e: any) => setDestination(e.target.value)}
            placeholder="https://example.com"
          ></Input>

          <Button type="submit">CREATE</Button>
        </InputGroup>
      </form>
      {shortUrl && (
        <a href={`${SERVER_ENDPOINTS}/${shortUrl?.shortId}`}>CLICK ME</a>
      )}
    </Box>
  );
};

export default URLShortenerForm;
