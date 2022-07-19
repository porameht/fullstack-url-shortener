import axios from "axios";
import React, { useState } from "react";
import { Input, Button, Box, Heading, InputGroup } from "@chakra-ui/react";

function URLShortenerForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    debugger;
  };
  return (
    <Box position="relative">
      <form onSubmit={handleSubmit}>
        <Button type="submit">CREATE SHORT URL</Button>
      </form>
    </Box>
  );
}

export default URLShortenerForm;
