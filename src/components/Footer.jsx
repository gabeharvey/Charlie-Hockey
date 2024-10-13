import { Box, Text, Link, Container, Stack } from '@chakra-ui/react';
import { FaSnapchat } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" py="2rem" px="2rem" fontFamily="'Righteous', cursive" id="footer" position="relative" mt="150px">
      <Container>
        <Stack spacing={4} textAlign="center">
          <Stack direction="row" spacing={6} justify="center">
            <Link href="https://www.snapchat.com/" isExternal aria-label="Snapchat">
              <FaSnapchat size={24} />
            </Link>
          </Stack>
          <Text>&copy; {new Date().getFullYear()} Charlie Harvey. All rights reserved.</Text>
          <Text><span className="tilt-prism-footer">Athlete X Elite</span></Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
