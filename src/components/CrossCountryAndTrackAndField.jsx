import { useState } from 'react';
import { Box, Heading, Text, Container, VStack, SimpleGrid, Image, UnorderedList, ListItem, Image as ChakraImage } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';

const CrossCountryAndTrackAndField = () => {
  const [flipped, setFlipped] = useState(false);

  const springProps = useSpring({
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 800, friction: 80 },
  });

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <Box bg="#6B7280" minH="80vh" display="flex" flexDirection="column" alignItems="center" px={4}>
      {/* Divider Image */}
      <ChakraImage 
        src="/track-divider.png" 
        alt="Track Divider" 
        width="20%" 
        mt="10px" 
        mb="30px" 
        objectFit="contain"
      />

      <Container maxW="container.lg" mt="50px">
        <VStack spacing={8} textAlign="center" py={1}>
          <Heading mb={4} fontFamily="'Righteous', cursive" color="#F9FAFB">Cross Country and Track & Field</Heading>
          <Heading mb={4} fontFamily="'Righteous', cursive" color="#F9FAFB" fontSize="lg">(Click on the card to learn more)</Heading>
        </VStack>
        <SimpleGrid columns={1} spacing={10} width="100%" justifyItems="center">
          <Box 
            p={4} 
            width="100%" 
            maxWidth="400px" 
            cursor="pointer" 
            display="flex" 
            justifyContent="center"
          >
            <animated.div
              style={{
                transformStyle: 'preserve-3d',
                transform: springProps.transform,
                position: 'relative',
                width: '100%',
                height: '300px',
              }}
              onClick={handleFlip}
            >
              {/* Front of the Card */}
              <animated.div
                style={{
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '35px', 
                  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)', 
                  border: '8px solid #34D399', // Green border
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #34D399, #10B981) border-box', // Green Gradient
                }}
              >
                <Image
                  src={`/track-image.png`}
                  alt={`Cross Country & Track Front`}
                  borderRadius="25px" 
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </animated.div>

              {/* Back of the Card */}
              <animated.div
                style={{
                  position: 'absolute',
                  top: 0,
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  width: '100%',
                  height: '100%',
                  borderRadius: '35px', 
                  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#333333',
                  padding: '1rem',
                  backgroundColor: '#F9FAFB',
                  border: '8px solid #34D399', // Green border
                }}
              >
                <Text fontFamily="'Righteous', cursive" textAlign="center" mb={2} fontWeight="bold">
                  Key Aspects of Track and Cross Country
                </Text>
                <UnorderedList textAlign="left">
                  <ListItem>Endurance and Speed</ListItem>
                  <ListItem>Teamwork and Strategy</ListItem>
                  <ListItem>Mental Toughness</ListItem>
                  <ListItem>Overcoming Obstacles</ListItem>
                </UnorderedList>
              </animated.div>
            </animated.div>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CrossCountryAndTrackAndField;
