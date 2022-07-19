import axios from "axios";
import React, { useState } from "react";
import { Input, Button, Box, Heading, InputGroup } from "@chakra-ui/react";
import { SERVER_ENDPOINTS } from "../config/index";

function URLShortenerForm() {
  const [destination, setDestination] = useState();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await axios
      .post(`${SERVER_ENDPOINTS}/api/url`, {
        destination,
      })
      .then((resp) => resp.data);

    debugger;
    console.log(result);
  };

  return (
    <Box position="relative">
      <form onSubmit={handleSubmit}>
        destination: {destination}
        <Input
          onChange={(e: any) => setDestination(e.target.value)}
          placeholder="https://example.com"
        ></Input>
        <Button type="submit">CREATE</Button>
      </form>
    </Box>
  );
}

export default URLShortenerForm;
