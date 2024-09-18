/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, VStack, Container, Image } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';

const PlayerBio = () => {
  const headingAnimation = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
    config: { mass: 1, tension: 180, friction: 12 }, 
  });

  return (
    <Box bg="#6B7280" minH="80vh" display="flex" flexDirection="column" alignItems="center" px={4}>
      <Container maxW="container.lg" mt="50px">
        <VStack spacing={8} textAlign="center" py={1}>
          <animated.div style={headingAnimation}>
            <Heading
              mb={4}
              fontFamily="'Faster One', cursive"
              fontSize="48px"
              color="#F9FAFB"
              textAlign="center"
            >
              Player Bio
            </Heading>
          </animated.div>
          <Box
            bg="white"
            p={8}
            borderRadius="35px"
            boxShadow="0px 6px 12px rgba(0, 0, 0, 0.15)"
            maxW="800px"
            textAlign="left"
          >
            <Text
              fontFamily="'Righteous', cursive"
              fontSize="20px"
              color="#1E3A8A"
              mb={4}
            >
              <strong>Name:</strong> Charlie Harvey
            </Text>
            <Text
              fontFamily="'Righteous', cursive"
              fontSize="20px"
              color="#1E3A8A"
              mb={4}
            >
              <strong>DOB:</strong> 2/5/2010
            </Text>
            <Text
              fontFamily="'Righteous', cursive"
              fontSize="20px"
              color="#1E3A8A"
              mb={4}
            >
              <strong>Height:</strong> 5' 4''
            </Text>
            <Text
              fontFamily="'Righteous', cursive"
              fontSize="20px"
              color="#1E3A8A"
              mb={4}
            >
              <strong>Weight:</strong> 128lbs
            </Text>
            <Text
              fontFamily="'Righteous', cursive"
              fontSize="20px"
              color="#1E3A8A"
              mb={4}
            >
              <strong>Position:</strong> Forward
            </Text>
            <Text
              fontFamily="'Righteous', cursive"
              fontSize="20px"
              color="#1E3A8A"
              mb={4}
            >
              <strong>Team:</strong> AAA Nashville Predators
            </Text>
            <Text
              fontFamily="'Righteous', cursive"
              fontSize="20px"
              color="#1E3A8A"
              mb={4}
            >
              <strong>Achievements:</strong> 2:16 800 Meters
            </Text>
            <Text
              fontFamily="'Righteous', cursive"
              fontSize="20px"
              color="#1E3A8A"
            >
              Charlie Harvey is known for his fast skating and incredible goal-scoring ability. 4 years experience AAA Hockey Nashville Predators. 2 years experience Birmingham Bulls.
            </Text>
          </Box>
        </VStack>
      </Container>
      <Box
        textAlign="center"
        maxW="1280px"
        mx="auto"
        bg="transparent"
      >
        <Image
          src="/hockey-stick.png"
          alt="Hockey Stick"
          width="100%"
          height="auto"
        />
      </Box>
    </Box>
  );
};

export default PlayerBio;
