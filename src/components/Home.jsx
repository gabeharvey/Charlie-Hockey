import { Box, Heading, Text, Image } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box bg="#6B7280" minH="80vh" display="flex" flexDirection="column" alignItems="center" px={4}>
      <Box mb={2} width="100%" maxWidth="400px" display="flex" justifyContent="center" alignItems="center">
        <Image 
          src="/hockey-puck.png" 
          alt="Hockey Puck"
          width="200px" 
          height="auto"
        />
      </Box>
      <Box mb={8} position="relative" overflow="hidden" width="100%" maxWidth="600px" display="flex" justifyContent="center" alignItems="center">
        <Image 
          src="/charlie-hockey-2.png" 
          alt="Player Image"
          borderRadius="md"
          objectFit="cover" 
          width="80%" 
          height="auto"
          style={{
            display: 'block',
            maxWidth: '100%',
            height: 'auto',
            position: 'relative',
            zIndex: '0',
            transform: 'scale(0.8)', 
            maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 80%)',
            maskSize: '100% 100%',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 80%)'
          }}
        />
      </Box>
      <Box textAlign="center">
        <Heading as="h2" size="2xl" mb={4} color="#F9FAFB" fontFamily="'Righteous', cursive">
          Charlie Harvey
        </Heading>
        <Text fontSize="xl" color="#F9FAFB" fontFamily="'Righteous', cursive">
          Check out player bio
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
