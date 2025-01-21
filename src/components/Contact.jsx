/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Box, Heading, Container, VStack, FormControl, FormLabel, Input, Textarea, Button, Text } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    emailjs
      .send('service_hzxmz7m', 'template_csw7ztu', formData, 'vyBZfl4uo5rC59oSM')
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitting(false);
          setMessageSent(true);
          setFormData({ name: '', email: '', message: '' }); 
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
          setError('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <Box bg="#6B7280" minH="80vh" display="flex" flexDirection="column" alignItems="center" px={4}>
      <Container maxW="container.lg" mt="50px">
        <VStack spacing={8} textAlign="center" py={1}>
          <Heading mb={4} fontFamily="'Righteous', cursive" color="#F9FAFB">Contact Us</Heading>
          <Heading mb={4} fontFamily="'Righteous', cursive" color="#F9FAFB" fontSize="lg">We'd Love to Hear from You</Heading>
        </VStack>

        <Box
          bg="#F9FAFB"
          borderRadius="35px"
          p={8}
          boxShadow="0px 6px 12px rgba(0, 0, 0, 0.15)"
          background="linear-gradient(white, white) padding-box, linear-gradient(45deg, #1E3A8A, #F9A8D4, #34D399, #E11D48) border-box"
        >
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <VStack spacing={6} align="stretch">
              <FormControl id="name" isRequired>
                <FormLabel fontFamily="'Righteous', cursive" color="#1E3A8A">Your Name</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  borderRadius="25px"
                  border="2px solid #1E3A8A"
                  bg="white"
                  placeholder="Enter your name"
                  _focus={{ borderColor: "#34D399" }}
                  width="100%" 
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel fontFamily="'Righteous', cursive" color="#1E3A8A">Email Address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  borderRadius="25px"
                  border="2px solid #1E3A8A"
                  bg="white"
                  placeholder="Enter your email"
                  _focus={{ borderColor: "#34D399" }}
                  width="100%" 
                />
              </FormControl>

              <FormControl id="message" isRequired>
                <FormLabel fontFamily="'Righteous', cursive" color="#1E3A8A">Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  borderRadius="25px"
                  border="2px solid #1E3A8A"
                  bg="white"
                  placeholder="Write your message"
                  _focus={{ borderColor: "#34D399" }}
                  width="100%" 
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
                isLoading={isSubmitting}
                type="submit"
                width="100%" 
              >
                Send Message
              </Button>

              {messageSent && <Text mt={4} color="green.500">Message sent successfully!</Text>}
              {error && <Text mt={4} color="red.500">{error}</Text>}
            </VStack>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
