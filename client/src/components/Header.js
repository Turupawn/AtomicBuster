import React from "react";
import { Box, Heading, Text } from "rimble-ui";

class Header extends React.Component {
  render() {
    return (
      <Box bg="primary" p={3} justifyContent="center" flexDirection="column">
        <Box maxWidth="600px" mx="auto">
          <Heading fontSize={4} color={"white"}>AtomicBuster.com</Heading>
          <Text italic color={"white"}>Bet and support your favorite players</Text>
        </Box>
      </Box>
    );
  }
}

export default Header;