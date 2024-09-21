/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Container, VStack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box bg="#6B7280" minH="80vh" display="flex" flexDirection="column" alignItems="center" px={4}>
      <Container maxW="container.lg" mt="50px">
        <VStack spacing={8} textAlign="center" py={1}>
          <Heading mb={4} fontFamily="'Righteous', cursive" color="#F9FAFB">Contact Us</Heading>
          <Heading mb={4} fontFamily="'Righteous', cursive" color="#F9FAFB" fontSize="lg">We'd love to hear from you</Heading>
        </VStack>

        <Box
          bg="#F9FAFB"
          borderRadius="35px"
          p={8}
          border="8px solid #1E3A8A"
          boxShadow="0px 6px 12px rgba(0, 0, 0, 0.15)"
          background="linear-gradient(white, white) padding-box, linear-gradient(45deg, #1E3A8A, #F9A8D4, #34D399, #E11D48) border-box"
        >
          <VStack spacing={6}>
            <FormControl id="name" isRequired>
              <FormLabel fontFamily="'Righteous', cursive" color="#1E3A8A">Your Name</FormLabel>
              <Input
                borderRadius="25px"
                border="2px solid #1E3A8A"
                bg="white"
                placeholder="Enter your name"
                _focus={{ borderColor: "#34D399" }}
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel fontFamily="'Righteous', cursive" color="#1E3A8A">Email Address</FormLabel>
              <Input
                type="email"
                borderRadius="25px"
                border="2px solid #1E3A8A"
                bg="white"
                placeholder="Enter your email"
                _focus={{ borderColor: "#34D399" }}
              />
            </FormControl>

            <FormControl id="message" isRequired>
              <FormLabel fontFamily="'Righteous', cursive" color="#1E3A8A">Message</FormLabel>
              <Textarea
                borderRadius="25px"
                border="2px solid #1E3A8A"
                bg="white"
                placeholder="Write your message"
                _focus={{ borderColor: "#34D399" }}
              />
            </FormControl>

            <Button
              mt={4}
              size="lg"
              bg="#1E3A8A"
              color="white"
              _hover={{ bg: "#34D399" }}
              borderRadius="25px"
              fontFamily="'Righteous', cursive"
              boxShadow="0px 6px 12px rgba(0, 0, 0, 0.15)"
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
