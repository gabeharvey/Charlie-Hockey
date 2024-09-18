import { Box, Text, Link, Container, Stack } from '@chakra-ui/react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" py="2rem" px="2rem" fontFamily="'Righteous', cursive" id="footer" position="relative" mt="150px">
      <Container>
        <Stack spacing={4} textAlign="center">
          <Stack direction="row" spacing={6} justify="center">
            <Link href="https://www.facebook.com/" isExternal aria-label="Facebook">
              <FaFacebook size={26} />
            </Link>
            <Link href="https://www.instagram.com/" isExternal aria-label="Instagram">
              <FaInstagram size={26} />
            </Link>
          </Stack>
          <Text>&copy; {new Date().getFullYear()} Charlie Harvey. All rights reserved.</Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
